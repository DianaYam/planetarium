

$(document).ready(function () {

  $(".header-menu-sign").click(function () {

    $(this)
      .closest('.header')
      .toggleClass('opened')
      .find('.header-menu-list-wrapper')
      .css("width", $(window).width())
    ;

  });

  $(".header-menu-list__link").click(function (e) {

    $(this)
      .closest('.header')
      .removeClass('opened')
    ;

    e.preventDefault();
    $.scrollify.move($(this).attr('href'));

  });

  $(".header__logo").click(function (e) {

    $(this)
      .closest('.header')
      .removeClass('opened')
    ;

    e.preventDefault();
    $.scrollify.move($(this).attr('#1'));

  });

	// $(".header-menu-sign").click(function () {

	// 	$(this)
	// 		.toggleClass('header-menu-sign_close')
	// 		.next()
	// 		.toggleClass('opened')
	// 	;

 //    $('.header-menu-list-wrapper')
 //      .css("width", $(window).width())
 //    ;

	// });


	// на мобильных устройствах onresize срабатывает в том числе при прокрутке. Чтобы этого избежать, запоминаем текущую ширину экрана (1) и сравниваем (2)

  var width = $(window).width(); // (1)


  $(window).resize(function () {

    var windowWidth = $(this).width();

    if(windowWidth !== width) { // (2)

      if (windowWidth <= 750) {

        $('.header-menu-list-wrapper')
          .css("width", windowWidth)
        ;

      }

      else {

        $('.header-menu-list-wrapper')
          .css("width", "")
        ;

        $('.header')
          .removeClass('opened')
        ;

        $('.header')
          .removeClass('opened')
        ;

      }

      // запоминаем текущую ширину экрана
      width = windowWidth;

    }

  });

});

