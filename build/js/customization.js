;'use strict';

// Main navigation - mobile

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

// Main navigation - moving to anchor and active item

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 60 + 'px'
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();

        $('.js-main-menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top-60 <= scrollPos && refElement.position().top-60 + refElement.height() > scrollPos) {
                $('.js-main-menu li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

    $(window).scroll(function () {

        if  ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $('.js-main-menu li:last-child a').addClass('active');
            $('.js-menu-link-penult').removeClass('active');
        }
    });

// Slider promo

    $('.js-slider-promo').slick({
        fade: true,
        prevArrow: "<span class='slider-promo__arrows slider-promo__arrow-left'></span>",
        nextArrow: "<span class='slider-promo__arrows slider-promo__arrow-right'></span>"
    });

// Portfolio grid

    $(function () {

        var filterList = {

            init: function () {

                $('.js-portfolio-preview').mixItUp({
                    selectors: {
                        target: '.portfolio-preview__item',
                        filter: '.filter-list__label'
                    },
                    load: {
                        filter: '.app, .card, .icon, .logo, .web'
                    }
                });

            }

        };

        // Run the show!
        filterList.init();


    });