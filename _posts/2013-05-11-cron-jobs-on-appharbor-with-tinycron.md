---
layout: post
title: Cron Jobs on AppHarbor with TinyCron
permalink:
 - posts/cron-jobs-on-appharbor-with-tinycron
date: 2013-05-11 00:00:00 +00:00
tags:
 - cron
 - appharbor
 - tinycron
---

##The Problem  
From time to time we need to run a recurring job to automate some mundane, albeit important, task. Things like: pinging a url, sending an email, or processing a queue.  

##The Solution
We'll be using [AppHarbor](https://appharbor.com)'s *background workers* and [TinyCron](https://github.com/rbwestmoreland/TinyCron) to schedule and run our recurring jobs.   

###Step1: Creating an AppHarbor background worker
[AppHarbor](https://appharbor.com)'s *background workers* are just .NET console applications.

    using System;
    
    class Program
    {
        static void Main(string[] args)
        {
            //your logic
        }
    }

###Step 2: Adding TinyCron
[TinyCron](https://github.com/rbwestmoreland/TinyCron) brings cron-like scheduling and execution to .NET.  

Let's include it in our project. Download a copy of [TinyCron.cs](https://github.com/rbwestmoreland/TinyCron/blob/master/src/TinyCron/TinyCron.cs) from GitHub and include it in your project. 

###Step 3: Scheduling a Recurring Job  
Let's bring it all together and schedule a recurring job.  

    using System;
    using TinyCron;
    
    class Program
    {
        static void Main(string[] args)
        {
            var tinyCron = new TinyCronApplication();
            var cronJob = new AnonymousTinyCronJob("* * * * *", () => { /*your logic*/ });
            tinyCron.Register(cronJob);
            tinyCron.Start();
        }
    }
    
OK, that's simple, but pointless. Let's actually do something useful. Like pinging a url.  

    using System;
    using System.Net.Http;
    using TinyCron;
    
    class Program
    {
        static void Main(string[] args)
        {
            var tinyCron = new TinyCronApplication();
            var cronJob = new AnonymousTinyCronJob("* * * * *", () => 
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.GetAsync("http://example.com").Wait();
                }
            });
            tinyCron.Register(cronJob);
            tinyCron.Start();
        }
    }

**TinyCron**'s *AnonymousTinyCronJob* is great for simple jobs. You can also extend **TinyCron**'s *TinyCronJob* and create reusable jobs.  

    using System;
    using System.Net.Http;
    using TinyCron;
    
    class Program
    {
        static void Main(string[] args)
        {
            var tinyCron = new TinyCronApplication();
            var cronJob = new PingCronJob("* * * * *", "http://example.com");
            tinyCron.Register(cronJob);
            tinyCron.Start();
        }
    }
    
    public class PingCronJob : TinyCronJob
    {
        private string _url;

        public PingCronJob(string cronExpression, string url)
            : base(cronExpression)
        {
            _url = url;
        }

        public override void Run()
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.GetAsync(_url).Wait();
            }
        }
    }
    
###Step 4: Deploy to AppHarbor
**AppHarbor** supports deploying your application many different ways. [Learn how](http://support.appharbor.com/kb/getting-started/deploying-your-first-application-using-git) to deploy your application to **AppHarbor**.  
    
##Conclusion  
Congratulations! You have successfully created and deployed an **AppHarbor** *background worker* which can schedule and execute recurring jobs using **TinyCron**. **AppHarbor** *background workers* and **TinyCron** make a powerful combination.  

**What will AppHarbor & TinyCron automate for you?**  

