

$(document).ready(function () {

  $('.faq-info-question__header').click(function () {

		$(this)
			.toggleClass('opened') // открываем вопрос
			.next()
			.slideToggle()
			.end() // закрываем остальные вопросы
			.parent()
			.siblings()
			.find(".faq-info-question__header")
			.removeClass('opened')
			.next()
			.slideUp()
		;

  });

});

