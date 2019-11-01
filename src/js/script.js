
document.addEventListener("DOMContentLoaded", function () {

  $.scrollify({
    section : ".scroll-section",
    setHeights: true,
    sectionName: false
  });

	// по клику на кнопку "Заказать" открывается модальное окно
  let orderBtns = document.getElementsByClassName("order-btn");

  for (let i = 0; i < orderBtns.length; i++) {

    orderBtns[i].addEventListener('click', function(e) {

      let orderModalCls = document.getElementById("order-modal").classList;
      orderModalCls.add('visible');
      orderModalCls.add('fadeIn'); // IE не поддерживает добаление нескольких классов (classList.add('visible', 'fadeIn'))
      document.getElementById("body").classList.add('modal-opened');

    });

  }

  // запоминаем src видео, чтобы после закрытия src стереть и видео выключилось
  let video = document.getElementById("video");
  let videoFile = video.querySelector('.video__file');
  let videoSrc = videoFile.getAttribute('src');
  videoFile.src = "";

  // по клику на кнопку "Видео" открывается видео
  let videoBtns = document.getElementsByClassName("video-btn");

  for (let i = 0; i < videoBtns.length; i++) {

    let btn = videoBtns[i];

    btn.addEventListener('click', function(e) {

      video.classList.add('visible');
      video.classList.add('fadeIn');
      videoFile.setAttribute('src', videoSrc);

      document.getElementById("body").classList.add('modal-opened');

    });

  }
  
});

