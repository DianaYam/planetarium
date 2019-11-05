"use strict";

document.addEventListener("DOMContentLoaded", function () {

	// по клику на крестик закрывается видео
  let videoCloses = document.getElementsByClassName("video__close");

  Array.prototype.forEach.call(videoCloses, el => {

    el.addEventListener('click', function(e) {

      let video = this.parentNode;

      //- ищем ближайшего родителя с классом video
      while (!video.classList.contains('video')) {
        video = video.parentNode;
      }

      video.classList.remove('fadeIn');

      setTimeout(function() {
        video.classList.remove('visible');
        let videoFile = video.querySelector('.video__file');
        let src = videoFile.getAttribute('src');
        videoFile.setAttribute('src', ''); //- чтобы видео выключилось после закрытия
        videoFile.setAttribute('src', src);
      }, 300);

      document.getElementById('body').classList.remove('modal-opened');

    });

  });

});