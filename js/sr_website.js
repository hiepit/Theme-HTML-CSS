// BEGIN: 05 Owl Carousel
var owlCarousel = function() {
  var $carousel = $('.owl-carousel');
  if( $carousel.length < 1 ){
      return true;
  }
  $carousel.each( function(){
      var slider = $(this);
      var sliderArrow = slider.attr('data-arrow') == 'false' ? false : true; //option: true or false
      var sliderDots = slider.attr('data-dots') == 'false' ? false :true; //option: true or false
      var sliderAutoPlay = slider.attr('data-autoplay') ? slider.attr('data-autoplay') : false; //option: number in ms
      var sliderAutoPlayTime = slider.attr('data-autoplay') ? Number(sliderAutoPlay) : 4000;
      var sliderSpeed = slider.attr('data-speed') ? slider.attr('data-speed') : 800; //option: number in ms (Smart speed)
      var sliderMargin = slider.attr('data-margin') ? slider.attr('data-margin') : 30; //option: number in px
      var sliderLoop = slider.attr('data-loop') == 'false' ? false : true; //option: true or false
      var sliderStart = slider.attr('data-start') ? slider.attr('data-start') : 0; //option: number
      var sliderSlideBy = slider.attr('data-slideby') ? sliderSlideBy == 'page' ? 'page' : Number(slider.attr('data-slideby')) : Number(1); //option: number
      var sliderHoverPause = slider.attr('data-pause') == 'false' ? false : true; //option: true or false
      var sliderMerge = slider.attr('data-merge') == 'true' ? true : false; //option: number (use in slider items DIV)
      var sliderDrag = slider.attr('data-drag') == 'false' ? false : true; //option: true or false
      var sliderRewind = slider.attr('data-rewind') == 'true' ? true : false; //option: true or false
      var sliderCenter = slider.attr('data-center') == 'true' ? true : false; //option: true or false
      var sliderVideo = slider.attr('data-video') == 'true' ? true : false; //option: true or false
      var sliderLazy = slider.attr('data-lazyload') == 'true' ? true : false; //option: true or false
      var sliderRTL = slider.attr('data-rtl'); //option: true (false by default)
      var sliderItems = slider.attr('data-items') ? slider.attr('data-items') : 4; //option: number (items in all device)
      var sliderItemsXl = slider.attr('data-items-xl')? slider.attr('data-items-xl') : Number(sliderItems) ; //option: number (items in 1200 to end )
      var sliderItemsLg = slider.attr('data-items-lg')? slider.attr('data-items-lg') : Number(sliderItemsXl) ; //option: number (items in 992 to 1199 )
      var sliderItemsMd = slider.attr('data-items-md')? slider.attr('data-items-md') : Number(sliderItemsLg) ; //option: number (items in 768 to 991 )
      var sliderItemsSm = slider.attr('data-items-sm')? slider.attr('data-items-sm') : Number(sliderItemsMd) ; //option: number (items in 576 to 767 )
      var sliderItemsXs = slider.attr('data-items-xs') ? slider.attr('data-items-xs') : Number(sliderItemsSm) ; //option: number (items in start to 575 )
      slider.owlCarousel({
          margin: Number(sliderMargin),
          loop: false,
          merge: sliderMerge,
          mouseDrag: sliderDrag,
          startPosition: Number(sliderStart),
          rewind: sliderRewind,
          slideBy: sliderSlideBy,
          center: sliderCenter,
          lazyLoad: sliderLazy,
          nav: sliderArrow,
          navText: [
            '<i class="fas fa-2x fa-chevron-left"></i>',
            '<i class="fas fa-2x fa-chevron-right"></i>'
          ],
          autoplay: false, // sliderAutoPlay
          autoplayTimeout: sliderAutoPlayTime,
          autoplayHoverPause: sliderHoverPause,
          dots: sliderDots,
          smartSpeed: Number(sliderSpeed),
          video: sliderVideo,
          rtl: sliderRTL,
          responsive:{
            0:{ items:Number(sliderItemsXs) },
            576:{ items:Number(sliderItemsSm) },
            768:{ items:Number(sliderItemsMd) },
            992:{ items:Number(sliderItemsLg) },
            1200:{ items:Number(sliderItemsXl) }
          },
      });
  });
};
// END: Owl Carousel

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

    // Tooggle list licences
    $('#select_activity input[type="radio"]').change(function(e) {
        $('#select_speciality').addClass("toggle_show");
        var value_selected = e.currentTarget && e.currentTarget.value || '';
        $('#value_selected_activity span').text(value_selected);
    });
    $('#select_activity').click(function() {
      $('.option_select_activity').toggleClass("active");
      $('#select_activity .up').toggleClass("active");
      $('#select_activity .down').toggleClass("active");
      $('#value_selected_activity').toggleClass("active");
    });

    $('#select_speciality input[type="radio"]').change(function(e) {
      $('#select_method').addClass("toggle_show");
      $('.option_select_method').addClass("active");
      var value_selected = e.currentTarget && e.currentTarget.value || '';
      $('#value_selected_speciality span').text(value_selected);
    });
    $('#select_speciality').click(function() {
      $('.option_select_speciality').toggleClass("active");
      $('#select_speciality .up').toggleClass("active");
      $('#select_speciality .down').toggleClass("active");
      $('#value_selected_speciality').toggleClass("active");
    });

    $('#select_method input[type="checkbox"]').change(function(e) {
      $('#select_method_2').addClass("toggle_show");
      $('.option_select_method_2').addClass("active");
      var value_selected = e.currentTarget && e.currentTarget.value || '';
      var select_id = e.currentTarget && e.currentTarget.id || '';
      if (e.currentTarget.checked == true) {
        // Choose checkbox
        var divDiv = document.createElement("div");
        divDiv.id = select_id;
        var iDiv = document.createElement("i");
        iDiv.className = 'fas fa-circle';
        divDiv.append(iDiv);
        var spanDiv = document.createElement("span");
        spanDiv.innerHTML = value_selected;
        divDiv.append(spanDiv);
        document.getElementById('value_selected_method').append(divDiv);
      } else {
        // UnChoose checkbox
        $('#value_selected_method #'.concat(select_id))[0].remove();
      }
    });
    $('#select_method').click(function() {
      $('#select_method .up').toggleClass("active");
      $('#select_method .down').toggleClass("active");
      $('.option_select_method').toggleClass("active");
      $('#value_selected_method').toggleClass("active");
    });

    $('#select_method_2 input[type="radio"]').change(function(e) {
      var option_name = e.currentTarget &&  e.currentTarget.name || '';
      var value_selected = e.currentTarget && e.currentTarget.value || '';
      if (option_name=="option_select_method_1") {
        $('#value_selected_method_2_1 span').text(value_selected);
      } else {
        $('#value_selected_method_2_2 span').text(value_selected);
      }
    });
    $('#select_method_2').click(function() {
      $('#select_method_2 .up').toggleClass("active");
      $('#select_method_2 .down').toggleClass("active");
      $('.option_select_method_2').toggleClass("active");
      $('#value_selected_method_2_1').toggleClass("active");
      $('#value_selected_method_2_2').toggleClass("active");
    });

    // Back to Top
    var offset = 300,
        scroll_top_duration = 300,
        back_to_top = $('#scrollUp');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? back_to_top.addClass('cd-is-visible'): back_to_top.removeClass('cd-is-visible cd-fade-out');
    });

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

    // Tooggle title about us
    $('.about_us_item.item_1').click(function(e) {
      $('.value_item_1').toggle(500);
      $('.item_1 .item-title-left').toggleClass("active");
      $('.item_1 .item-title-right').toggleClass("active");
    });
    $('.about_us_item.item_2').click(function(e) {
      $('.value_item_2').toggle(500);
      $('.item_2 .item-title-left').toggleClass("active");
      $('.item_2 .item-title-right').toggleClass("active");
    });
    $('.about_us_item.item_3').click(function(e) {
      $('.value_item_3').toggle(500);
      $('.item_3 .item-title-left').toggleClass("active");
      $('.item_3 .item-title-right').toggleClass("active");
    });

    owlCarousel();

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
