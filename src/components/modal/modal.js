
document.addEventListener("DOMContentLoaded", function () {

  // делаем кнопку отправки изначально disabled
	document.querySelectorAll('.modal__btn').forEach(function (elem) {
		elem.setAttribute('disabled', true);
	});

  // кнопка disabled, если форма не валидна
	document.querySelectorAll(".modal__field .field__input").forEach(function (elem) {

		elem.addEventListener('change', function(e) {

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

  });

	// обработчик отправки формы
  document.querySelectorAll(".modal__content").forEach(function (elem) {

		elem.addEventListener('submit', function(e) {

			e.preventDefault();

  		let fields = e.target.querySelectorAll('.modal__field');
  		let formParent = e.target.parentNode;

	  	//- ищем ближайшего родителя с классом modal
	    while (!formParent.classList.contains('modal')) {
	      formParent = formParent.parentNode;
	    }

	    let modal = formParent;

		 	modal.classList.add('modal_ordered');

			fields.forEach(function(elem) {
				elem.classList.remove('field_correct');
			});

		});

  });

  // по клику на крестик закрывается модальное окно
  document.querySelector(".modal__close").addEventListener('click', function(e) {

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
      
      modal.querySelectorAll('.modal__field').forEach(function (elem) {
      	elem.classList.remove('field_correct');
      	elem.classList.remove('field_incorrect');
    		elem.querySelector('.field__input').value = '';
      });

    }, 300);

    document.getElementById('body').classList.remove('modal-opened');

  });

});
