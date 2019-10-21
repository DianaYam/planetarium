

$(document).ready(function () {

	// по клику на крестик закрывается модальное окно

  $('.modal__close').on('click', function () {
      $(this)
        .closest('.modal')
        .removeClass('modal_ordered')
        .fadeOut()
        .find('.modal__field .field__input')
        .val('')
      ;

      $('.body').removeClass('modal-opened');
  });

	// проверка, что все поля валидны перед отправкой

  $('.modal__btn').on('click', function () {

  	let elem = $(this);

  	let form = elem.closest('.modal__content');

  	let fields = elem.closest('.modal').find('.modal__field');

		let correctFields = elem.closest('.modal').find('.modal__field.field_correct');
      
		if (fields.length === correctFields.length) {
			
			form.submit(function(event) {

			 	$(this)
			 		.closest('.modal')
			 		.addClass('modal_ordered')
		 		;

		 		fields.each(function () {

	 				$(this).removeClass('field_correct');

		 		});

			});

		}

  });

});

