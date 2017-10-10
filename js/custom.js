/**
 * Created by AHMED on 6/5/2017.
 */

$(function() {

    //disable form search [nav]
    form_search();

    //add hover class
    add_class_hover();

    //fixed header
    fixed_header();

    //slide down drop menu
    collapse_menu();

    //nice scroll plugin
    nice_scroll();

    //slick plugin
    slick();

    //show information about institute section
    show_text();

    //carousal 2
    carousal2();

});

//add class hover-main-bg-color for hover on links
function add_class_hover() {

    $('.dropmenu > li > a').addClass('hover-main-bg-color');

}


//disable form search [navbar]
function form_search() {

    icon = $('#icon-search');
    form = $('#form-search');

    icon.on('click' , function() {

        $(this).toggleClass('enable');

        if (icon.hasClass('enable')) {

            form.fadeIn();

        }else {

            form.fadeOut();
        }

    });
}

//fixed header
function fixed_header() {

    header     = $('#main-header');
    nav        = $('#nav');
    navHeight  = nav.height() + 20;
    show       =  header.height() - navHeight;

    $(window).on('scroll' , function () {

        if ($(this).scrollTop() >= show) {

            nav.addClass('fixed-top');

        }else {

            if (nav.hasClass('fixed-top')) {

                nav.removeClass('fixed-top');
            }
        }
    });
}

//collapse dropdown menu
function collapse_menu() {

    collapse = $('#collapse');
    menu     = $('#nav ul.nav');

    collapse.on('click' , function () {

        collapse.toggleClass('open');

        if (collapse.hasClass('open')) {

            collapse.removeClass('fa-bars').addClass('fa-times');
            menu.slideDown(200);

        }else {

            collapse.removeClass('fa-times').addClass('fa-bars');
            menu.slideUp(200);
        }

    });

    //drop menu
    toggleMenu  = $('.dropmenu-toggle a');

    toggleMenu.on('click' , function () {

        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {

            $(this).siblings('.dropmenu').show();

        }else {

            $(this).siblings('.dropmenu').hide();
        }

    })

}

//nice scroll plugin
function nice_scroll() {

    $('html').niceScroll({
        cursorcolor: '#CD201F',
        cursorborder: "1px solid #f5f5f5",
        zindex: '99999999'
    });
}

//slick slider
function slick() {

    $('.slider-widget .items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.nav-slider',
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.nav-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-widget .items',
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    arrows: true
                }
            }
        ]
    });

}

//show text
function show_text() {

    var divs = $(".institute-info .text");
    var length = divs.length;
    var divsIndex = -1;

    function show_div() {
        ++divsIndex;

        divs.eq(divsIndex % length)
            .fadeIn(500)
            .delay(3500)
            .fadeOut(500 , show_div);
    }

    show_div();
}

//carousel 2
function carousal2() {
    $('.carousel2 .items').slick({
        dots: false,
        arrows: true,
        fade: true,
        speed: 1000,
        draggable: false,
        prevArrow: '.carousel2 .controller .prev',
        nextArrow: '.carousel2 .controller .next'
    });
}