import svg4everybody from 'svg4everybody';
// import { tns } from "tiny-slider/src/tiny-slider";
// import $ from 'jquery';


(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #1b1e64',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.52',
    'text-align: left',
    'font-size: 14px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://igrlv.ru', styles);

  /*
    Lazyload images
  */

  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: false
  });

  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }

  $(function() {

    // Slider

    // if ($('.header__slider').length > 0) {
    //   const $headerSlider = tns({
    //     container: '.header__slider',
    //     items: 1,
    //     controls: false,
    //     autoplay: true,
    //     speed: 900,
    //     nav: false,
    //     autoHeight: true,
    //     animateIn: 'tns-fadeIn',
    //     animateOut: 'tns-fadeOut'
    //   });

    // }

    const $headerSlider = $('.header__slider');

    if ($headerSlider.length > 0) {

      $headerSlider.slick({
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        mobileFirst: true,
        // infinite: false,
        loop: true,
        // lazyLoad: 'ondemand',
        speed: 900,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,

      });

    }


    const $pressSlider = $('.press__slider');

    if ($pressSlider.length > 0) {

      $pressSlider.slick({
          slidesToScroll: 3,
          slidesToShow: 3,
          dots: true,
          mobileFirst: true,
          // infinite: false,
          loop: true,
          lazyLoad: 'ondemand',
          // fade: true,
          speed: 300,
          focusOnSelect: true,
          waitForAnimate: false,
          adaptiveHeight: false,
          // arrows: false,
          // appendDots: $('.exhibition__dots'),
          prevArrow: '.press__arrow_back',
          nextArrow: '.press__arrow_next',

          responsive: [{
              breakpoint: 1,
              settings: 'unslick'
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
        });
    }


    // Video



    // Phone Mask

    // $('.form__field_phone input').mask("+ 7(999)999-99-99", {

    // });



  });




})(jQuery);
