
document.addEventListener("DOMContentLoaded", function () {

  let menuSigns = document.getElementsByClassName('header-menu-sign');

  for (let i=0; i<menuSigns.length; i++) {

    menuSigns[i].addEventListener('click', function (e) {

      let elem = this;
      let elemParent = elem.parentNode;
      
      //- ищем ближайшего родителя с классом header
      while (!elemParent.classList.contains('header')) {
        elemParent = elemParent.parentNode;
      }

      let header = elemParent;

      header.classList.toggle('header_opened');
      header.querySelector('.header-menu-list-wrapper').style.width = document.documentElement.clientWidth + 'px';

    });

  }

  let items = document.querySelectorAll('.header-menu-list__link, .header__logo');

  for (let i=0; i<items.length; i++) {

    items[i].addEventListener('click', function (e) {

      let elem = this;
      let elemParent = elem.parentNode;
      
      //- ищем ближайшего родителя с классом header
      while (!elemParent.classList.contains('header')) {
        elemParent = elemParent.parentNode;
      }

      let header = elemParent;

      header.classList.remove('header_opened');
      e.preventDefault();

      if (elem.classList.contains('header-menu-list__link')) {
        $.scrollify.move($(elem).attr('href'));
      }
      else {
        $.scrollify.move('#1');
      }

    });

  }

  // на мобильных устройствах onresize срабатывает в том числе при прокрутке. Чтобы этого избежать, запоминаем текущую ширину экрана (1) и сравниваем (2)
  let windowWidth = document.documentElement.clientWidth; // (1)

  window.addEventListener('resize', function(e) {
    
    let newWindowWidth = document.documentElement.clientWidth;
    
    if(newWindowWidth !== windowWidth) { // (2)

      let menus = document.querySelectorAll('.header-menu-list-wrapper');

      if (newWindowWidth <= 750) {

        for (let i=0; i<menus.length; i++) {
          menus[i].style.width = newWindowWidth + 'px';
        }
        
      }

      else {

        for (let i=0; i<menus.length; i++) {
          menus[i].style.width = '';
        }

        let headers = document.querySelectorAll('.header');

        for (let i=0; i<headers.length; i++) {
          headers[i].classList.remove('header_opened');
        }

      }

      // запоминаем текущую ширину экрана
      windowWidth = newWindowWidth;

    };

  });

});
