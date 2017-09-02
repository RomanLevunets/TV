$(document).ready(function() {


    // slider
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        speed: 700,
    });


    // active
    $('.rate-list li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.rate-list li').removeClass('active');
            $(this).addClass('active');
        }
    });



    $('.rates-right a').click(function() {
        if (!$(this).hasClass('active')) {
            $('.rates-right a').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.form-selection label').click(function () {
        $(this).parents('.select').toggleClass('checked');
    });


});

