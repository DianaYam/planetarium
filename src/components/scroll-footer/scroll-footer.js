
document.addEventListener("DOMContentLoaded", function () {

	let scrollFooterLinks = document.querySelectorAll('.scroll-footer__link');

	for (let i = 0; i < scrollFooterLinks.length; i++) {

	    let link = scrollFooterLinks[i];

	    link.addEventListener('click', function(e) {

				e.preventDefault();
				$.scrollify.next();

			});
	}

});
