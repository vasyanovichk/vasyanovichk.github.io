//  require components/**.*   
// require components/hamburger.*
// require components/form/form.*

$(window).ready(function () {

	// плавное перемещение страницы к нужному блоку
	$(".go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({ scrollTop: destination }, 800);
	});
});