
document.addEventListener("DOMContentLoaded", function () {

	let phoneFields = document.querySelectorAll(".field__input[type='phone']");

	for (let i = 0; i < phoneFields.length; i++) {

    let input = phoneFields[i];
    let placeholder = input.placeholder;

    $(input).mask(
			"+ 7 (999) 999-99-99", 
			{placeholder:placeholder}
		);

  }

	let fieldInputs = document.querySelectorAll(".field__input");

	for (let i = 0; i < fieldInputs.length; i++) {

	    let input = fieldInputs[i];

  		//- валидация по потере фокуса
	    input.addEventListener('blur', function(e) {

				let elem = event.target;
				let elemParent = elem.parentNode;

				//- ищем ближайшего родителя с классом field
				while (!elemParent.classList.contains('field')) {
					elemParent = elemParent.parentNode;
				}

				let field = elemParent;
				let type = elem.getAttribute('type');
				let val = elem.value;
				let nameRegexp = "[а-яА-Я ]{2,20}$";
				let phoneRegexp = "[+]{1} [0-9]{1} [(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}";

				if (type === 'text') {

					if (val.match(nameRegexp) !== null) {

						field.classList.remove('field_incorrect');
						field.classList.add('field_correct');

					}

					else {

						field.classList.remove('field_correct');
						field.classList.add('field_incorrect');

					}

				}

				else if (type === 'phone') {

					if (val.match(phoneRegexp) !== null) {

						field.classList.remove('field_incorrect');
						field.classList.add('field_correct');

					}

					else {

						field.classList.remove('field_correct');
						field.classList.add('field_incorrect');

					}

				}

			});
	}

});
