;'use strict';

// Main navigation

    $(function() {

        var mobileMenuBtn = $('.js-menu-btn'),
            mobileMenu = $('.js-menu-mobile'),
            windowWidth = $(window).width(),
            mobileScreenWidth = 800;

        $(mobileMenuBtn).on( 'click', function(event) {
            event.preventDefault();
            mobileMenu.slideToggle();
        });

        $(window).resize( function() {
            if( windowWidth > mobileScreenWidth && mobileMenu.is(':hidden') ) {
                mobileMenu.removeAttr('style');
            }
        });

    });

// Slider promo

    $('.js-slider-promo').slick({
        fade: true,
        prevArrow: "<span class='slider-promo__arrows slider-promo__arrow-left'></span>",
        nextArrow: "<span class='slider-promo__arrows slider-promo__arrow-right'></span>"
    });