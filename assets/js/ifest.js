function preloader() {
    function i() {
        b.style.opacity = 1
    }

    function j() {
        g += 1;
        var a = (100 / h * g << 0) + "%";
        if (e.style.width = a, d.style.left = a, c.innerHTML = a, g == h) return k()
    }

    function k() {
        setTimeout(function() {
            a.style.opacity = 0, setTimeout(function() {
                a.style.display = "none"
            }, 2e3)
        }, 700)
    }
    var a = document.querySelector(".preloader"),
        b = document.querySelector(".preloader .mid-wrapper"),
        c = document.querySelector(".preloader .percent"),
        d = document.querySelector(".preloader .circle-e"),
        e = document.querySelector(".preloader .slider-2"),
        f = document.images,
        g = 0,
        h = f.length;
    i();
    for (var l = 0; l < h; l++) {
        var m = new Image;
        m.onload = j, m.onerror = j, m.src = f[l].src
    }
}
document.addEventListener("DOMContentLoaded", preloader, !1), $(function(a) {
    function c() {
        var a = window.innerWidth;
        b = a > 992
    }

    function d(a) {
        var b = a.find(".animated");
        TweenLite.fromTo(b, 1.3, {
            scaleX: .8,
            scaleY: .8,
            opacity: 0
        }, {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            ease: Power2.easeInOut,
            delay: .4
        })
    }

    function f() {
        var a = $(e).attr("lazy-thumb");
        $(e).attr("src", a)
    }

    function g(a) {
        var b = $(e + "." + a).attr("lazy-src");
        $(e + "." + a).attr("src", b)
    }

    function h() {
        function c(b) {
            var c = (b - 1) * a + 1,
                d = c;
            for ($(".news .list > li").hide(); d < a + c;) $(".news .list > li:nth-of-type(" + d + ")").show(), d++;
            var e = b + 1;
            $(".news .page-number:nth-of-type(" + e + ")").addClass("active").siblings(".page-number").removeClass("active"), f(b)
        }

        function f(a) {
            var b;
            b = a <= 3 ? 2 : a > e ? e : a - 1;
            var c = b;
            for ($(".news .page-number").hide(); c < 5 + b;) $(".news .page-number:nth-of-type(" + c + ")").css("display", "inline-block"), c++
        }
        var a = 5,
            b = 1,
            d = $(".news .page-number").length,
            e = d - 3;
        c(1), $(".news .page-number a").click(function() {
            b = parseInt($(this).text()), c(b)
        }), $(".news .page-prev a").click(function() {
            b > 1 && (b -= 1, c(b))
        }), $(".news .page-next a").click(function() {
            b < d && (b += 1, c(b))
        })
    }
    var b;
    c(), $(window).resize(c), $(".fullpage-hm").fullpage({
        sectionSelector: ".section",
        animateAnchor: !0,
        anchors: ["i", "f", "e", "s", "t", "u", "b"],
        easingcss3: "cubic-bezier(0.97,0,0.67,1)",
        scrollingSpeed: 800,
        responsiveWidth: 992,
        navigation: !0,
        navigationPosition: "left",
        navigationTooltips: ["home", "about", "video", "competition", "info", "timeline", "contact"],
        showActiveTooltip: !0,
        paddingTop: "55px",
        onLeave: function(a, c, e) {
            if (b) {
                var f = $(".fullpage-hm .section").eq(c - 1);
                d(f)
            }
            7 == c && TweenLite.to("nav", .8, {
                y: "-100%",
                ease: Power2.easeInOut
            }), 7 == a && TweenLite.to("nav", .8, {
                y: "0%",
                ease: Power2.easeInOut
            })
        }
    }), $(".modal-trigger").leanModal({
        opacity: .8,
        ready: function() {
            $.fn.fullpage.setAllowScrolling(!1), $.fn.fullpage.setKeyboardScrolling(!1)
        },
        complete: function() {
            $.fn.fullpage.setAllowScrolling(!0), $.fn.fullpage.setKeyboardScrolling(!0)
        }
    }), $(".dropdown-button").dropdown({
        hover: !0,
        constrain_width: !1,
        belowOrigin: !0
    }), $(".subnav-button").click(function() {
        var a = $(this).attr("data-activates");
        $("#" + a).slideToggle()
    }), $(".sidenav-button.s-open").click(function() {
        $("body").prepend('<div class="opacer hide-on-large-only"></div>'), $(".full-nav , .opacer").addClass("active")
    }), $(".sidenav-button.s-close").click(function() {
        $(".full-nav , .opacer").removeClass("active"), setTimeout(function() {
            $(".opacer").remove()
        }, 500)
    }), $(".tweet").slick({
        accessibility: !1,
        autoplay: !0,
        autoplaySpeed: 5e3,
        dots: !0,
        draggable: !1,
        arrows: !1,
        pauseOnFocus: !1,
        speed: 700
    }), $(".timeline").slick({
        accessibility: !1,
        infinite: !1,
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
        asNavFor: ".timeline-nav"
    }), $(".timeline-nav").slick({
        accessibility: !1,
        asNavFor: ".timeline",
        draggable: !1,
        infinite: !1,
        arrows: !1,
        centerMode: !0,
        centerPadding: "20px",
        slidesToShow: 5,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }]
    }), $(".slick-goto").click(function() {
        var a = $(this).parent().index();
        $(".timeline-nav").slick("slickGoTo", a)
    }), $("#scene, #scene2, #scene-comp").parallax({
        scalarX: 6,
        scalarY: 6
    });
    var e = ".lazy-load";
    f(), $("#alur").click(function() {
        var a = $(this).attr("id");
        g(a)
    }), h()
});