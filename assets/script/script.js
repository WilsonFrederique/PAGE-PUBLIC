const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () => {
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
}

closeNavBtn.addEventListener('click', closeNav);



// ------------------------------------------------
if(window.innerWidth < 1024){
    document.querySelectorAll('#nav__items li a').forEach(navItems => {
        navItems.addEventListener('click', () => {
            closeNav();
        })
    })
}


//------------ Change NavBar Style ----------------
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})




// ==================== Swiper ==================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


    // Responsive Breakpoints
    breakpoints: {
        // When Window is >= 600px
        600: {
            slidesPerView: 2
        },

        // When Window is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});