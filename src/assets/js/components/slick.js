/* Slick
========================================*/
    let portfolio = $("#portfolio");

    portfolio.slick({
        arrows: true,
        dots: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
});

