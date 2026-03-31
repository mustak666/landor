(function ($) {
    "use strict";

    // services button 
    $(".tp-services-button").on("click", function(){
        var target = $(this).closest(".tp-services-item").next();
        $(".tp-services-item").next().not(target).removeClass("active");
        target.addClass("active");
    });


    // data bg img 
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // hover active 
    var hoverClasses = $(".hover");
    hoverClasses.on("mouseenter", function() {
            $(hoverClasses).removeClass("active");
            $(this).addClass("active");
        }
    );

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });

    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    // niceSelect
    $(document).ready(function(){
        $('select').niceSelect();
    });

    // odometer 
    $(window).on('load', function () {
        $('.odometer').each(function () {
            var $this = $(this);
            $this.waypoint(function (direction) {
                if (direction === 'down' && !$this.hasClass('loaded')) {
                    $this.html($this.data('count'));
                    $this.addClass('loaded');
                }
            }, { offset: '80%' });
        });
    });


    // counterUp 
    $('.counterUp').counterUp({
        delay: 10,
        time: 1000,
    });

    // marquee 
    $('.marquee').marquee({
        duration: 20000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true
    });

    // elements left
    $('.elements-left').marquee({
        duration: 35000,
        gap: 15,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    // elements right
    $('.elements-right').marquee({
        duration: 35000,
        gap: 15,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    // marquee right 
    $('.marquee-right').marquee({
        duration: 20000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        startVisible: true
    });

    // circle text 
    gsap.to(".circle-text", {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear"
    });

    // brand slider 
    var swiper = new Swiper(".tp-brand-active", {
        slidesPerView: 6,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        freemode: true,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          },
    });

    // brand slider 
    var swiper = new Swiper(".tp-demo-left", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        freemode: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
    });

    // brand slider 
    var swiper = new Swiper(".tp-demo-right", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        freemode: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
    });

    // team slider 
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop : true,
        speed : 2000,
        centeredSlides: true,
        autoplay :{
         delay : 2000,
         disableOnInteraction : false,
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            568: {
              slidesPerView: 1,
               spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          },
    });

    // team slider 2 
    var swiper = new Swiper(".tp-team-active-2", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".tpteam__circle-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
        },
    });
    // team slider 2 
    var swiper = new Swiper(".tp-career-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".tp-testimonail-career-next",
            prevEl: ".tp-testimonail-career-prev",
        },
        loop : true,
        speed : 2000,
        centeredSlides: true,
        autoplay :{
         delay : 2000,
         disableOnInteraction : false,
        },
    });

    // testimonial slider
    var testimonialSlider = new Swiper(".tp-testimonail-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".tp-testimonail-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="tp-testimonail-dvdr tp-testimonail-progress"></span>' +
                    '<span class="' + totalClass + '"></span>';
            },
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        navigation: {
            nextEl: ".tp-testimonail-button-next",
            prevEl: ".tp-testimonail-button-prev",
        },
        on: {
            init: function () {
                updateProgress(this);
            },
            slideChange: function () {
                updateProgress(this);
            },

        },
        speed : 2000,
        centeredSlides: true,
        autoplay :{
         delay : 2000,
         disableOnInteraction : false,
        },
    });

    function updateProgress(swiper){
        var totalSlides = swiper.slides.length;
        var currentSlide = swiper.realIndex + 1;
        var progress = (currentSlide / totalSlides) * 100;
        var progressBar = document.querySelector(".tp-testimonail-progress");
        if(progressBar){
            progressBar.style.setProperty('--progress', progress + "%");
        }
    }

    // gallery slider 
    var swiper = new Swiper(".swiper_gallery_active", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 1,
        speed: 500,
        loop: true,
        rotate: true,
    });
    
    // project gallery 
    var swiper = new Swiper(".tp-project-gallery-active", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay:{
        delay:2000,
      },
      speed: 2000,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
      },
    });

    // project gallery 
    var swiper = new Swiper(".tp-project-demo-active", {
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
      },
    });

    // hero active 
    var swiper = new Swiper(".tp-hero-slider-active", {
        slidesPerView: 1,
        effect: 'fade',
        pagination: {
            el: ".tp-hero-slider-pagination",
            clickable: true,
        },
        loop: true,
        autoplay:{
            delay:2000,
        },
        speed: 2000
    });

    // gallery-slider
    var gallerySlider = new Swiper('.gallery-slider', {
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 2.5,
		coverflowEffect: {
			rotate: 0,
			stretch: 450,
			depth: 150,
			modifier: 1.5,
			slideShadows: false,
		}
    });

    // contect active
    var swiper = new Swiper(".tp-contect-slider-active", {
        slidesPerView: 1,
        effect: 'slide',
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            waitForTransition: true
        },
        navigation: {
            nextEl: ".tp-contect-button-next",
            prevEl: ".tp-contect-button-prev",
        },
    });

    // // protfolio pin 
    if (document.querySelector(".tp-protfolio-pin-2")) {
        const pr = ScrollTrigger.matchMedia();
        pr.add("(min-width: 1199px)", () => {
            const sections = document.querySelectorAll(".tp-protfolio-panel-2");
            const wrap = document.querySelector(".tp-protfolio-pin-2");
            if (!sections.length || !wrap) return;
            sections.forEach((section) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 10%",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    pinSpacing: false,
                    endTrigger: wrap,
                    markers: false
                });
            });
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }
    // // protfolio pin 
    if (document.querySelector(".tp-protfolio-pin")) {
        const pr = ScrollTrigger.matchMedia();
        pr.add("(min-width: 1199px)", () => {
            const sections = document.querySelectorAll(".tp-protfolio-panel");
            const wrap = document.querySelector(".tp-protfolio-pin");
            if (!sections.length || !wrap) return;
            sections.forEach((section) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 10%",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    pinSpacing: false,
                    endTrigger: wrap,
                    markers: false
                });
            });
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }

    // project slider 
    if (document.querySelector(".project-slider-wrap")) {
        const pr = ScrollTrigger.matchMedia();

        pr.add("(min-width: 1199px)", () => {

            const sections = document.querySelectorAll(".project-slider-panel");
            const wrap = document.querySelector(".project-slider-wrap");

            if (!sections.length || !wrap) return;

            // Initial state
            gsap.set(sections, { scale: 1 });

            // Animate each section except the last one
            sections.forEach((section, index) => {
                const isLast = index === sections.length - 1;
                gsap.to(section, {
                    scale: isLast ? 1 : 1, 
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 10%",
                        end: "bottom bottom",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        endTrigger: wrap,
                        markers: false,
                    },
                });
            });

            // Cleanup on condition change
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }
    // project pin 
    if (document.querySelector(".tp-project-pin")) {
        const pr = ScrollTrigger.matchMedia();
        pr.add("(min-width: 1199px)", () => {
            const sections = document.querySelectorAll(".tp-project-panel");
            const wrap = document.querySelector(".tp-project-pin");
            if (!sections.length || !wrap) return;
            sections.forEach((section) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 5%",
                    end: "bottom 95%",
                    pin: true,
                    scrub: true,
                    pinSpacing: false,
                    endTrigger: wrap,
                    markers: false
                });
            });
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }

    var hoverRevealItems = document.querySelectorAll('.hover-reveal-img');
    function updateRevealPosition(e, el) {
        var rect   = el.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        if (el.children[1]) {
            el.children[1].style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
        }
    }
    hoverRevealItems.forEach(function (item) {
        item.addEventListener('mousemove', function (e) {
            setInterval(updateRevealPosition(e, item), 100);
        });
    });

    /* ============================================================
       HOVER EFFECT (WebGL displacement — .tp--hover-img)
    ============================================================ */
    if ($('.tp--hover-item').length) {
        function initHoverEffect(wrapper, images) {
            var effect = new hoverEffect({
                parent: wrapper.get(0),
                intensity: wrapper.data('intensity')    || undefined,
                speedIn: wrapper.data('speedin')        || undefined,
                speedOut: wrapper.data('speedout')      || undefined,
                easing: wrapper.data('easing')          || undefined,
                image1: images.eq(0).attr('src'),
                image2: images.eq(0).attr('src'),
                displacementImage: wrapper.data('displacement'),
                imagesRatio: images[0].naturalWidth / images[0].naturalHeight,
                hover: false
            });

            wrapper.closest('.tp--hover-item')
                .on('mouseenter', function () { effect.next(); })
                .on('mouseleave', function () { effect.previous(); });
        }

        $('.tp--hover-img').each(function () {
            var wrapper  = $(this);
            var images   = wrapper.find('img');
            var firstImg = images.eq(0);

            if (firstImg[0].complete) {
                initHoverEffect(wrapper, images);
            } else {
                firstImg.on('load', function () { initHoverEffect(wrapper, images); });
            }
        });
    }


})(jQuery);

