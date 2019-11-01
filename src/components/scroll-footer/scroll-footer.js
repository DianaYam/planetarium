
document.addEventListener("DOMContentLoaded", function () {

	let scrollFooterLinks = document.getElementsByClassName('scroll-footer__link');

	Array.prototype.forEach.call(scrollFooterLinks, el => {

    el.addEventListener('click', function(e) {

			e.preventDefault();
			$.scrollify.next();

		});

	});

});
