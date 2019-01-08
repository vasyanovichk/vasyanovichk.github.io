$(function () {
    // плавное перемещение страницы к нужному блоку
    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });




    // Menu opener hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });



});


