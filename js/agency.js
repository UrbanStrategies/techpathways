/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

 body = document.body;
function moveCircle(e) {
    cx = Math.ceil($('body').width() / 2.0);
    cy = Math.ceil($('body').height() / 2.0);
    dx = event.pageX - cx;
    dy = event.pageY - cy;

    tiltx = (dy / cy);
    tilty = - (dx / cx);
    var shadowtiltX = -(tiltx * 10);
    var shadowtiltY = -(tilty * 10);
    TweenMax.to(".dots", 5, {
      x: tilty*80,
      y: tiltx*80,
      ease: Back.easeOut.config(1.7)
    });

    TweenMax.to(".brackets", 5, {
      x: tilty*-30,
      y: tiltx*-30,
      ease: Back.easeOut.config(1.7)
    });

    TweenMax.to(".hash", 5, {
      x: tilty*10,
      y: tiltx*10,
      ease: Back.easeOut.config(1.7)
    });

    TweenMax.to(".hashdecoration", 5, {
      x: tilty*-60,
      y: tiltx*-60,
      ease: Back.easeOut.config(1.7)
    });
}
$(window).on('mousemove', moveCircle);
