import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AudioPlyr: () => import('../..\\components\\global\\audioPlyr.vue' /* webpackChunkName: "components/audio-plyr" */).then(c => wrapFunctional(c.default || c)),
  AudioPlyr2: () => import('../..\\components\\global\\audioPlyr2.vue' /* webpackChunkName: "components/audio-plyr2" */).then(c => wrapFunctional(c.default || c)),
  BurgerAR: () => import('../..\\components\\global\\BurgerAR.vue' /* webpackChunkName: "components/burger-a-r" */).then(c => wrapFunctional(c.default || c)),
  BurgerEN: () => import('../..\\components\\global\\BurgerEN.vue' /* webpackChunkName: "components/burger-e-n" */).then(c => wrapFunctional(c.default || c)),
  C4S2IntroTest: () => import('../..\\components\\global\\C4S2IntroTest.vue' /* webpackChunkName: "components/c4-s2-intro-test" */).then(c => wrapFunctional(c.default || c)),
  C4S2SectionFiveEN: () => import('../..\\components\\global\\C4S2SectionFiveEN.vue' /* webpackChunkName: "components/c4-s2-section-five-e-n" */).then(c => wrapFunctional(c.default || c)),
  C4S2SectionFour: () => import('../..\\components\\global\\C4S2SectionFour.vue' /* webpackChunkName: "components/c4-s2-section-four" */).then(c => wrapFunctional(c.default || c)),
  C4S2SectionThree: () => import('../..\\components\\global\\C4S2SectionThree.vue' /* webpackChunkName: "components/c4-s2-section-three" */).then(c => wrapFunctional(c.default || c)),
  C4S2SectionTwo: () => import('../..\\components\\global\\C4S2SectionTwo.vue' /* webpackChunkName: "components/c4-s2-section-two" */).then(c => wrapFunctional(c.default || c)),
  ChapterImageHero: () => import('../..\\components\\global\\ChapterImageHero.vue' /* webpackChunkName: "components/chapter-image-hero" */).then(c => wrapFunctional(c.default || c)),
  ChapterShifter: () => import('../..\\components\\global\\chapterShifter.vue' /* webpackChunkName: "components/chapter-shifter" */).then(c => wrapFunctional(c.default || c)),
  Credits: () => import('../..\\components\\global\\Credits.vue' /* webpackChunkName: "components/credits" */).then(c => wrapFunctional(c.default || c)),
  ImageWcaption: () => import('../..\\components\\global\\ImageWcaption.vue' /* webpackChunkName: "components/image-wcaption" */).then(c => wrapFunctional(c.default || c)),
  ImageWcaptionDoc: () => import('../..\\components\\global\\ImageWcaptionDoc.vue' /* webpackChunkName: "components/image-wcaption-doc" */).then(c => wrapFunctional(c.default || c)),
  ImageWcaptionZain: () => import('../..\\components\\global\\ImageWcaptionZain.vue' /* webpackChunkName: "components/image-wcaption-zain" */).then(c => wrapFunctional(c.default || c)),
  IntroSection: () => import('../..\\components\\global\\IntroSection.vue' /* webpackChunkName: "components/intro-section" */).then(c => wrapFunctional(c.default || c)),
  Mobile: () => import('../..\\components\\global\\Mobile.vue' /* webpackChunkName: "components/mobile" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\global\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Nazeer: () => import('../..\\components\\global\\Nazeer.vue' /* webpackChunkName: "components/nazeer" */).then(c => wrapFunctional(c.default || c)),
  Quote: () => import('../..\\components\\global\\Quote.vue' /* webpackChunkName: "components/quote" */).then(c => wrapFunctional(c.default || c)),
  Rahel: () => import('../..\\components\\global\\Rahel.vue' /* webpackChunkName: "components/rahel" */).then(c => wrapFunctional(c.default || c)),
  SectionImageHero: () => import('../..\\components\\global\\sectionImageHero.vue' /* webpackChunkName: "components/section-image-hero" */).then(c => wrapFunctional(c.default || c)),
  SectionImageHeroLawyer: () => import('../..\\components\\global\\sectionImageHeroLawyer.vue' /* webpackChunkName: "components/section-image-hero-lawyer" */).then(c => wrapFunctional(c.default || c)),
  SectionText: () => import('../..\\components\\global\\SectionText.vue' /* webpackChunkName: "components/section-text" */).then(c => wrapFunctional(c.default || c)),
  SectionVideoHero: () => import('../..\\components\\global\\sectionVideoHero.vue' /* webpackChunkName: "components/section-video-hero" */).then(c => wrapFunctional(c.default || c)),
  Strip: () => import('../..\\components\\global\\Strip.vue' /* webpackChunkName: "components/strip" */).then(c => wrapFunctional(c.default || c)),
  VideoBackground: () => import('../..\\components\\global\\videoBackground.vue' /* webpackChunkName: "components/video-background" */).then(c => wrapFunctional(c.default || c)),
  VideoPlayer: () => import('../..\\components\\global\\VideoPlayer.vue' /* webpackChunkName: "components/video-player" */).then(c => wrapFunctional(c.default || c)),
  VideoPlayerBlur: () => import('../..\\components\\global\\VideoPlayerBlur.vue' /* webpackChunkName: "components/video-player-blur" */).then(c => wrapFunctional(c.default || c)),
  WomenSlider: () => import('../..\\components\\global\\WomenSlider.vue' /* webpackChunkName: "components/women-slider" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderFive: () => import('../..\\components\\global\\WomenSliderFive.vue' /* webpackChunkName: "components/women-slider-five" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderFour: () => import('../..\\components\\global\\WomenSliderFour.vue' /* webpackChunkName: "components/women-slider-four" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderOne: () => import('../..\\components\\global\\WomenSliderOne.vue' /* webpackChunkName: "components/women-slider-one" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderSix: () => import('../..\\components\\global\\WomenSliderSix.vue' /* webpackChunkName: "components/women-slider-six" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderThree: () => import('../..\\components\\global\\WomenSliderThree.vue' /* webpackChunkName: "components/women-slider-three" */).then(c => wrapFunctional(c.default || c)),
  WomenSliderTwo: () => import('../..\\components\\global\\WomenSliderTwo.vue' /* webpackChunkName: "components/women-slider-two" */).then(c => wrapFunctional(c.default || c)),
  LawyerAR: () => import('../..\\components\\LawyerAR.vue' /* webpackChunkName: "components/lawyer-a-r" */).then(c => wrapFunctional(c.default || c)),
  LawyerEN: () => import('../..\\components\\LawyerEN.vue' /* webpackChunkName: "components/lawyer-e-n" */).then(c => wrapFunctional(c.default || c)),
  LighboxOneChapOne: () => import('../..\\components\\LighboxOneChapOne.vue' /* webpackChunkName: "components/lighbox-one-chap-one" */).then(c => wrapFunctional(c.default || c)),
  Lightbox1: () => import('../..\\components\\Lightbox1.vue' /* webpackChunkName: "components/lightbox1" */).then(c => wrapFunctional(c.default || c)),
  Lightbox2Ghandour: () => import('../..\\components\\Lightbox2Ghandour.vue' /* webpackChunkName: "components/lightbox2-ghandour" */).then(c => wrapFunctional(c.default || c)),
  LightboxBasta: () => import('../..\\components\\LightboxBasta.vue' /* webpackChunkName: "components/lightbox-basta" */).then(c => wrapFunctional(c.default || c)),
  LightboxTwoChapTwo: () => import('../..\\components\\LightboxTwoChapTwo.vue' /* webpackChunkName: "components/lightbox-two-chap-two" */).then(c => wrapFunctional(c.default || c)),
  Sliderseven: () => import('../..\\components\\Sliderseven.vue' /* webpackChunkName: "components/sliderseven" */).then(c => wrapFunctional(c.default || c)),
  SlidersevenEn: () => import('../..\\components\\SlidersevenEn.vue' /* webpackChunkName: "components/sliderseven-en" */).then(c => wrapFunctional(c.default || c)),
  Slidersevenm: () => import('../..\\components\\Slidersevenm.vue' /* webpackChunkName: "components/slidersevenm" */).then(c => wrapFunctional(c.default || c)),
  SlidersevenmEn: () => import('../..\\components\\SlidersevenmEn.vue' /* webpackChunkName: "components/slidersevenm-en" */).then(c => wrapFunctional(c.default || c)),
  Slidersix: () => import('../..\\components\\Slidersix.vue' /* webpackChunkName: "components/slidersix" */).then(c => wrapFunctional(c.default || c)),
  SlidersixEn: () => import('../..\\components\\SlidersixEn.vue' /* webpackChunkName: "components/slidersix-en" */).then(c => wrapFunctional(c.default || c)),
  Slidersixm: () => import('../..\\components\\Slidersixm.vue' /* webpackChunkName: "components/slidersixm" */).then(c => wrapFunctional(c.default || c)),
  SlidersixmEn: () => import('../..\\components\\SlidersixmEn.vue' /* webpackChunkName: "components/slidersixm-en" */).then(c => wrapFunctional(c.default || c)),
  ZainInterviews: () => import('../..\\components\\ZainInterviews.vue' /* webpackChunkName: "components/zain-interviews" */).then(c => wrapFunctional(c.default || c)),
  ZainInterviewsEN: () => import('../..\\components\\ZainInterviewsEN.vue' /* webpackChunkName: "components/zain-interviews-e-n" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
