let navToggle = document.querySelector('.nav__toggle');
navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    clickable: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1, },
        768: { slidesPerView: 2, },
        995: { slidesPerView: 3, }
    }
});

//for scroll up btn
let scrollBtn = document.querySelector('.scrollupbtn');
const scrollUpBtnShow = () => {
    window.scrollY > 100 ? scrollBtn.classList.add('show') : scrollBtn.classList.remove('show');
}


window.addEventListener('scroll', scrollUpBtnShow);