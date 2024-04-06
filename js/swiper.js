

  document.addEventListener("DOMContentLoaded", function () {
    // Selectors for both carousels
    var brandCarousel = document.querySelector('.brand-carousel');
    var flashCarousel = document.querySelector('.flash-carousel');
    var productCarousel = document.querySelector('.product-carousel');
    var postCarousel = document.querySelector('.post-carousel');
    var viewedproductCarousel = document.querySelector('.viewedproductCarousel');

    // Initialize both carousels with different timeouts
    initializeCarousel(brandCarousel, {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2.5
            },
            768: {
                items: 4.5
            },
            1200: {
                items: 5.5
            }
        }
    }, 500);

    initializeCarousel(flashCarousel, {
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 2.5
            },
            1200: {
                items: 4.5
            }
        }
    }, 1200);

    initializeCarousel(viewedproductCarousel, {
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 3.5
            },
            1200: {
                items: 4.5
            }
        }
    }, 1200);

    initializeCarousel(productCarousel, {
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 2.5
            },
            1200: {
                items: 3.5
            }
        }
    }, 1200);

    initializeCarousel(postCarousel, {
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3.5
            }
        }
    }, 1000);
});

// Reusable function to initialize Owl Carousel
function initializeCarousel(element, options, timeout) {
    // Wrap the initialization inside a setTimeout with the specified delay
    setTimeout(function () {
        // Initialize Owl Carousel
        var owl = new OwlCarousel(element, options);
    }, timeout);
}

// OwlCarousel constructor function
function OwlCarousel(element, options) {
    this.element = element;
    this.options = options;

    this.init();
}

OwlCarousel.prototype.init = function () {
    // Initialize the Owl Carousel
    this.owlInstance = $(this.element).owlCarousel(this.options);
};
