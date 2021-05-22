$(document).ready(function () {
    document.addEventListener('scroll', () => {
        if (window.innerWidth < 1000) {
            const header = document.querySelector('header');
            header.style.zIndex = "999";
        } else {
            if (scrollY > 1) {
                const header = document.querySelector('header');
                header.style.zIndex = "999";
            }
            if (scrollY < 2) {
                const header = document.querySelector('header');
                header.style.zIndex = "1";
            }
        }
    });
});