$(function () {
    showOrHideMenu();
    configClickHandlers();
    
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
});
