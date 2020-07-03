$(document).ready(function(){
    
    var reviewsSlider = $('.banner-slider');

    reviewsSlider.on("init", function(event, slick){
        $(".banner_count").html( '0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    reviewsSlider.on("afterChange", function(event, slick, currentSlide){
        $(".banner_count").html('0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    reviewsSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.your-class-arrow'),
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
    });

    $('.slider-top').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
              }
            }
        ]
    });

    $('.slider-nav').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        verticalSwiping: true,
        asNavFor: '.slider-top',
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
    });

    $('.services-tabs li').on('click', function(){
        var tabsData = $(this).data('tabs');
        $('.services-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.services-item').removeClass('active');
        $('#' + tabsData ).addClass('active');
        $('.slider-top').slick('setPosition');
        $('.slider-nav').slick('setPosition');
    });

    $('.characters-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                  prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
              }
            }
        ]
    });

    $('.characters-item .img').matchHeight({
        byRow: false
    });

    if($(window).width() >= 1280){

        $('.characters-slider').slick('unslick');
  
    }

    var portfolioSliderMobile = $('.slider-mobile');

    portfolioSliderMobile.on("init", function(event, slick){
        $(".portfolio_mobile_count").html( '0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    portfolioSliderMobile.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_mobile_count").html('0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    portfolioSliderMobile.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                  prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
              }
            }
        ]
    });

    var portfolioSliderDesc = $('.slider-desc');

    portfolioSliderDesc.on("init", function(event, slick){
        $(".portfolio_desc_count").html( '0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    portfolioSliderDesc.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_desc_count").html('0' + parseInt(slick.currentSlide + 1) + '<span><i>/</i>' + 0 + + slick.slideCount + '</span>');
    });

    portfolioSliderDesc.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
    });
    
    $('.reviews-slider').slick({
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-right"></i></button>',
                    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
                }
            },
        ]
    });

});