
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
var swiper = new Swiper(".mySwiper2", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        890: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 4,
        },
    },
});
var swiper = new Swiper(".mySwiper3", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    autoPlay: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 4.2,
        },
    },
});