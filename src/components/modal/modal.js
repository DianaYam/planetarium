
document.addEventListener("DOMContentLoaded", function () {

  // делаем кнопку отправки изначально disabled
  let modalBtns = document.getElementsByClassName('modal__btn');

	Array.prototype.forEach.call(modalBtns, el => {
		el.setAttribute('disabled', true);
	});

  // кнопка disabled, если форма не валидна
  let fieldInputs = document.querySelectorAll(".modal__field .field__input");

	Array.prototype.forEach.call(fieldInputs, el => {

		el.addEventListener('change', function(e) {

			let content = this.parentNode;

			//- ищем ближайшего родителя с классом modal__content
	    while (!content.classList.contains('modal__content')) {
	      content = content.parentNode;
	    }

	  	let fields = content.querySelectorAll('.modal__field');
	  	let correctFields = content.querySelectorAll('.modal__field.field_correct');
  		let btn = content.querySelector('.modal__btn');
	      
			if (fields.length === correctFields.length) {
				btn.removeAttribute('disabled');
			}

			else {
				btn.setAttribute('disabled', true);
			}

		});

  });

	// обработчик отправки формы
	let forms = document.getElementsByClassName("modal__content");

  Array.prototype.forEach.call(forms, el => {

		el.addEventListener('submit', function(e) {

			e.preventDefault();

  		let fields = this.querySelectorAll('.modal__field');
  		let modal = this.parentNode;

	  	//- ищем ближайшего родителя с классом modal
	    while (!modal.classList.contains('modal')) {
	      modal = modal.parentNode;
	    }

		 	modal.classList.add('modal_ordered');

			Array.prototype.forEach.call(fields, el => {
				el.classList.remove('field_correct');
			});

		});

  });

  // по клику на крестик закрывается модальное окно
  let closeBtns = document.getElementsByClassName("modal__close");
  
  Array.prototype.forEach.call(closeBtns, el => {

  	el.addEventListener('click', function(e) {

  		let modal = this.parentNode;

	    //- ищем ближайшего родителя с классом modal
	    while (!modal.classList.contains('modal')) {
	      modal = modal.parentNode;
	    }

	    modal.classList.remove('fadeIn');

	    setTimeout(function() {
	      modal.classList.remove('visible');
	      modal.classList.remove('modal_ordered');
	      modal.querySelector('.modal__btn').setAttribute('disabled', true);
	      
	      let modalFields = modal.getElementsByClassName('modal__field')

	      Array.prototype.forEach.call(modalFields, el => {

	      	el.classList.remove('field_correct');
	      	el.classList.remove('field_incorrect');
	    		el.querySelector('.field__input').value = '';

	      });

	    }, 300);

	    document.getElementById('body').classList.remove('modal-opened');

	  });
	  
  });

});
