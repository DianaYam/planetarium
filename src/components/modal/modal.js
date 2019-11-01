
document.addEventListener("DOMContentLoaded", function () {

  // делаем кнопку отправки изначально disabled
  let modalBtns = document.getElementsByClassName('modal__btn');

	for (let i=0; i<modalBtns.length; i++) {
		modalBtns[i].setAttribute('disabled', true);
	}

  // кнопка disabled, если форма не валидна
  let fieldInputs = document.querySelectorAll(".modal__field .field__input");

	for (let i=0; i<fieldInputs.length; i++) {

		fieldInputs[i].addEventListener('change', function(e) {

			let inputParent = e.target.parentNode;

			//- ищем ближайшего родителя с классом modal__content
	    while (!inputParent.classList.contains('modal__content')) {
	      inputParent = inputParent.parentNode;
	    }

	    let content = inputParent;

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

  };

	// обработчик отправки формы
	let forms = document.getElementsByClassName("modal__content");

  for (let i=0; i<forms.length; i++) {

		forms[i].addEventListener('submit', function(e) {

			e.preventDefault();

  		let fields = e.target.querySelectorAll('.modal__field');
  		let formParent = e.target.parentNode;

	  	//- ищем ближайшего родителя с классом modal
	    while (!formParent.classList.contains('modal')) {
	      formParent = formParent.parentNode;
	    }

	    let modal = formParent;

		 	modal.classList.add('modal_ordered');

			for (let j=0; j<fields.length; j++) {
				fields[j].classList.remove('field_correct');
			}

		});

  };

  // по клику на крестик закрывается модальное окно
  let closeBtns = document.getElementsByClassName("modal__close");
  
  for (let i=0; i<closeBtns.length; i++) {

  	closeBtns[i].addEventListener('click', function(e) {

  		let closeParent = e.target.parentNode;

	    //- ищем ближайшего родителя с классом modal
	    while (!closeParent.classList.contains('modal')) {
	      closeParent = closeParent.parentNode;
	    }

	    let modal = closeParent;
	    modal.classList.remove('fadeIn');

	    setTimeout(function() {
	      modal.classList.remove('visible');
	      modal.classList.remove('modal_ordered');
	      modal.querySelector('.modal__btn').setAttribute('disabled', true);
	      
	      let modalFields = modal.getElementsByClassName('modal__field')

	      for (let k=0; k<modalFields.length; k++) {
	      	let field = modalFields[k];
	      	
	      	field.classList.remove('field_correct');
	      	field.classList.remove('field_incorrect');
	    		field.querySelector('.field__input').value = '';
	      };

	    }, 300);

	    document.getElementById('body').classList.remove('modal-opened');

	  });
	  
  }

});
