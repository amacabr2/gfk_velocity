(function ($) {

    $divs = $('.box, .box-title, input, p');

    /*

    Ne fonctionne pas chez moi

    $.Velocity.Sequences.fadeInUp = function (element, options) {
        $.Velocity.animate(element, {
            translateY: [0, 500],
            opacity: [1, 0]
        }, {
            duraton: options.duration,
            display: 'block',
            easing: [70, 8]
        });
    };

    $('.box, .box-title, input, p').velocity('fadeInUp').velocity('reverse', {delay: 1000});

    */

    /*

        Fait par mes soins

        var fadeInUp = function (delay) {
            $divs.velocity({
                translateY: [0, 500],
                opacity: [1, 0]
            }, {
                duration: delay,
                delay: delay,
                display: 'block',
                easing: [70, 8]
            }).velocity('reverse', {delay: delay});
        };

        fadeInUp(1000);

    */

    // utilisation de Velocity UI

    $('a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $divs.hide().velocity('transition.bounceUpIn', {duration: 1000, stagger: 100});
    });

    $('.box-overlay').click(function (e) {
        e.preventDefault();
        $divs.velocity('transition.bounceDownOut', {duration: 1000, stagger: 100});
    });

    $('.box').click(function (e) {
        e.stopPropagation();
    });


})(jQuery);