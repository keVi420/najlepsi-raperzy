const scrollTopButton = document.querySelector('.scrollTopButton');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        scrollTopButton.style.opacity = 1;
    } else {
        scrollTopButton.style.opacity = 0;
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});