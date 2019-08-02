window.onscroll = () => {
    const header = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const sticky = header.offsetTop;
    
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        hero.classList.add('hero-sticky');
    } else {
        header.classList.remove('sticky');
        hero.classList.remove('hero-sticky');
    }
}