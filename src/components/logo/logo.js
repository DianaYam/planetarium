
document.addEventListener("DOMContentLoaded", function () {

	var logoLinks = document.querySelectorAll(".logo__link");

	for (let i = 0; i < logoLinks.length; i++) {

	    let link = logoLinks[i];

	    link.addEventListener('click', function(e) {

				e.preventDefault();
				$.scrollify.move($(this).attr('href'));

			});
	}

});
