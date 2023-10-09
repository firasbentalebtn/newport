function _0x3fe2(t, e) {
  const o = _0x4226();
  return (_0x3fe2 = function (t, e) {
    return o[(t -= 197)];
  })(t, e);
}
function _0x4226() {
  const t = [
    "then",
    ".project_slider a",
    "stickit",
    "transparent",
    "#fff",
    ".fade_left",
    "95px!important",
    "animation",
    " .fade_bottom",
    "data-stagger",
    "anim_line",
    "ready",
    "slickSlider",
    "utils",
    "#CCC",
    "timeline",
    ".play_btn",
    ".image_popup,.gallery_popup a",
    ".navbar-toggler",
    "3eDSGuA",
    "power2.easeIn",
    "set",
    ".text_hover_animaiton",
    "cover",
    "clear",
    "toggleClass",
    "magnificPopup",
    "src",
    ".ball-drag",
    '<div class="ball-drag"><i class="far fa-angle-left"></i><i class="far fa-angle-right"></i></div>',
    "#ball",
    "data-duration",
    ".gallery",
    "#null",
    "append",
    "M0 502S175 272 500 272s500 230 500 230V0H0Z",
    "serviceHover",
    "length",
    "removeClass",
    "scrollTop",
    "power4.out",
    "getAttribute",
    "registerPlugin",
    "power2.easeOut",
    "addClass",
    "slick",
    ".fade_bottom",
    "10fbkYwg",
    "classList",
    "init",
    "img.svg",
    "308528aqGDkt",
    "2270654eGKmHG",
    "find",
    "offset",
    "M0 2S175 1 500 1s500 1 500 1V0H0Z",
    "div",
    "each",
    ".fade_right",
    ".testi_slider",
    "parent",
    "add",
    "top center+=300",
    " replaced-svg",
    "removeAttribute",
    "mfp-fade",
    ".slick-list",
    "stickySideBar",
    "toArray",
    ".anim_line",
    "2px solid #fff",
    "replaceChild",
    ".preloader-text",
    "words,chars",
    "auto",
    "active",
    '<div class="ball-view"></div>',
    "95qPQJIy",
    "querySelector",
    "class",
    "iframe",
    "anim_char",
    "data-trigerId",
    ".tf__team_skills_bar_single .fill",
    ".preloader",
    "show_icon",
    "parseFromString",
    "setAttribute",
    ".details",
    ".anim_word",
    "top",
    "501463ISZGtS",
    "fromTo",
    "log",
    ".main_menu",
    "addEventListener",
    "undefined",
    "test",
    "headingAnimation",
    ".has-animation",
    ".tf__subscribe",
    "play none none none",
    "lines, chars",
    "12402027iqHsmk",
    "mouseleave",
    "none",
    "progressbar",
    "remove",
    "menu-text",
    ".menu_2_icon",
    "1!important",
    "marquee",
    ".marquee_animi",
    "[data-cursor]",
    "7WKuYnx",
    "svg",
    '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>',
    " .fade_left",
    "parallaxie",
    "forEach",
    "80px",
    "top center+=150",
    ".ball-view",
    "data-percentage",
    "parentNode",
    "userAgent",
    "116300XiiPJn",
    "#sticky_sidebar",
    ".tf__single_service_2.active",
    "inline",
    "attr",
    "getElementById",
    "menu_fix",
    "power2.out",
    "countUp",
    "clientY",
    "not",
    "404154GuzEiQ",
    "textAnimation",
    "counter",
    "click",
    "clientX",
    "querySelectorAll",
    "customMouse",
    "image",
    "100%",
    "top center+=200",
    "2370952QWlaQQ",
    "text/html",
    "mfp-fade zyan-popup",
    ".tf__single_service_2",
    "mouseenter",
  ];
  return (_0x4226 = function () {
    return t;
  })();
}
(function (t, e) {
  const o = _0x3fe2,
    a = _0x4226();
  for (;;)
    try {
      if (
        725692 ===
        -parseInt(o(254)) / 1 +
          -parseInt(o(215)) / 2 +
          (-parseInt(o(334)) / 3) * (-parseInt(o(289)) / 4) +
          (-parseInt(o(240)) / 5) * (-parseInt(o(300)) / 6) +
          (-parseInt(o(277)) / 7) * (parseInt(o(310)) / 8) +
          (parseInt(o(266)) / 9) * (parseInt(o(210)) / 10) +
          -parseInt(o(214)) / 11
      )
        break;
      a.push(a.shift());
    } catch (t) {
      a.push(a.shift());
    }
})(),
  (function (t) {
    "use strict";
    const e = _0x3fe2;
    console[e(339)]();
    let o = window.innerWidth;
    gsap[e(205)](ScrollTrigger, ScrollSmoother);
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i[
      e(260)
    ](navigator[e(288)]);
    var a = {
      init() {
        const t = e;
        a.imgToSvg(),
          a.mobileMenu(),
          a[t(302)](),
          a[t(327)](),
          a[t(274)](),
          a[t(230)](),
          a[t(301)](),
          a[t(261)](),
          a[t(269)](),
          a[t(281)](),
          a[t(322)](),
          a[t(306)](),
          a[t(341)](),
          a[t(199)](),
          a[t(230)]();
      },
      imgToSvg() {
        const t = e;
        document[t(305)](t(213))[t(282)]((e) => {
          const o = t,
            a = e.getAttribute("id"),
            n = e[o(204)](o(242)),
            s = e[o(204)](o(342));
          fetch(s)
            [o(315)]((t) => t.text())
            [o(315)]((t) => {
              const s = o;
              let r = new DOMParser()[s(249)](t, s(311))[s(241)](s(278));
              typeof a !== s(259) && r.setAttribute("id", a),
                typeof n !== s(259) && r[s(250)](s(242), n + s(226)),
                r[s(227)]("xmlns:a"),
                e[s(287)] && e.parentNode[s(234)](r, e);
            });
        });
      },
      mobileMenu() {
        const o = e;
        if (null != t(".main_menu").offset()) {
          var a = t(o(257))[o(217)]()[o(253)];
          t(window).scroll(function () {
            const e = o;
            t(this)[e(202)]() > a
              ? t(e(257))[e(207)](e(295))
              : t(e(257))[e(201)]("menu_fix");
          });
        }
        t(o(272)).on("click", function () {
          const e = o;
          t(".menu_2_icon")[e(340)](e(248));
        }),
          t(o(272)).on(o(303), function () {
            const e = o;
            t(".main_menu_2")[e(340)]("show_menu");
          }),
          t(o(333)).on(o(303), function () {
            t(o(333)).toggleClass("show");
          });
      },
      counter() {
        const o = e;
        t(".counter")[o(297)]();
      },
      slickSlider() {
        const o = e;
        t(o(222))[o(208)]({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: !0,
          autoplaySpeed: 2e3,
          dots: !1,
          arrows: !1,
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
          ],
        });
      },
      marquee() {
        const o = e;
        t(o(275))[o(274)]({
          speed: 100,
          gap: 0,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: !0,
          pauseOnHover: !0,
        });
      },
      stickySideBar() {
        const o = e;
        t(o(290))[o(317)]({ top: 100 });
      },
      animation() {
        const t = e;
        let a = gsap[t(328)][t(231)](t(320));
        gsap[t(336)](a, { opacity: 0, x: -30 }),
          a &&
            (o < 1023
              ? a.forEach((e, o) => {
                  const a = t;
                  gsap.to(e, {
                    scrollTrigger: { trigger: e, start: a(284), markers: !1 },
                    opacity: 1,
                    x: 0,
                    ease: a(296),
                    duration: 2,
                    stagger: { each: 0.4 },
                  });
                })
              : a[t(282)]((e, o) => {
                  const a = t,
                    n = "#" + e[a(204)](a(245));
                  gsap.to(("#null" !== n ? n : "") + a(280), {
                    scrollTrigger: {
                      trigger: n !== a(348) ? n : a(320),
                      start: "top center+=150",
                      markers: !1,
                    },
                    opacity: 1,
                    x: 0,
                    ease: a(296),
                    duration: 2,
                    stagger: { each: 0.4 },
                  });
                }));
        let n = gsap.utils[t(231)](t(221));
        gsap[t(336)](n, { opacity: 0, x: 30 }),
          n &&
            (o < 1023
              ? n[t(282)]((e, o) => {
                  const a = t;
                  gsap.to(e, {
                    scrollTrigger: { trigger: e, start: a(284), markers: !1 },
                    opacity: 1,
                    x: 0,
                    ease: a(296),
                    duration: 2,
                    stagger: { each: 0.4 },
                  });
                })
              : n[t(282)]((e, o) => {
                  const a = t,
                    n = "#" + e.getAttribute("data-trigerId"),
                    s = e.getAttribute(a(324));
                  gsap.to(n + " .fade_right", {
                    scrollTrigger: { trigger: n, start: a(284), markers: !1 },
                    opacity: 1,
                    x: 0,
                    ease: a(296),
                    duration: 2,
                    stagger: { each: s || 0.4 },
                  });
                }));
        let s = gsap.utils[t(231)](t(209));
        o < 1023
          ? s.forEach((e, o) => {
              const a = t;
              gsap[a(336)](e, { opacity: 0, y: 60 }),
                gsap[a(330)]({
                  scrollTrigger: { trigger: e, start: a(309) },
                }).to(e, { opacity: 1, y: 0, duration: 1.5, ease: a(203) });
            })
          : s.forEach((e, o) => {
              const a = t,
                n = "#" + e[a(204)](a(245)),
                s = e[a(204)](a(324)),
                r = e[a(204)](a(346)),
                i = e[a(204)]("data-default-value");
              console[a(256)](i),
                gsap[a(336)](("#null" !== n ? n : "") + a(323), {
                  opacity: 0,
                  y: i || 30,
                }),
                gsap.to((n !== a(348) ? n : "") + a(323), {
                  scrollTrigger: {
                    trigger: n !== a(348) ? n : ".fade_bottom",
                    start: "top center+=200",
                  },
                  opacity: 1,
                  y: 0,
                  duration: r || 2,
                  ease: a(203),
                  stagger: s || 0.3,
                });
            });
      },
      textAnimation() {
        const a = e;
        if (o > 767) {
          var n = t(a(337));
          0 !== n[a(200)] &&
            n.each(function () {
              const e = a;
              var o = t(this),
                n = e(236);
              new SplitText(o, { type: n, wordsClass: e(271) });
            });
        }
      },
      headingAnimation() {
        const a = e;
        var n = t(a(262));
        o > 767 &&
          n[a(220)](function () {
            const e = a;
            var o = t(this),
              n = e(265),
              s =
                (new SplitText(o, {
                  type: n,
                  linesClass: e(325),
                  charsClass: e(244),
                  wordsClass: "anim_word",
                }),
                o[e(216)](e(232)),
                o[e(216)](e(252)),
                o.find(".anim_char"));
            gsap.fromTo(
              s,
              { y: e(308) },
              {
                y: "0%",
                duration: 0.8,
                stagger: 0.01,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: t(this)[e(223)](e(219)),
                  start: e(225),
                  toggleActions: e(264),
                },
              }
            );
          });
      },
      progressbar() {
        const o = e;
        var a = t(o(246));
        a.each(function () {
          const e = o,
            n = a[e(293)](e(286));
          gsap[e(255)](
            a,
            { css: { width: 0 } },
            {
              scrollTrigger: {
                trigger: t(this)[e(223)](e(219)),
                start: "top center+=300",
                toggleActions: e(264),
              },
              css: { width: n + "%" },
              duration: 0.8,
              stagger: 0.01,
              ease: "power2.out",
            }
          );
        });
      },
      parallaxie() {
        const o = e;
        t(o(263))[o(281)]({ speed: 0.8, size: o(338) });
      },
      preloader() {
        const t = e,
          o = document[t(294)](t(278)),
          a = gsap[t(330)](),
          n = (t(198), t(218));
        a.to(t(235), { delay: 0.5, y: -100, opacity: 0 }),
          a
            .to(o, { duration: 0.1, ease: t(335) })
            .to(o, { duration: 0.5, attr: { d: n }, ease: t(206) }),
          a.to(t(247), { y: -1500 }),
          a.to(t(247), { zIndex: -1, display: t(268) });
      },
      customMouse() {
        const o = e;
        var a = { x: 0, y: 0 },
          n = { x: 0, y: 0 },
          s = t(o(345));
        const r = {
            duration: 0.3,
            opacity: 0.5,
            width: "30px",
            height: "30px",
            backgroundColor: o(318),
            border: o(233),
          },
          i = {
            duration: 0.3,
            css: {
              borderWidth: 0,
              opacity: o(273),
              width: o(321),
              height: o(321),
              backgroundColor: o(319),
            },
          };
        gsap[o(336)](s, { xPercent: -50, yPercent: -50 }),
          document[o(258)]("mousemove", function (t) {
            const e = o;
            (a.x = t[e(304)]), (a.y = t[e(298)]);
          }),
          gsap.ticker.add(function () {
            (n.x += 0.15 * (a.x - n.x)),
              (n.y += 0.15 * (a.y - n.y)),
              gsap.set(s, { x: n.x, y: n.y });
          }),
          t("a,.c-pointer,button,.progress")
            [o(299)](o(316))
            .on(o(314), function () {
              const t = o;
              gsap.to(s, {
                duration: 0.3,
                borderWidth: 0,
                opacity: 0.5,
                backgroundColor: t(329),
                width: t(283),
                height: t(283),
              });
            })
            .on(o(267), function () {
              gsap.to(s, r);
            }),
          t(o(276)) &&
            t(o(276))[o(220)](function () {
              const e = o;
              t(this)
                .on(e(314), function () {
                  const o = e;
                  s.append(o(239)),
                    t(o(285))[o(197)](t(this).attr("data-cursor")),
                    gsap.to(s, i);
                })
                .on(e(267), function () {
                  const t = e;
                  s[t(216)](t(285))[t(270)](), gsap.to(s, r);
                });
            }),
          t(o(229)) &&
            t(o(229))[o(220)](function () {
              const e = o;
              t(this)
                .on(e(314), function () {
                  const t = e;
                  s[t(197)](t(344)), gsap.to(s, i);
                })
                .on(e(267), function () {
                  const t = e;
                  s.find(t(343))[t(270)](), gsap.to(s, r);
                });
            }),
          t(o(347)) &&
            t(".gallery")[o(220)](function () {
              const e = o;
              t(this)
                .on(e(314), function () {
                  const t = e;
                  s.append(t(279)), gsap.to(s, i);
                })
                .on("mouseleave", function () {
                  const t = e;
                  s[t(216)](".ball-gallery")[t(270)](), gsap.to(s, r);
                });
            });
      },
      magnificPopup() {
        const o = e;
        t(o(331))[o(220)](function () {
          const e = o;
          t(this)[e(341)]({
            type: e(243),
            mainClass: "mfp-fade",
            preloader: !1,
            fixedContentPos: !0,
          });
        }),
          t(o(332))[o(341)]({
            type: o(307),
            gallery: { enabled: !0 },
            mainClass: o(228),
          }),
          t(o(251))[o(341)]({
            type: o(292),
            overflowY: o(237),
            closeBtnInside: !0,
            mainClass: o(312),
          });
      },
      serviceHover() {
        const t = e;
        document[t(305)](t(313))[t(282)]((e) => {
          const o = t;
          e[o(258)]("mouseenter", () => {
            const t = o;
            document.querySelector(t(291))[t(211)][t(270)](t(238)),
              e[t(211)][t(224)]("active");
          });
        });
      },
    };
    t(document)[e(326)](function () {
      a[e(212)](), a.preloader();
    });
  })(jQuery);
// Get a reference to the download button
const downloadButton = document.getElementById('downloadPdf');

// Add a click event listener to the button
downloadButton.addEventListener('click', () => {
    // Create a link element
    const downloadLink = document.createElement('a');
    
    // Set the link's href to the path of your PDF file in the "assets" folder
    downloadLink.href = './images/resume_firasbentaleb.pdf';
    
    // Specify the download attribute to prompt the user to download the file with a given name
    downloadLink.setAttribute('download', 'resume_firasbentaleb.pdf');
    
    // Trigger a click event on the link to start the download
    downloadLink.click();
});
