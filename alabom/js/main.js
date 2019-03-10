jQuery(document).ready(function($) {
    
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

});











function Number(value) {
    let first = value;

    return {
        getNumber(){
            return first;
        },
        setNumber(value){
            first = value;
        }
    }
}

let number1 = new Number(1000);


number1.setNumber(2000);

console.log(number1.getNumber())
