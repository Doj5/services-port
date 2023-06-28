$(function (){

  var mixer = mixitup('.blog__items');

  $('.about__slider').slick({
    arrows:false,
    dots:true,
    appendDots:$('.about__dots'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.about__prev').on('click', function (e) {
    e.preventDefault()
    $('.about__slider').slick('slickPrev')
  })
  $('.about__next').on('click', function (e) {
    e.preventDefault()
    $('.about__slider').slick('slickNext')
  })

  // $('.acc-questions__link').on('click', function(e){
  //   e.preventDefault()
  //   $(this).toggleClass('acc-questions__link--active')
  //   $(this).children('.acc-questions__text').slideToggle()
  // })

  $('.acc-questions__link').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('acc-questions__link--active')){
      $(this).removeClass('acc-questions__link--active')
      $(this).children('.acc-questions__text').slideToggle()
    } else {
      $('.acc-questions__link').removeClass('acc-questions__link--active')
      $('.acc-questions__text').slideUp()
      $(this).addClass('acc-questions__link--active')
      $(this).children('.acc-questions__text').slideDown()
    }
  })

  $(".menu__list a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })


  $('.header__burger, .header__body').on('click', function (e) {
    e.preventDefault()
    $('.header__body').toggleClass('open')
  })

});






