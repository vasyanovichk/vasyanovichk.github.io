


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


$(function () {
    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});


wow = new WOW(
    {
      mobile: false
    }
    )
wow.init();


