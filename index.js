(() => {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const closeBtn = document.querySelector('.close')
    let menutl = gsap.timeline({ paused: true, ease: "expo.out" });
    menutl
        .from('.menu__top', { duration: .35, opacity: 0, y: -50 })
        .from('.menu__container', { duration: .35, opacity: 0, y: 30, }, "-=.1")
        .from('.menu__nav', { duration: .35, opacity: 0, y: 20, }, "-=.11")
        .from('.social', { duration: .35, opacity: 0, y: 20, }, "-=.112")
        .from('.menu__right', { duration: .3, opacity: 0, y: 20 }, "-=.112")


    burger.addEventListener('click', () => {
        menu.classList.add('menu--open')
        menutl.timeScale(1).play()
    })

    closeBtn.addEventListener('click', () => {
        menutl.timeScale(2).reverse()
        setTimeout(() => menu.classList.remove('menu--open'), 900)

    })

    const heroTl = gsap.timeline()
    heroTl
        .to('.hero__title', { y: 0, opacity: 1, duration: 1.5, ease: "expo.out" })
        .to('.hero__btn', { y: 0, opacity: 1, duration: 1.5, ease: "expo.out" }, '-=1.5')
        .to('.hero__descr', { opacity: 1, duration: 1, }, '-=1')
        .to('.photo-1', { scale: 1, opacity: 1, duration: 0.8 }, '-=.5')
        .to('.photo-2', { scale: 1, opacity: 1, duration: 0.8 }, '-=.7')
        .to('.photo-3', { scale: 1, opacity: 1, duration: 0.8 }, '-=.6')
        .to('.photos__author', { opacity: 1, duration: 1, }, '-=.4')


})()