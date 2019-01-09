
$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('.nav').addClass("sticky");
    }
    else{
        $('.nav').removeClass("sticky");
    }
    if ($(this).scrollTop() > 400){  
        $('.nav .nav__btn-shop').removeClass ("d-block");
    }
    else{
        $('.nav .nav__btn-shop').addClass("d-none");
    }
});

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 900) {
//       $(".play-rubberBand").addClass("d-none");
//     } else {
//       $(".play-rubberBand").removeClass("d-none");
//     }
//   });
// });

    $(window).scroll(function() {
        $('.delay-right').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+950) {
                $(this).addClass("fadeInRight");
            }
        });
        $('.delay-left').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+950) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

$(window).scroll(function (){
    $('.play-rubberBand').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('rubberBand');
        }
    });
});﻿

$(window).scroll(function (){
    $('.play-swing').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('swing');
        }
    });
});﻿

$(window).scroll(function (){
    $('.play-bounce').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('bounce');
        }
    });
});﻿

$(function () {
    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});



