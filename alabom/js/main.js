
$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('.nav').addClass("sticky");
    }
    else{
        $('.nav').removeClass("sticky");
    }
    if ($(this).scrollTop() > 400){  
        $('.nav .nav__btn-shop').removeClass ("d-none");
    }
    else{
        $('.nav .nav__btn-shop').addClass("d-none");
    }
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



