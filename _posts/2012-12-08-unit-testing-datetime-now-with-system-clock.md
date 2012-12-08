---
layout: post
title: Unit Testing DateTime.Now with System.Clock
permalink:
 - posts/unit-testing-datetime-now-with-system-clock
date: 2012-12-08 00:00:00 +00:00
tags:
 - system.clock
 - datetime
 - unit-testing
---

## The Problem  
Unit testing code that uses `DateTime.Now` is difficult. Take this class for example:  

    public class MyEntity
    {
        public DateTime CreatedOn { get; private set; }

        public MyEntity()
        {
            CreatedOn = DateTime.Now;
        }
    }

and its accompanying unit test:  

    [TestMethod]
    public void WhenInstantiated_CreatedOnShouldEqualDateTimeNow()
    {
        var actual = new MyEntity();

        Assert.AreEqual(DateTime.Now, actual.CreatedOn);
    }

This unit test will pass ***sometimes***. Why? That's because the behavior of `DateTime.Now` is non-deterministic. We have no idea what `DateTime.Now` will return. This makes unit testing code that uses `DateTime.Now` difficult.

Convention tells us we should isolate such a dependency.

## The Solution  
`System.Clock` is one of many solutions to this common problem, and is available via NuGet.  

    PM> Install-Package System.Clock
    
Here is the same class, refactored to use `System.Clock`:  

    public class MyEntity
    {
        public DateTime CreatedOn { get; private set; }

        public MyEntity()
        {
            CreatedOn = Clock.Now;
        }
    }

 and its accompanying unit test, refactored to use `System.Clock`:  
 
    [TestMethod]
    public void WhenInstantiated_CreatedOnShouldEqualDateTimeNow()
    {
        Clock.Freeze();
        var actual = new MyEntity();

        Assert.AreEqual(Clock.Now, actual.CreatedOn);
    }

This unit test will pass ***all the time***. Why? That's because the behavior of `Clock.Now` has be isolated and is now deterministic. By calling `Clock.Freeze()`, we stop time. Now, each call to `Clock.Now` will always be the same. Now we can unit test with confidence.
- - -

## More  
Other features of `System.Clock`:

    Clock.Freeze(new DateTime(2012, 12, 21);//freeze at a specific time
    Clock.Unfreeze(); //return time to the present

See the source and package on [GitHub](https://github.com/rbwestmoreland/system.clock) & [NuGet](http://nuget.org/packages/System.Clock)