// jquery method
$(document).ready(function() {
    // Owl Carousel Library
    $('#tech .owl-carousel').owlCarousel({
        margin:40,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});