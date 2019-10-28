
document.addEventListener("DOMContentLoaded", function () {

	//- подключаем к полям для телефонов маску ввода
	let phoneInputs = document.querySelectorAll(".field__input[type='phone']");

	for (let i=0; i<phoneInputs.length; i++) {

    $(phoneInputs[i]).mask(
			"+ 7 (999) 999-99-99", 
			{placeholder:$(this).placeholder}
		);

	};

	let inputs = document.querySelectorAll(".field__input")

	for (let i=0; i<inputs.length; i++) {

		//- валидация по потере фокуса
    inputs[i].addEventListener('blur', function(e) {

  		let elem = e.target;
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

			let event;

			if(typeof(Event) === 'function') {
			    event = new Event('change');
			}
			else {
			    event = document.createEvent('Event');
			    event.initEvent('change', true, true);
			}

			field.querySelector('.field__input').dispatchEvent(event);

		});

	};

});
