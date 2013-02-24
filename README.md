# [Media Query Indicator](https://github.com/AMeijerNL/mq-indicator)
============

A Bookmarklet / CSS Snippet that inserts a Media Query indicator into the page.


## WOKR IN PROGRESS

* THIS IS THE INITIAL COMMIT! STILL NEED TO FIX SOME LINKS AND REFERENCES

## Quick start

1. Drag this link to your bookmarks -> [MQ Indicator]("javascript:(function(f,a){var h=document.createElement('div');h.className='CURRENT-SIZE';var e=document.createElement('div');e.id='RESIZE-INDICATOR';e.appendChild(h);document.getElementsByTagName('BODY')[0].appendChild(e);var c=document.createElement('link'),b=document.getElementsByTagName('link')[0];c.rel='stylesheet';c.href=('https:'==location.protocol?'//ssl':'http://')+'github.com/AMeijerNL/mq-indicator/css/mq-indicator.min.css';document.head.appendChild(c,b)}());")
2. Go to any website 
3. When the page has loaded, select the bookmark you just created
4. There you have it: a Media Query indicator 


## How it works

* The bookmarklet uses Javascript to insert two elements & a small (only 2kb minified!) CSS file into the page
* The selectors (and id's) are well chosen, so it is very unlikely it will overrule any of your existing selectors
* Cross-browser compatible - as long as Media Queries are supported (Chrome, Safari, Firefox, IE10+).


## Supported formats

* Feature phone size (portrait)
* Phone size (portrait & landscape)
* Tablet size (portrait & landscape)
* Desktop / PC size (landscape)
* Extra Large / TV size (landscape)

![](https://raw.github.com/AMeijerNL/mq-indicator/img/indicators.png)


## Customization & more fun!

* In case you don't like a Orange (background color), here's some more bookmarklets for you:
* Red: [MQ Indicator](https://github.com/AMeijerNL/mq-indicator/js/mq-indicator.js)
* Yellow: [MQ Indicator](https://github.com/AMeijerNL/mq-indicator/js/mq-indicator.js)
* Blue: [MQ Indicator](https://github.com/AMeijerNL/mq-indicator/js/mq-indicator.js)
* Green: [MQ Indicator](https://github.com/AMeijerNL/mq-indicator/js/mq-indicator.js)
* Black (white indicator): [MQ Indicator](https://github.com/AMeijerNL/mq-indicator/js/mq-indicator.js)
* Want more? Fork the project and created your own!

