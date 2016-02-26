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
///particle generator
// $( document ).ready(function() {
//
//
// function gogetem() {
//
//
//   var total = 50;
//   var w = $("#contact").width();
//   var h = $("#contact").height();
//   var setY = $("#contact").offset();
//   console.log(setY);
//
//   for (i=0; i<total; i++){
//     $("#dotgenerator").append('<div class="hashtag"></div>')
//     TweenMax.set($(".hashtag")[i],{x:Random(w),y:0 ,opacity:1,scale:Random(0.5)+0.5});
//     animm($(".hashtag")[i]);
//   }
//
//   for (i=0; i<total; i++){
//     $("#dotgenerator").append('<div class="bracket"></div>')
//     TweenMax.set($(".bracket")[i],{x:Random(w),y:0 ,opacity:1,scale:Random(0.5)+0.5});
//     animm($(".bracket")[i]);
//   }
//
//   function animm(elm){
//     TweenMax.to(elm,random(10, 30)+4,{y:h*2,ease:Linear.easeNone,repeat:-1, delay:-5});
//     TweenMax.to(elm,random(10, 30)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
//     TweenMax.to(elm,random(10, 50)+1,{scaleX:0.2,rotation:Random(90), repeat:-1,yoyo:true,ease:Sine.easeInOut})
//     TweenMax.to(elm,random(10, 20)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
//   };
//
//   function Random (max) {
//     return Math.random()*max;
//   }
//
//   function random(min, max) {
//     return min + Math.floor( Math.random() * (max - min));
//   }
// }
// gogetem();
// });
