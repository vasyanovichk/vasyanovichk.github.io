$(function () {
	/* Scroll event handler */
    // $(window).bind('scroll',function(e){     // К обьекту window (наше браузерное окно) мы цепляем (bind -сцепить) событие скролл. И в момент скрола запускаем parallaxScroll 
    // 	parallaxScroll();
    // });

    /* Scroll the background layers */
	// function parallaxScroll(){
	// 	var scrolled = $(window).scrollTop();
	// 	$('#parallax-bg3').css('top',(0-(scrolled*0.75))+'px');
	// }
    







    /* Параллакс от скролла */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.boy').css('top',(0-(scrolled*0.75))+'px');
    }





  /* Параллакс от движения мыши 1:10 мин + 1:17:20 (несколько єлементов) */  
  // паралакс одного элемента 
    // if ($(window).width() > 960)    
    // {
    //     $('body').parallax({
    //         'elements': [
    //             {
    //                 'selector': '.circle',
    //                 'properties': {
    //                     'x': {
    //                         'right': {
    //                             'initial': 0,
    //                             'multiplier': 0.04,
    //                             'unit': 'px',
    //                             'invert': false
    //                         }
    //                     },
    //                     'y': {
    //                         'top': {
    //                             'initial': 0,
    //                             'multiplier': 0.1,
    //                             'unit': 'px',
    //                             'invert': true
    //                         }
    //                     }
    //                 }
    //             }
    //         ]
    //     });
    // }









  /* Параллакс от движения мыши 1:10 мин + 1:17:20 (несколько єлементов) */  
  // тоже самое, но несколько элементов  
    if ($(window).width() > 960)    
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.offer__penguin',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 101,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 55,
                                'multiplier': 0.001,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.offer__oval',  //  .circle  - класс другого элемента
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 426,
                                'multiplier': 0.01,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 117,
                                'multiplier': 0.01,
                                'unit': 'px',
                                'invert': false
                            }
                        }
                    }
                },
                 {
                    'selector': '.offer__circle',  //  .circle  - класс другого элемента
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 23,
                                'multiplier': 0.03,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 131,
                                'multiplier': 0.02,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }

            ]
        });
    }





    });












