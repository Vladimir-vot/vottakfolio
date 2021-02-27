//= ../../../node_modules/slick-carousel/slick/slick.js
//= ../../../node_modules/aos/dist/aos.js

$(function(){

    //= components/slick.js
    //= components/aos.js


/* Nav
    ============================================*/
        $(function() {
        $('.nav .nav__link').each(function() {
        let location = window.location.href;
        let link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});

/* Nav Toggle on mobile
    ============================================*/

    let header = $('.header');
    let logo =  $('.Logo__link');
    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $('body').toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
        header.toggleClass('header-dark');
        logo.toggleClass('Logo__link-white');
    });

    $(window).on("resize", function() {
        $('body').removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
        header.removeClass('header-dark');
        logo.removeClass('Logo__link-white');

    });

/* Checkbox__btn
============================================*/

    $(function() {
        let checkboxBtn = $("#checkbox__btn");
        let Checkbox = $(".checkbox");

        Checkbox.on("change", function() {
            if($(this).is(':checked')) {
                checkboxBtn.removeAttr("disabled");
            } else {
                checkboxBtn.prop("disabled", true);
            }
        });
    });

/* Modal
    ************************/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {

        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        /*$("body").addClass("no-scroll");*/

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
            });
        }, 200);

    });

    modalClose.on("click", function(event) {

        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
            });

        setTimeout(function() {
        modalParent.removeClass("show");
        /*$("body").removeClass("no-scroll");*/
        }, 200);
    });

        $(".modal").on("click", function(event) {

            let $this = $(this);
            $this.find(".modal__dialog").css({
            transform: "scale(0)"
            });
        setTimeout(function() {
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    });
