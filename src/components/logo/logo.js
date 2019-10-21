

$(document).ready(function () {

  $(".logo__link").click(function (e) {

    e.preventDefault();
    $.scrollify.move($(this).attr('href'));
    
  });

});

