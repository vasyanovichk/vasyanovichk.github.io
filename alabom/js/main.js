


 
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


// $('.#parallax-bg3').scroolly([{
//   from: 'doc-center',
//   to: 'doc-center',
//   css: {
//     color: 'red'
//   }
// }]);



 // $(window).scroll(function() {
 //    if ($(this).scrollTop() > 50){  
 //           ($(this).offset(".next");

 //               });


$(function () {
    // плавное перемещение страницы к нужному блоку
    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });





  // $.scrollify({
  //   section : ".scroll",
  //   sectionName : "section-name",
  //   easing: "easeOutExpo",
  //   scrollSpeed: 1100,
  //   offset : -100,
  //   scrollbars: true,
  //   before:function() {},
  //   after:function() {}
  // });





//http://embed.plnkr.co/p2rt7UHiXRsRYxHCWImM/
  // $.scrollify({
  //   section : ".scroll",
  //   sectionName : "section-name",
  //   easing: "easeOutExpo",
  //   scrollSpeed: 1100,
  //   offset : -100,
  //   scrollbars: true,
  //   before:function() {},
  //   after:function() {}
  // });







});



