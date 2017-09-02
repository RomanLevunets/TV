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
    // $('.service-check').click(function () {
    //     $('.service-check').toggleClass('checked');
    // });
    //
    // var showTopService = (function () {
    //     $('.service-check').on('click', function () {
    //         $(this).parents('.Tservices-item').toggleClass('active');
    //         $(this).parent().siblings('.Tservices-item').removeClass('active');
    //     });
    // });
    // showTopService();
    function checkService() {
        $('.service-check').each(function() {
            var $this = $(this),
                $chekbox = $this.find('input[type="checkbox"]');
            if (!$($chekbox).hasClass("patched4")) $chekbox.unbind().on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).prop('checked', true);
                } else {
                    $(this).prop('checked', false);
                }
                $(".tariff-list").stop().fadeOut();
                is_($this);
            }).addClass("patched4");
            is_($this);
        });

        function is_(elem) {
            var $elem = $(elem),
                $input = $elem.find('input[type="checkbox"]');
            if ($input.is(':checked')) {
                $elem.addClass('checked');
            } else {
                $elem.removeClass('checked');
            }
        }
    }
    checkService();

});

