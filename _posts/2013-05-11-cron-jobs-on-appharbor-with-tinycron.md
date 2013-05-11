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
From time to time we need to run a recurring job to automate some mundane, albeit important, task. Things like: pinging a url, sending an email, or processing a queue. This is *crap work*. Nobody wants to do *crap work*.  

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

Adding **TinyCron** to your project is simple. Download a copy of [TinyCron.cs](https://github.com/rbwestmoreland/TinyCron/blob/master/src/TinyCron/TinyCron.cs) from GitHub and include it in your project. 

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
    
##Conclusion  
That's it! **TinyCron** is just that simple. The rest is up to you.

**What *crap work* will your TinyCron application automate for you?**  

---  

##More Information  
[TinyCron](https://github.com/rbwestmoreland/TinyCron) on GitHub  
An introduction to [cron expressions](http://en.wikipedia.org/wiki/Cron_job#CRON_expression)  
