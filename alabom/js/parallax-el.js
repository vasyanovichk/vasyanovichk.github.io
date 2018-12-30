$(function () {
	/* Scroll event handler */
    $(window).bind('scroll',function(e){  // К обьекту виндо (окно) мы цепляем событие скрол.
    	parallaxScroll();     // и в момент скрола запускаем функцию parallaxScroll

    });

	    /* Scroll the background layers */ /* Параллакс от скролла */
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		 $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
		 $('#parallax-bg2').css('top',(0-(scrolled*.45))+'px');
		$('#parallax-bg3').css('top',(0-(scrolled*.25))+'px');  // можно также добавить класс к которому прописать свои стили. Скопировать перед точки с запятой: .addClass('flying')
	}
    
});



// контент с секции result пропадает до скрола 1300 px, после появляеться
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1300){  
            $('#parallax-bg1').removeClass ("d-none");
        }
        else{
            $('#parallax-bg1').addClass("d-none");
        }
         if ($(this).scrollTop() > 3250){  
            $('#parallax-bg1').addClass ("parallax-bg1-none");
        }
        else{
            $('#parallax-bg1').removeClass("parallax-bg1-none");
        }
    });
