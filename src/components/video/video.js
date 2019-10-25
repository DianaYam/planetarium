
document.addEventListener("DOMContentLoaded", function () {

	// по клику на крестик закрывается видео
  document.querySelector(".video__close").addEventListener('click', function(e) {

    let close = this;
    let closeParent = close.parentNode;

    //- ищем ближайшего родителя с классом video
    while (!closeParent.classList.contains('video')) {
      closeParent = closeParent.parentNode;
    }

    let video = closeParent;
    video.classList.remove('fadeIn');

    setTimeout(function() {
      video.classList.remove('visible');
      video.querySelector('.video__file').setAttribute('src', '');
    }, 300);

    $('.body').removeClass('modal-opened');

  });

});