
document.addEventListener("DOMContentLoaded", function () {

	let headers = document.querySelectorAll('.faq-info-question__header');
	
	for (let i=0; i<headers.length; i++) {

		headers[i].addEventListener('click', function(e) {

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
		    let questionsHeaders = questions.querySelectorAll('.faq-info-question__header');

		    for(let j=0; j<questionsHeaders.length; j++) {
		    	questionsHeaders[j].classList.remove('opened');
		    	questionsHeaders[j].nextSibling.style.height = '0';
		    }

				elem.classList.add('opened');
				elem.nextSibling.style.height = `${elem.nextSibling.scrollHeight}px`;

			}

		});

	};

});
