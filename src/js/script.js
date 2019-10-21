

$(document).ready(function () {

	$(function() {
	  $.scrollify({
	    section : ".scroll-section",
	    setHeights: true,
	    sectionName: false
	  });
	});


	// по клику на кнопку "Заказать" открывается модальное окно

  $('.order-btn').on('click', function () {
      $('.modal')
          .fadeIn()
      ;

      $('.body').addClass('modal-opened');
  });

  var videoSrc = $('.video__file').attr("src");
  $('.video__file').attr("src","");

  // по клику на кнопку "Видео" открывается видео

  $('.video-btn').on('click', function () {
      $('.video')
        .fadeIn()
        .find('.video__file')
        .attr("src", videoSrc)
      ;

      $('.body').addClass('modal-opened');
  });


  // по клику на крестик закрывается видео

  $('.video__close').on('click', function () {
      $(this)
        .closest('.video')
        .fadeOut()
        .find('.video__file')
        .attr("src", "")
      ;

      $('.body').removeClass('modal-opened');
  });
  
});

