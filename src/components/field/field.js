

$(document).ready(function () {

	// Устанавливаем обработчик потери фокуса для всех полей ввода
	$('.field__input').unbind().blur( function(){

			let elem = $(this);
			let field = elem.closest('.field');
			let type = $(this).attr('type');
			let val = $(this).val();
			// let nameRegexp = "[а-яА-Я ]*$";
			let nameRegexp = "[а-яА-Я ]{2,20}$";
			let phoneRegexp = "[+]{1} [0-9]{1} [(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}";

			if (type == 'text') {

				if (val.match(nameRegexp) !== null) {

					field
						.removeClass('field_incorrect')
						.addClass('field_correct')
					;

				}

				else {

					field
						.addClass('field_incorrect')
						.removeClass('field_correct')
					;

				}

			}

			else if (type == 'phone') {

				if (val.match(phoneRegexp) !== null) {

					val = val.replace(/\s/g, '');

					field
						.removeClass('field_incorrect')
						.addClass('field_correct')
					;

				}

				else {

					field
						.addClass('field_incorrect')
						.removeClass('field_correct')
					;

				}

			}

	});


	$(".field__input[type='phone']").each(function () {

		let placeholder = $(this).attr('placeholder');

		$(this).mask(
			"+ 7 (999) 999-99-99", 
			{placeholder:placeholder}
		);

	});

});

