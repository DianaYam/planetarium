parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6onZ":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e={items:1,nav:!0,navText:['<i class="how-info__slider-nav fas fa-angle-left"></i>','<i class="how-info__slider-nav fas fa-angle-right"></i>'],dots:!1,onInitialized:n,onTranslated:n};function n(e){e.target;var n=e.item.count,t=e.item.index+1,o=t<10?"0"+t+" / ":t+" / ";o=n<10?o+"0"+n:o+n,document.querySelector(".how-info__slider-counter").innerHTML=o}var t=document.documentElement.clientWidth,o=document.querySelector(".how-info-steps");t<=750&&(o.classList.add("how-info-steps_slider"),$(o).owlCarousel(e)),window.addEventListener("resize",function(n){var i=document.documentElement.clientWidth;i!==t&&(i<=750?(o.classList.add("how-info-steps_slider"),$(o).owlCarousel(e)):(o.classList.remove("how-info-steps_slider"),$(o).trigger("destroy.owl.carousel")),t=i)})});
},{}]},{},["6onZ"], null)
//# sourceMappingURL=/how.c4580797.js.map