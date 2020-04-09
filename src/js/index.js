
$(document).ready(function() {
    function Start() {
        var h = 0;
        var m = 12;
        var s = 0;

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;
                } else {
                    if (h != 0) {
                        h = h - 1;
                        m = 59;
                        s = 59;
                    } else {
                        return
                    }
                }
            }
            $('.form__count-item:first-child span:first-child').text(h);
            $('.form__count-item:nth-child(2) span:first-child').text(m);
            $('.form__count-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000)
    }

    Start();

    var wow = new WOW(
        {
            mobile: false,
        }
    );
    wow.init();

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 600);
});
