// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$( document ).ready(function() {
  $('#fig-willkommen').addClass( "js-hover-figcaption" );
});

$('.navbar-center').on('mouseenter', function() {
  $('#fig-willkommen').removeClass( "js-hover-figcaption" );
});

$('.figure-width').on('mouseenter', function() {
  $('#fig-willkommen').removeClass( "js-hover-figcaption" );
});

$('.navbar-center').on('mouseenter', function() {
  $('#fig-willkommen').removeClass( "js-hover-figcaption" );
});

$('#mobile-menu').on('mouseenter', function() {
  $('#navbar').addClass( "js-hover-navbar" );
});

$('#close').on('mouseenter', function() {
  $('#navbar').removeClass( "js-hover-navbar" );
});

/*
$('#link-willkommen').on('mouseenter', function() {
  $('#fig-willkommen').addClass( "js-hover-figcaption" );
});

$('#link-willkommen').on('mouseleave', function() {
  $('#fig-willkommen').removeClass( "js-hover-figcaption" );
});
*/

$('#link-neubau').on('mouseenter', function() {
  $('#fig-neubau').addClass( "js-hover-figcaption" );
});

$('#link-neubau').on('mouseleave', function() {
  $('#fig-neubau').removeClass( "js-hover-figcaption" );
});

$('#link-umbau').on('mouseenter', function() {
  $('#fig-umbau').addClass( "js-hover-figcaption" );
});

$('#link-umbau').on('mouseleave', function() {
  $('#fig-umbau').removeClass( "js-hover-figcaption" );
});

$('#link-service').on('mouseenter', function() {
  $('#fig-service').addClass( "js-hover-figcaption" );
});

$('#link-service').on('mouseleave', function() {
  $('#fig-service').removeClass( "js-hover-figcaption" );
});

$('#link-wasserenthärtung').on('mouseenter', function() {
  $('#fig-wasserenthärtung').addClass( "js-hover-figcaption" );
});

$('#link-wasserenthärtung').on('mouseleave', function() {
  $('#fig-wasserenthärtung').removeClass( "js-hover-figcaption" );
});

$('#link-blitzschutz').on('mouseenter', function() {
  $('#fig-blitzschutz').addClass( "js-hover-figcaption" );
});

$('#link-blitzschutz').on('mouseleave', function() {
  $('#fig-blitzschutz').removeClass( "js-hover-figcaption" );
});

$('#link-ausbildung').on('mouseenter', function() {
  $('#fig-ausbildung').addClass( "js-hover-figcaption" );
});

$('#link-ausbildung').on('mouseleave', function() {
  $('#fig-ausbildung').removeClass( "js-hover-figcaption" );
});

$('#link-galerie').on('mouseenter', function() {
  $('#fig-galerie').addClass( "js-hover-figcaption" );
});

$('#link-galerie').on('mouseleave', function() {
  $('#fig-galerie').removeClass( "js-hover-figcaption" );
});

$('#link-kontakt').on('mouseenter', function() {
  $('#fig-kontakt').addClass( "js-hover-figcaption" );
});

$('#link-kontakt').on('mouseleave', function() {
  $('#fig-kontakt').removeClass( "js-hover-figcaption" );
});
