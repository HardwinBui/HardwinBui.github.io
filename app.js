const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-ul li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
   
        navLinks.forEach((link, index) => {
            link.style.animation = 'navLinkFade 0.5s ease forwards 0s';
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();