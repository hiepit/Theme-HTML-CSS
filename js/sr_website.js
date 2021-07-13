$(document).ready(function() {


    // Shop Filter
    $("#show_popup_login").click(function() {
        $('.login-popup').toggleClass("active");
    });

    // if ($(".popup-youtube") && $(".popup-youtube").length > 0) {
    //     $(".popup-youtube").magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }

    // if ($(".slider-popup-img") && $(".slider-popup-img").length > 0) {
    //     $(".slider-popup-img").magnificPopup({
    //         type: "image",
    //         gallery: {
    //             enabled: true,
    //         }
    //     });
    // }
    // $('img.theme-slider-gallary').on('load', function(ev) {
    //     var $link = $(ev.currentTarget);
    //     var a = $link.parent().find("a");
    //     a.attr('href', this.src);
    // });
    // if ($(".slider-popup-product") && $(".slider-popup-product").length > 0) {
    //     $(".slider-popup-product").magnificPopup({
    //         type: "image",
    //         gallery: {
    //             enabled: true,
    //         }
    //     });
    // }

    // Back to Top
    // var offset = 300,
    // offset_opacity = 1200,
    // scroll_top_duration = 700,
    // $back_to_top = $('.cd-top');

    // $(window).scroll(function() {
    //     ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    //     if ($(this).scrollTop() > offset_opacity) {
    //         $back_to_top.addClass('cd-fade-out');
    //     }
    // });

    //smooth scroll to top
    // $back_to_top.on('click', function(event) {
    //     event.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: 0,
    //     }, scroll_top_duration);
    // });


    //Search
    // $("header .search_open").on("click", function(event) {
    //     $(".h-search").toggleClass("hm-search-open");
    //     event.stopPropagation();
    // });
    // $(".h-search").on("click", function(event) {
    //     event.stopPropagation();
    // });
    // $(document).on("click", function(event) {
    //     $(".h-search").removeClass("hm-search-open");
    // });

    // full width search
    $(".fw_search_open").click(function() {
        $('.full-width-search').addClass('fw-open-search');
    });

    $(".fw_close_search").click(function() {
        $('.full-width-search').removeClass('fw-open-search');
    });

    // Mobile Menu
    $("header .mobile_toggle_menu").click(function() {
        $(this).toggleClass("open");
        $('body').toggleClass("mob-main-nav-open");
    });


    /*Mega Menu*/
    $(".mm-mega-menu > a").after("<span class='mob_menu'></span>")
    $(".mm-cat-level-1 .cat-level-title").after("<span class='mob_menu'></span>")
    $(".mm-cat-level-1-v2 .cat-level-title").after("<span class='mob_menu'></span>")


    $(".mm-mega-menu .mob_menu").click(function() {
        $(this).parent('li').toggleClass("open-mob-menu");
        $(this).toggleClass("mob-menu-open");
    });

    $(".navbar-top-collapse .dropdown > .dropdown-toggle").after("<span class='mob_menu' data-toggle='dropdown' aria-expanded='false'></span>")
        /*Mega Menu End*/


    $('#getting-started').countdown('2024/03/27', function(event) {
        var $this = $(this);
        $this.html(event.strftime('' +
            '<ul>' +
            '<li><span>%D</span><label>days</label></li>' +
            '<li><span>%H</span><label>hr</label></li>' +
            '<li><span>%M</span><label>min</label></li>' +
            '<li><span>%S</span><label>sec</label></li>' +
            '</ul>'
        ));
    });

});