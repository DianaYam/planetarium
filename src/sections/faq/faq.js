
document.addEventListener("DOMContentLoaded", function () {

	let headers = document.getElementsByClassName('faq-info-question__header');
	
	Array.prototype.forEach.call(headers, el => {

		el.addEventListener('click', function(e) {

			let elem = this;

			if (elem.classList.contains('opened')) {
				elem.classList.remove('opened');
	    	elem.nextSibling.style.height = '0';
			}

			else {

				let elemParent = elem.parentNode;

				//- ищем ближайшего родителя с классом faq-info-questions
				while (!elemParent.classList.contains('faq-info-questions')) {
		      elemParent = elemParent.parentNode;
		    }

		    let questions = elemParent;
		    let questionsHeaders = questions.getElementsByClassName('faq-info-question__header');

		    Array.prototype.forEach.call(questionsHeaders, el => {
		    	el.classList.remove('opened');
		    	el.nextSibling.style.height = '0';
		    });

				elem.classList.add('opened');
				elem.nextSibling.style.height = `${elem.nextSibling.scrollHeight}px`;

			}

		});

	});

});
