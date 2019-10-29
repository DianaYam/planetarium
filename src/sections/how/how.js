
document.addEventListener("DOMContentLoaded", function () {

  let sliderOptions = {
    items: 1,
    nav: true,
    navText: [
      '<i class="how-info__slider-nav fas fa-angle-left"></i>',
      '<i class="how-info__slider-nav fas fa-angle-right"></i>'
    ],
    dots: false,
    onInitialized: counter,
    onTranslated: counter
  };

  function counter(event) {
    let element = event.target;
    let items = event.item.count;
    let item = event.item.index + 1;
    let countText = item < 10 ? "0" + item + " / " : item + " / ";

    countText = items < 10 ? countText + "0" + items : countText + items;
    document.querySelector('.how-info__slider-counter').innerHTML = countText;
  }

  let windowWidth = document.documentElement.clientWidth; // (1)
  let steps = document.querySelector('.how-info-steps');

  if (windowWidth <= 750) {
    steps.classList.add('how-info-steps_slider');
    $(steps).owlCarousel(sliderOptions);
  }

  // на мобильных устройствах onresize срабатывает в том числе при прокрутке. Чтобы этого избежать, запоминаем текущую ширину экрана (1) и сравниваем (2)
  window.addEventListener('resize', function(e) {
    
    let newWindowWidth = document.documentElement.clientWidth;
    
    if(newWindowWidth !== windowWidth) { // (2)

      if (newWindowWidth <= 750) {
        steps.classList.add('how-info-steps_slider');
        $(steps).owlCarousel(sliderOptions);
      }

      else {
        steps.classList.remove('how-info-steps_slider');
        $(steps).trigger('destroy.owl.carousel');
      }

      // запоминаем текущую ширину экрана
      windowWidth = newWindowWidth;

    };

  });

});
