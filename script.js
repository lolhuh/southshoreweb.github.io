// Smooth scrolling (keep this if you already have it)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", evt => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      evt.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: "smooth"
      });
    }
  });
});

// Owl Carousels
$(document).ready(function () {
  // Hero carousel
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    smartSpeed: 650
  });

  // Doctors carousel
  $(".doctor-carousel").owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    smartSpeed: 400,
    responsive: {
      0:    { items: 1 },
      640:  { items: 2 },
      1024: { items: 3 }
    }
  });
});

