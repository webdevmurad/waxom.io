/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/burger.js":
/*!****************************!*\
  !*** ./js/parts/burger.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  $(document).ready(function () {
    var link = $('.menu-link');
    var menu = $('.menu');
    var link_active = $('.menu-link_active');
    var overlay = $('.overlay');
    link.click(function () {
      menu.toggleClass('menu_active');
      overlay.toggleClass('overlay-active');
    });
    link_active.click(function () {
      overlay.removeClass('overlay-active');
      menu.removeClass('menu_active');
    });
  });
}

module.exports = burger;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var imgPopup = document.createElement('div'),
      image = document.createElement('img'),
      srcImg = document.querySelectorAll('.link-img');
  imgPopup.classList.add('img-popup');
  image.classList.add('img-content');
  document.body.appendChild(imgPopup);
  imgPopup.appendChild(image);
  srcImg.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      imgPopup.style.display = 'flex';
      image.src = this.href;
    });
  });
  imgPopup.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('img-popup')) {
      imgPopup.style.display = 'none';
    }
  });
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/postSlider.js":
/*!********************************!*\
  !*** ./js/parts/postSlider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function postSlider() {
  var currentSlide = 1,
      slider = document.querySelectorAll('.block__posts-slide'),
      buttonBack = document.querySelector('.arrows__back'),
      buttonForward = document.querySelector('.arrows__forward');
  slidesShow(currentSlide);

  function slidesShow(n) {
    if (n > slider.length) {
      currentSlide = 1;
    }

    if (n < 1) {
      currentSlide = slider.length;
    }

    slider.forEach(function (item) {
      return item.style.display = 'none';
    });
    slider[currentSlide - 1].style.display = 'flex';
  }

  function forwardSlider(n) {
    slidesShow(currentSlide += n);
  }

  function presentSlide(n) {
    slidesShow(currentSlide = n);
  }

  buttonBack.addEventListener('click', function () {
    forwardSlider(-1);
  });
  buttonForward.addEventListener('click', function () {
    forwardSlider(1);
  });
}

module.exports = postSlider;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.header__block'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var burger = __webpack_require__(/*! ./parts/burger.js */ "./js/parts/burger.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./js/parts/slider.js"),
      postSlider = __webpack_require__(/*! ./parts/postSlider.js */ "./js/parts/postSlider.js");

  burger();
  modal();
  slider();
  postSlider();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map