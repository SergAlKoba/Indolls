$(document).ready(function(){
    
    if($(window).scrollTop() >= 30){
        $('header').addClass('active2');
    }else{
        $('header').removeClass('active2');
    }

    $('.close-popup').on('click', function(){
        $('.popup-contact').fadeOut(500);
        $('.popup-service').fadeOut(500);
        $('.popup-popup-thank').fadeOut(500);
    });

    $('.call_js').on('click', function(){
        $('.popup-contact').fadeIn(500);
    });

    $('.order_js').on('click', function(){
        var service = $(this).data('service');
        $('.popup-service').fadeOut(500);
        $('#' + service).fadeIn(500);
    });

    $('.open-menu').on('click', function(){
        $('.mobile-menu').addClass('active');
        $(this).find('ul').toggleClass('active');
    });

    $('.delete').on('click', function(){
        $('.mobile-menu').removeClass('active');
    });

    $(".header nav").on("click","a", function (event) {
        $('.header nav li').removeClass('active');
        $(this).parent('li').addClass('active');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".footer-menu li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -100;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".mobile-menu li").on("click","a", function (event) {
        $('.mobile-menu').removeClass('active');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 56;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".open-menu li").on("click","a", function (event) {
        $(".open-menu ul").removeClass('active');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});

$(window).scroll(function(){

    if($(window).scrollTop() >= 30){
        $('header').addClass('active2');
    }else{
        $('header').removeClass('active2');
    }

});