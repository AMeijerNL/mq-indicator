/*
  @AMeijerNL - 2013

  A Media Query indicator, created using only CSS!
  Available on Github: https://github.com/AMeijerNL/mq-indicator
    - as a bookmarklet
    - css snippet

  This is the uncompressed source for the bookmarklet!
*/

(function(d,t){
    // Insert the HTML element
    var n=document.createElement('div'); // create a <div>
        n.className = 'CURRENT-SIZE'; // give it a class
    var p = document.createElement('div'); // create another <div>
        p.id='RESIZE-INDICATOR'; // git it an id
        p.appendChild(n); // append the first div (.CURRENT-SIZE) to the wrapper (#RESIZE-INDICATOR)
    document.getElementsByTagName('BODY')[0].appendChild(p); // add to the page!

    // Insert the CSS into the head
    var g=document.createElement('link'),
      s=document.getElementsByTagName('link')[0];
      g.rel='stylesheet';
      g.href=('https:'==location.protocol?'//ssl':'http://')+'github.com/AMeijerNL/mq-indicator/css/mq-indicator.min.css';
      document.head.appendChild(g,s); // add it to the page!
  }()
);

