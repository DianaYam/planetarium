parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dDMD":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".faq-info-question__header"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){if(this.classList.contains("opened"))this.classList.remove("opened"),this.nextSibling.style.height="0";else{for(var t=this.parentNode;!t.classList.contains("faq-info-questions");)t=t.parentNode;for(var n=t.querySelectorAll(".faq-info-question__header"),i=0;i<n.length;i++)n[i].classList.remove("opened"),n[i].nextSibling.style.height="0";this.classList.add("opened"),this.nextSibling.style.height="".concat(this.nextSibling.scrollHeight,"px")}})});
},{}]},{},["dDMD"], null)
//# sourceMappingURL=/faq.352c76f2.js.map