"use strict";

document.addEventListener("DOMContentLoaded", function () {

  let menuSigns = document.getElementsByClassName('header-menu-sign');

  Array.prototype.forEach.call(menuSigns, el => {

    el.addEventListener('click', function (e) {

      let header = this.parentNode;
      
      //- ищем ближайшего родителя с классом header
      while (!header.classList.contains('header')) {
        header = header.parentNode;
      }

      header.classList.toggle('header_opened');
      header.querySelector('.header-menu-list-wrapper').style.width = document.documentElement.clientWidth + 'px';

      document.getElementById('body').classList.toggle('modal-opened');
    });

  });

  let items = document.querySelectorAll('.header-menu-list__link, .header__logo');

  Array.prototype.forEach.call(items, el => {

    el.addEventListener('click', function (e) {

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

      document.getElementById('body').classList.remove('modal-opened');
    });

  });

  // на мобильных устройствах onresize срабатывает в том числе при прокрутке. Чтобы этого избежать, запоминаем текущую ширину экрана (1) и сравниваем (2)
  let windowWidth = document.documentElement.clientWidth; // (1)

  window.addEventListener('resize', function(e) {
    
    let newWindowWidth = document.documentElement.clientWidth;
    
    if(newWindowWidth !== windowWidth) { // (2)

      let menus = document.querySelectorAll('.header-menu-list-wrapper');

      if (newWindowWidth <= 750) {

        Array.prototype.forEach.call(menus, el => {
          el.style.width = newWindowWidth + 'px';
        });
        
      }

      else {

        Array.prototype.forEach.call(menus, el => {
          el.style.width = '';
        });

        let headers = document.querySelectorAll('.header');

        Array.prototype.forEach.call(headers, el => {
          el.classList.remove('header_opened');
        });

      }

      // запоминаем текущую ширину экрана
      windowWidth = newWindowWidth;

    };

  });

});
