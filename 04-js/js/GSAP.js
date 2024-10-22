// java script for 04.GSAP-sample.html
gsap.registerPlugin(ScrollTrigger);

// header
// 윈도우가 스크롤 됐을 때
window.addEventListener(
    'scroll',
    _.throttle(function () {
        // gsap을 이용해서 #header의 tanslateY 값을 -100%로 설정

        const scrolled = window.scrollY;
        console.log(`스크롤 값 : ${scrolled}`);

        // 만약 y축 스크롤 값(scrolled)이 80보다 크다면
        if (scrolled > 80) {
            gsap.to('#header', { yPercent: -100, duration: 0.3 });
            gsap.to('#to-top', { x: -70, duration: 0.3 });
        } else {
            gsap.to('#header', { yPercent: 0, duration: 1 });
            gsap.to('#to-top', { x: 0, duration: 0.3 });
        }
    })
);

// intro
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        pin: false,
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=600', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
    },
});

tl.fromTo('.orange', { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }),
    tl.to('.orange', { y: 0, duration: 1 }),
    tl.from('.green', { x: -200, opacity: 0, duraion: 2 }, '<'),
    tl.from('.yellow', { y: 200, opacity: 0, duration: 1 }, '<'),
    tl.to('.box-area', { rotate: 90, duration: 0.5 }),
    tl.from('.name', { scale: 0, duration: 1 });

gsap.to('.grow', {
    height: '70%',
    width: '80%',
    // duration: 0.5,
    scrollTrigger: {
        trigger: '.sec-grow',
        pin: false,
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '80% bottom', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
    },
});
