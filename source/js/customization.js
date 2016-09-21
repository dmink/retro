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