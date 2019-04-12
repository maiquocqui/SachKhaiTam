'use strict';

$(document).ready(function () {
    console.log("COPYRIGHT © 2018, Quoc Qui Mai.");
    $('.product-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
    $('.product-slick2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true
    });
    $('.keyword-slick').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false
    });

    $('.slide-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slide-nav'
    });
    $('.slide-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide-main',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.cart-toggle').click(function () {
        $(this).toggleClass('active');
        $('.cart-panel').fadeToggle(300);
    });
});