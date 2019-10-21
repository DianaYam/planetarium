

$(document).ready(function () {

  var sliderOptions = {
    items: 1,
    nav: true,
    navText: [
      '<i class="how-info__slider-nav fas fa-angle-left"></i>',
      '<i class="how-info__slider-nav fas fa-angle-right"></i>'
    ],
    dots: false,
    onInitialized  : counter,
    onTranslated : counter
  };

  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;

    var countText = item < 10 ? "0" + item + " / " : item + " / ";

    countText = items < 10 ? countText + "0" + items : countText + items;

    $(event.target).next('.how-info__slider-counter').html(countText);
  }

  var width = $(window).width(); // (1)

  var steps = $('.how-info-steps');

  if (width <= 750) {

    $(steps)
      .addClass('how-info-steps_slider')
      .owlCarousel(sliderOptions)
    ;

  }

	// на мобильных устройствах onresize срабатывает в том числе при прокрутке. Чтобы этого избежать, запоминаем текущую ширину экрана (1) и сравниваем (2)

  $(window).resize(function () {

    var windowWidth = $(this).width();

    if(windowWidth !== width) { // (2)

      if (windowWidth <= 750) {

        $(steps)
          .addClass('how-info-steps_slider')
          .owlCarousel(sliderOptions)
        ;

      }

      else {

        $(steps)
          .removeClass('how-info-steps_slider')
          .trigger('destroy.owl.carousel')
        ;

      }

      // запоминаем текущую ширину экрана
      width = windowWidth;
    }

  });

});

