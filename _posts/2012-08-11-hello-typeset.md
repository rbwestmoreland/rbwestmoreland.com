---
layout: post
title: Hello Typeset
permalink:
 - posts/hello-typeset
date: 2012-08-11 00:00:00 +00:00
tags:
 - typeset
---
Since I said [goodbye to Posterous](/posts/goodbye-posterous), I have been in search
of a new blog engine. I really liked [Jekyll](https://github.com/mojombo/jekyll), but 
I decided to build my own blog engine, [Typeset](https://github.com/typeset/typeset).  

## About  
Typeset is a lightweight blog engine. It is open source and licensed 
under the MIT license.  

#### Features  
* Write in [markdown](http://daringfireball.net/projects/markdown) and [textile](http://textile.sitemonks.com) 
* Style in Css, [LESS](http://lesscss.org), and [Sass](http://sass-lang.com)
* Script in JavaScript and [CoffeeScript](http://coffeescript.org)
* Automatic compilation, bundling, and minification of all styles and scripts
* Automatic atom feed generation
* REST API for your posts
* HTML5 Layout
* No database  

- - -

## Getting Started  
Typeset is easy to use. Our [wiki](https://github.com/typeset/typeset/wiki) 
has detailed guides to get you started. You can also checkout our 
[sample Typeset site](https://github.com/typeset/typeset-sample-site) to get 
you started.  

#### Example Post  
Write your posts in [markdown](http://daringfireball.net/projects/markdown) 
or [textile](http://textile.sitemonks.com). You have complete control over your 
post's title, publish date, and permalinks.  
<pre>
---
title: Hello World
date: 2012-06-19 16:46:51 -04:00
permalink: 
 - posts/hello-world
---
This is my first typeset post!
</pre>

#### Easy to Deploy  
Deploy Typeset to your favorite PaaS using [Typeset Deploy](http://typeset-deploy.apphb.com/). 

#### Typeset Loves Git
Typeset loves git. Your content should live in a git repository, not in an inaccessible database. 
Typeset will automatically clone your repository with all your content and serve it. 
Push changes to your repository? No problem. Typeset will pull in those changes, updating your 
site. Nothing for you to worry about. ***This is how blogging should feel.***  

- - -

## More  
Learn more about Typeset's features and how to get started [over at GitHub](https://github.com/typeset/typeset).