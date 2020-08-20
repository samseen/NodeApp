// jquery method
$(document).ready(function() {
    // Technology Owl Carousel
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

    // Security Owl Carousel
    $('#security .owl-carousel').owlCarousel({
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