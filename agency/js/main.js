//  require components/**.*   поставить = для подключения всех компонентов

$(window).ready(function () {

    // плавное перемещение страницы к нужному блоку
    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 800);
    });

    $(function () {
        $('.absolute').prependTo('body');
    });

    $(function () {
        $('.works__bg-element').prependTo('.bg-wrap');
    });

    $(function () {
        $('.works__list').prependTo('.works');
    });

    $(function () {
        $('.offer__skater').prependTo('.relative-skater');
    });

    $(function () {
        $('.client__bg-element').prependTo('.relative-bg-client');
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    });
    wow.init();
});