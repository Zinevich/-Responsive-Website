$(document).ready(function () {
    /*Поортфолио*/
    $('.buttonServices[filter]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.buttonServices[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
            if ($(this).attr('filter') == 'all') {
                $('.buttonServices[filter]').attr('val', 'off').removeClass('focused');
                $('.filter > div').show(300);
            }
        }
    });
    /*Слайдер*/
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplaySpeed: 4000
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    /*Меню*/
    $('ul.menu a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);
        $('ul.menu a[href^="#"]').css({'color':'#212121'});
        $(this).css({'color':'#004bee'})
        return false;
    });
    /*button gamburger*/
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul').css({
            'display':'flex', 'flex-direction':'column'
        });
        if ($('.menu-icon').html()==='<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>')
        } else {
            $(this).html('<i class="fas fa-bars"></i>')
        }

    });
    /*button to up*/
    $(window).click(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    })
});
