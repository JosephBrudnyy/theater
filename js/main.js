$(function(){
    $('.top__slider').slick({
        fade: true,
        nextArrow: document.querySelector('.slider__prev'),
        prevArrow: document.querySelector('.slider__next')
    })

    $('.perf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    })

    $('.menu__btn').on('click', ()=>{
        $('.menu__list').toggleClass('menu__list--active')
        $('.menu__btn').toggleClass('menu__btn--active')
        $('.insta, .fb, .yt, .vk').toggleClass('refs--active')
        $('.line__top, .line__mid, .line__bottom').toggleClass('lines--active')
    });

})