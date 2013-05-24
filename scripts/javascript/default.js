﻿/// <reference path="../base/jquery-1.7.2-vsdoc.js" />
$(document).ready(function () {
    app.init();
});

window.app = window.app || {};
//twitter bootstrap
app.bootstrap = app.bootstrap || {};
app.bootstrap.apply = function() {
    $('body').addClass('container');
    $('body > header, body > #content, body > footer').wrapAll('<section class="row-fluid" />');
    $('body > .row-fluid > header').addClass('span2');
    $('body > .row-fluid > #content').addClass('span10');
    $('body > .row-fluid > footer').addClass('span12');
};
//google code prettify
app.prettyPrint = app.prettyPrint || {};
app.prettyPrint.apply = function() {
    app.prettyPrint.load();
    app.prettyPrint.run();
};
app.prettyPrint.load = function() {
    $('head').append('<script src="//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js"></'+'script>');
    $('head').append('<link href="//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css" rel="stylesheet" type="text/css">');
};
app.prettyPrint.run = function() {
    if(window.prettyPrint)
        $('pre').addClass('prettyprint');
        window.prettyPrint();
        $('pre').removeClass('prettyprint');
    else
        setTimeout(app.prettyPrint.run, 100);
};

app.init = function() {
    app.bootstrap.apply();
    app.prettyPrint.apply();
};