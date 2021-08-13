/*-----------------------------------------------------------------------------------

    Theme Name: Liz
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/

/*=================================================
 == Table Of Content

    1. PRELOADER
    2. SCROLLIT
    3. NAVBAR
    4. SCROLL TO TOP    
    5. SKILL PROGRESS
    6. PORTFOLIO
    7. COUNT TO TRIGGER
    8. MAGNIFIC POPUP TRIGGER
    9. OWLCAROUSEL
    10. VALIDATOR

*/
import $ from 'jquery';

$(function () {
    "use strict";
    var wind = $(window);

    /*============= PRELOADER ============= */
    $(document).ready(function () {

        // Fakes the loading setting a timeout
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 1500);

    });

  
    /*============= NAVBAR ============= */
    // Add navbar background color when scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

});

/*============= SCROLL TO TOP ============= */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*======== SKILL PROGRESS ========*/
$(function () {
    "use strict";
    var windows = $(window);
    windows.on('scroll', function () {
        $(".progress-item span").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_windows = $(windows).scrollTop() + $(windows).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_windows > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});


/*===========  PORTFOLIO ===============*/
$(".simplefilter li").on("click", function () {
    $(".simplefilter li").removeClass("active");
    $(this).addClass("active");
});
var options = {
    animationDuration: 0.6,
    filter: "all",
    callbacks: {
        onFilteringStart: function () { },
        onFilteringEnd: function () { }
    },
    delay: 0,
    delayMode: "alternate",
    easing: "ease-out",
    layout: "sameSize",
    selector: ".filtr-container",
    setupControls: true
}

/*=========== COUNT TO TRIGGER =============*/
var eventFired = false,
    objectPositionTop = $('.counts').offset();
$(window).on('scroll', function () {
    var currentPosition = $(document).scrollTop() + 400;
    if (currentPosition >= objectPositionTop && eventFired === false) {
        eventFired = true;
        $(".count").countTo({
            speed: 5000,
            refreshInterval: 80
        });
    }
});



/*========= OWLCAROUSEL =========*/


/*========= VALIDATOR =========*/

$('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
});