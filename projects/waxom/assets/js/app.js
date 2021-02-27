$ (function() {

    const navToggle = $("#navToggle");
    const nav = $("#nav");
    let intro = $("#intro");
    let header = $("#header")
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();

    /* Header class jn scroll
    ==============================================*/

    headerScroll();

    $(window).on("scroll resize", function() {
        headerScroll();
     });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();
        let scrollTop = $(this).scrollTop();
        let marginH = (-21);

        if (scrollTop >= (introH - (headerH - marginH))) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }


    /* Smooth Scroll to sections
    ==============================================*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("body").removeClass("show-nav");
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500);
    });

    /* Mobile nav
    ************************/

   navToggle.on("click", function(event) {
        event.preventDefault();

        $("body").toggleClass("show-nav");
        nav.toggleClass("show");

        $(window).on("resize", function() {

        $("body").removeClass("show-nav");
        navToggle.removeClass('active');
        nav.removeClass('show');
     });

   });

});



