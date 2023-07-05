// script.js

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var targetOffset = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    }
});

// Toggle navigation menu for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
