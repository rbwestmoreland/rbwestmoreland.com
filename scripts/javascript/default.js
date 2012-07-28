﻿/// <reference path="../base/jquery-1.7.2-vsdoc.js" />
$(document).ready(function () {
    //Apply twitter Bootstrap classes
    $('body').addClass('container');
    $('body > header, body > #content, body > footer').wrapAll('<section class="row-fluid" />');
    $('body > .row-fluid > header').addClass('span2');
    $('body > .row-fluid > #content').addClass('span8');
    $('body > .row-fluid > footer').addClass('span12');
});