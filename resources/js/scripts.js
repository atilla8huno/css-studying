$(function () {
    init();
    
    function init() {
        showOrHideMenu();
        configClickHandlers();
        addAnimations();
        addNavigation();
        //initMap();
    }
    
    /**
     * Future feature - Using google maps behind the form contact for each city we are in.
     */
    function initMap() {
        var city = getLatLngFrom('gyn');
        city.el = '.map';
        
        new GMaps(city);
    }
    
    function getLatLngFrom(city) {
        var cities = {
            gyn: {
                lat: -16.6958288,
                lng: -49.4443563
            },
            rio: {
                lat: -22.913885,
                lng: -43.7261845
            },
            bh: {
                lat: -19.9026615,
                lng: -44.1041388
            },
            sp: {
                lat: -23.6821604,
                lng: -46.8755013
            }
        };
        
        return cities[city] ? cities[city] : cities['gyn'];
    }
    
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
