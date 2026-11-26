$(document).ready(function () {
    sliderBanner();
    sliderPartners();

    $("#dropdownMenuButton").click(function () {
        $(this).toggleClass("show");
        $(this).next().toggleClass("show");
    });
});

function sliderBanner() {
    $("#slider .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        lazyLoad: true,
        navText: [
            "<div class='b-arrow'><i class='icon-chevron-left'></i></div>",
            "<div class='b-arrow'><i class='icon-chevron-right'></i></div>",
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
        },
        afterAction: function (current) {
            current.find("video").get(0).play();
        },
    });
}

function sliderPartners() {
    $(".box-Partners .owl-carousel").owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        lazyLoad: true,
        navText: [
            "<div class='b-arrow'><i class='icon-chevron-left'></i></div>",
            "<div class='b-arrow'><i class='icon-chevron-right'></i></div>",
        ],
        responsiveClass: true,
        responsive: {
            700: {
                items: 3,
            },
            800: {
                items: 5,
            },
        },
    });
}
