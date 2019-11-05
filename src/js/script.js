"use strict";

document.addEventListener("DOMContentLoaded", function () {

  $.scrollify({
    section : ".scroll-section",
    setHeights: true,
    sectionName: false
  });

	// по клику на кнопку "Заказать" открывается модальное окно
  let orderBtns = document.getElementsByClassName("order-btn");

  Array.prototype.forEach.call(orderBtns, el => {

    el.addEventListener('click', function(e) {

      let orderModalCls = document.getElementById("order-modal").classList;
      orderModalCls.add('visible');
      orderModalCls.add('fadeIn'); // IE не поддерживает добаление нескольких классов (classList.add('visible', 'fadeIn'))
      document.getElementById("body").classList.add('modal-opened');

    });

  });

  // по клику на кнопку "Видео" открывается видео с эффектом виртуальной реальности
  let videoBtns = document.getElementsByClassName("video-btn");

  Array.prototype.forEach.call(videoBtns, el => {

    el.addEventListener('click', function(e) {

      let video = document.getElementById("vr-video");
      video.classList.add('visible');
      video.classList.add('fadeIn');

      document.getElementById("body").classList.add('modal-opened');

    });

  });
  
});

