$(document).ready(function () {
    $(".new-product__discount__slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: false,
        responsive: {
            0: { items: 2 },   // At least two items visible on small screens (mobile)
            600: { items: 2 }, // Two items for tablets
            1000: { items: 3 } // Three items for desktops
        }
    });
});
