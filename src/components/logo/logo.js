"use strict";

document.addEventListener("DOMContentLoaded", function () {

	var logoLinks = document.getElementsByClassName("logo__link");

	Array.prototype.forEach.call(logoLinks, el => {

    el.addEventListener('click', function(e) {

			e.preventDefault();
			$.scrollify.move($(this).attr('href'));

		});

	});

});
