//
$(document).ready(function() {
    /* Quick example on a jquery - this changes the background color on the h1 element when you click on it 
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000');
    })
    */
    /* EXAMPLE
     var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })
    */
    //
    //
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction =="down") {
            $('nav').addClass('sticky');
        }   else {
            $('nav').removeClass('sticky');
        }
    },  {
        // The offset makes the 'event' happen sooner, either as a percentage or number of pixels. In this example the 'sticky' class is added 60px BEFORE we get to js--section-features
        offset: '60px'
    });
    //
    //
    /* For scroll on BUTTONS */
    /* select the class (js--scroll-to-plans) when we CLICK on it we have an animation which scrolls to the top with a speed of 1000 milliseconds  */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    //
    /* select the class (js--section-features) when we CLICK on it we have an animation which scrolls to the top with a speed of 1000 milliseconds  */
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    //
    //
    //
    /* SELECT ALL LINKS WITH HASHES (#) */
    $(function () {
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                    location.hostname === this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        });
                    }
                }
            });
    });
    //
    //
    //
    //
    /* ANIMATIONS ON SCROLL */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },  {
          // The offset makes the 'event' happen sooner, either as a percentage or number of pixels. In this example the animations are added 50% (half the page) 
          // BEFORE we get to js--wp-1 //
            offset: '50%'
    });
    //
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    },  {
          // The offset makes the 'event' happen sooner, either as a percentage or number of pixels. In this example the animations are added 50% (half the page) 
          // BEFORE we get to js--wp-2 //
            offset: '50%'
    });
    //
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    },  {
          // The offset makes the 'event' happen sooner, either as a percentage or number of pixels. In this example the animations are added 50% (half the page) 
          // BEFORE we get to js--wp-3 //
            offset: '50%'
    });
    //
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    },  {
          // The offset makes the 'event' happen sooner, either as a percentage or number of pixels. In this example the animations are added 50% (half the page) 
          // BEFORE we get to js--wp-4 //
            offset: '50%'
    });
    //
    //
    //
    /* MOBILE NAVIGATION */
    //
    // slideToggle opens/closes the menu list when the hamburger/X is pressed by the users, it toggles the list to appear/disappear.
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        //
        nav.slideToggle(200);
        // Check to see if the icon is the hamburger, if so, change it to the X....else...
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    });
      
    //
});
