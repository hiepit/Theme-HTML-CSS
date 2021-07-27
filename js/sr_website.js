$(document).ready(function() {

    // Shop Filter
    $("#show_popup_login").click(function() {
        $('.login-popup').toggleClass("active");
        $('#icon-up').toggleClass("active");
        $('#icon-down').toggleClass("active");
    });

    // Handle check captcha and save contact
    $('#btn-submit').click(function() {
        console.log('ssssssssss')
        var $captcha = $('#contactusCaptcha'),
            response = grecaptcha.getResponse();

        if (response.length === 0) {
            $('.msg-error').text("reCAPTCHA is mandatory");
            if (!$captcha.hasClass("error")) {
                $captcha.addClass("error");
            }
        } else {
            // TODO: save record
            $('.msg-error').text('');
            $captcha.removeClass("error");
            alert('reCAPTCHA marked');
        }
    })

    // image maps use on the website
    $('#home-map-img').maphilight({
        strokeColor: 'F6A028',
        strokeWidth: 2,
        fill: true,
        fillColor: 'F6A028',
        fillOpacity: 0.2,
    });

    // Upload file
    $('#cv').bind('change', function() {
        var filename = $("#cv").val();
        if (/^\s*$/.test(filename)) {
            $("#noFile").text("No file chosen...");
        } else {
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });

    // Back to Top
    // var offset = 300,
    //     scroll_top_duration = 300,
    //     back_to_top = $('#scrollUp');
    // $(window).scroll(function() {
    //     ($(this).scrollTop() > offset) ? back_to_top.addClass('cd-is-visible'): back_to_top.removeClass('cd-is-visible cd-fade-out');
    // });

    // $(".scroll").click(function() {
    //     $("html,body").animate({ scrollTop: $("#header").offset().top }, "1000");
    //     return false
    // })
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 50) {
    //         $('.scrolltop:hidden').stop(true, true).fadeIn();
    //     } else {
    //         $('.scrolltop').stop(true, true).fadeOut();
    //     }
    // });

    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa fa-angle-double-up"></i>',
    });

});

$(window).on("scroll", function() {
    var HscrollTop = $(window).scrollTop();
    // Fixed Header
    if (HscrollTop >= 196) {
        $('#header').addClass('fixed-header');
    } else {
        $('#header').removeClass('fixed-header');
    }
});


// (function($) {
//     "use strict"
// var HscrollTop = $(window).scrollTop();
//         // Toogle button scorll to top
//         if (HscrollTop < 300) {
//             $("#scrollUp").removeClass("cd-is-visible");
//         } else {
//             $("#scrollUp").addClass("cd-is-visible");
//         }
//     });
// })(jQuery);