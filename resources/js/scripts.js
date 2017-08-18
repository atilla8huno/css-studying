$(function () {
    showOrHideMenu();
    configClickHandlers();
    addAnimations();
    addNavigation();
    
    function configClickHandlers() {
        $('.btn-features').on('click', goTo('.section-features'));
        $('.btn-plans').on('click', goTo('.section-plans'));
        $('.btn-courses').on('click', goTo('#courses'));
        $('.btn-steps').on('click', goTo('#steps'));

        $('.logo-black').on('click', goTo('header'));
    }
    
    function goTo(selector) {
        return function() {
            $('html, body').animate({
                scrollTop: $(selector).offset().top
            }, 1000);
        }
    }
    
    function showOrHideMenu() {
        $('.section-features').waypoint(function (direction) {
            if ('down' === direction) {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '60px'
        });
    };
    
    function addAnimations() {
        var offset = {
            offset: '60%'
        };
        
        $('.fade-in-animation').waypoint(function() {
            $('.fade-in-animation').addClass('animated fadeIn');
        }, offset);
        
        $('.fade-in-up-animation').waypoint(function() {
            $('.fade-in-up-animation').addClass('animated fadeInUp');
        }, offset);
        
        $('.pulse-animation').waypoint(function() {
            $('.pulse-animation').addClass('animated pulse');
        }, offset);
        
        $('.slide-in-up-animation').waypoint(function() {
            $('.slide-in-up-animation').addClass('animated slideInUp');
        }, offset);
    }
    
    function addNavigation() {
        $('.mobile-nav-icon').on('click', function() {
            var nav = $('.main-nav'),
                icon = $('.mobile-nav-icon i');
            
            nav.slideToggle(200);
            
            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.removeClass('ion-close-round');
                icon.addClass('ion-navicon-round');
            }
        });
    }
});
