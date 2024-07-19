/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
function about () {
    const element = document.createElement('div');
    const contact = document.createElement('div');
    contact.classList.add('contact');

const title = document.createElement('h1');
title.classList.add('headline');
title.textContent = 'The Branch Restaurant';
contact.appendChild(title);

const number = document.createElement('p');
number.classList.add('info');
number.textContent = 'Phone number: +254 720030099';
number.appendChild(number);

const email = document.createElement('p');
email.classList.add('info');
email.textContent = 'Email : thebranchrestaurant99@gmail.com';
email.appendChild(email);

const location = document.createElement('p');
location.classList.add('info');
location.textContent = 'Location : 345 Kenyatta Avenue,Toers plaza first floor';
location.appendChild(location);

element.appendChild(contact);

const hours = document.createElement('h2');
hours.classList.add('hours');
hours.textContent = 'Hours';
element.appendChild(hours);

const schedule = document.createElement('ul');
const sunday = document.createElement('li');
sunday.textContent = 'Closed';
schedule.appendChild(sunday);
const monday = document.createElement('li');
monday.textContent = 'Monday: 6.00AM - 11.00PM';
schedule.appendChild(monday);
const tuesday = document.createElement('li');
tuesday.textContent = 'Tuesday: 6.00AM - 11.00PM';
schedule.appendChild(tuesday);
const wednesday = document.createElement('li');
wednesday.textContent = 'Wednesday: 6.00AM - 11.00PM';
schedule.appendChild(wednesday);
const thursday = document.createElement('li');
thursday.textContent = 'Thursday: 6.00AM - 11.00PM';
schedule.appendChild(thursday);
const friday = document.createElement('li');
friday.textContent = 'Friday: 6.00AM - 11.00PM';
schedule.appendChild(friday);
const saturday = document.createElement('li');
saturday.textContent = 'Saturday: 10.00AM - 9.00PM';
schedule.appendChild(saturday);
element.appendChild(schedule);

return element;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _homepage_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.jpeg */ "./src/homepage.jpeg");


function home (){
const element = document.createElement('div');
const imageContainer = document.createElement('div');
imageContainer.classList.add ('image-container');

const img = new Image()
img.src = _homepage_jpeg__WEBPACK_IMPORTED_MODULE_0__;
imageContainer.appendChild(img);

const imgcaption = document.createElement('p');
imgcaption.classList.add('imgcaption');
imgcaption.textContent ='Photo by ';
const photographer = document.createElement('a');
photographer.href = "https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  photographer.textContent = "Jay Wennington";
  imgcaption.appendChild(photographer);
  imgcaption.insertAdjacentText('beforeend', " on ");
  const unsplash = document.createElement('a');
  unsplash.href = "https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  unsplash.textContent = 'UnSplash';
  imgcaption.appendChild(unsplash);
  imageContainer.appendChild(imgcaption);

element.appendChild(imageContainer);

const headline = document.createElement('h1');
headline.textContent = 'Come have mouthwatering delicacies!';
headline.classList.add('headline');
element.appendChild(headline);

const info = document.createElement('p');
info.classList.add('info');
info.textContent = 'Our cozy restaurant provides a fine dining experience at unbeatable prices. Experience our exquisite menu with the whole family! Healthy and delicious, serving lunch and dinner 6 days per week.'
element.appendChild(info);

const hours = document.createElement('h2');
hours.classList.add('hours');
hours.textContent = 'Hours';
element.appendChild(hours);

const schedule = document.createElement('ul');
const sunday = document.createElement('li');
sunday.textContent = 'Closed';
schedule.appendChild(sunday);
const monday = document.createElement('li');
monday.textContent = 'Monday: 6.00AM - 11.00PM';
schedule.appendChild(monday);
const tuesday = document.createElement('li');
tuesday.textContent = 'Tuesday: 6.00AM - 11.00PM';
schedule.appendChild(tuesday);
const wednesday = document.createElement('li');
wednesday.textContent = 'Wednesday: 6.00AM - 11.00PM';
schedule.appendChild(wednesday);
const thursday = document.createElement('li');
thursday.textContent = 'Thursday: 6.00AM - 11.00PM';
schedule.appendChild(thursday);
const friday = document.createElement('li');
friday.textContent = 'Friday: 6.00AM - 11.00PM';
schedule.appendChild(friday);
const saturday = document.createElement('li');
saturday.textContent = 'Saturday: 10.00AM - 9.00PM';
schedule.appendChild(saturday);
element.appendChild(schedule);

return element;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu () {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-div');
    function menuCard(name, description, price) {
      const card = document.createElement('div');
      card.classList.add('menu-card');
  
      const title = document.createElement('h1');
      title.textContent = name;
      title.classList.add('name');
      card.appendChild(title);
  
      const cardContent = document.createElement('p');
      cardContent.textContent = description;
      cardContent.classList.add('description');
      card.appendChild(cardContent);
  
      const cost = document.createElement('p');
      cost.textContent = price;
      cost.classList.add('price');
      card.appendChild(cost);
  
      return card;
    }
    const risotto = menuCard('Risotto', 'A rich and creamy rice dish cooked in chicken broth. Contains dairy', '$20.00');
    const pozole = menuCard('Pozole Verde', 'Our favorite healthy and hearty Mexican stew, filled with bold flavors and green chile, chicken, and hominy', '$17.00');
    const shortrib = menuCard('Short Ribs', 'Tender cooked ribs in a delicious, rich sauce, served over creamy mashed potatoes. All cooked in just one pot!', '$22.00');
    const beet = menuCard('Beet Salad', 'Reset with this healthy superfood salad featuring raw beets, carrot, quinoa, spinach, edamame and avocado. It\'s as colorful as it is nutritious!', '$15.00');
    const ratatouille = menuCard('Ratatouille', 'Ripe summer tomatoes, zucchini, eggplant, and bell pepper in a delicious version of the classic French vegetable stew.', '$17.00');
    menuContainer.appendChild(risotto);
    menuContainer.appendChild(pozole); 
    menuContainer.appendChild(shortrib);
  menuContainer.appendChild(beet);
  menuContainer.appendChild(ratatouille);
  
  return menuContainer;
} 


/***/ }),

/***/ "./src/homepage.jpeg":
/*!***************************!*\
  !*** ./src/homepage.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1280d0465df4eec29b66.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");





function index() {
    const homeButton = document.querySelector('#home');
    const aboutButton = document.querySelector('#about');
    const menuButton = document.querySelector('#menu');

    function homecontent () {
        console.log('home');
        menuButton.classList.remove('tab');
  aboutButton.classList.remove('tab');
  homeButton.classList.add('tab');
  const content = document.querySelector('#content');
  content.textContent = ''
  const homect = (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  content.appendChild(homect);
}
function menucontent() {
    console.log('menu');
    homeButton.classList.remove('tab');
    aboutButton.classList.remove('tab');
    menuButton.classList.add('tab');
    const content = document.querySelector('#content');
    content.textContent = '';
    const menuct = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    content.appendChild(menuct);
  }
  
  function aboutcontent() {
    console.log('about');
    homeButton.classList.remove('tab');
    menuButton.classList.remove('tab');
    aboutButton.classList.add('tab');
    const content = document.querySelector('#content');
    content.textContent = ''
    const aboutct = (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
    content.appendChild(aboutct);
  }
  
  homeButton.addEventListener("click", function() {homecontent()});
  menuButton.addEventListener("click", function() {menucontent()});
  aboutButton.addEventListener("click", function() {aboutcontent()});
  
  homecontent();
  }
  index();   



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwyQ0FBSztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJpQztBQUNQO0FBQ0E7QUFDRTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFLG1EQUFtRCxjQUFjO0FBQ2pFLG9EQUFvRCxlQUFlO0FBQ25FO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQgKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XG50aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgQnJhbmNoIFJlc3RhdXJhbnQnO1xuY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm51bWJlci5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5udW1iZXIudGV4dENvbnRlbnQgPSAnUGhvbmUgbnVtYmVyOiArMjU0IDcyMDAzMDA5OSc7XG5udW1iZXIuYXBwZW5kQ2hpbGQobnVtYmVyKTtcblxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5lbWFpbC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5lbWFpbC50ZXh0Q29udGVudCA9ICdFbWFpbCA6IHRoZWJyYW5jaHJlc3RhdXJhbnQ5OUBnbWFpbC5jb20nO1xuZW1haWwuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbmxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uIDogMzQ1IEtlbnlhdHRhIEF2ZW51ZSxUb2VycyBwbGF6YSBmaXJzdCBmbG9vcic7XG5sb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbmNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5ob3Vycy50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5lbGVtZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29uc3Qgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnN1bmRheS50ZXh0Q29udGVudCA9ICdDbG9zZWQnO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbmNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5tb25kYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5OiA2LjAwQU0gLSAxMS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKG1vbmRheSk7XG5jb25zdCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnR1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbmNvbnN0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG53ZWRuZXNkYXkudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA2LjAwQU0gLSAxMS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG5jb25zdCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG50aHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG5jb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuZnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZChmcmlkYXkpO1xuY29uc3Qgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuc2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEwLjAwQU0gLSA5LjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuZWxlbWVudC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG5cbnJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IGltYWdlIGZyb20gJy4vaG9tZXBhZ2UuanBlZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUgKCl7XG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCAoJ2ltYWdlLWNvbnRhaW5lcicpO1xuXG5jb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuaW1nLnNyYyA9IGltYWdlO1xuaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuY29uc3QgaW1nY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmltZ2NhcHRpb24uY2xhc3NMaXN0LmFkZCgnaW1nY2FwdGlvbicpO1xuaW1nY2FwdGlvbi50ZXh0Q29udGVudCA9J1Bob3RvIGJ5ICc7XG5jb25zdCBwaG90b2dyYXBoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5waG90b2dyYXBoZXIuaHJlZiA9IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpheXdlbm5pbmd0b24/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCI7XG4gIHBob3RvZ3JhcGhlci50ZXh0Q29udGVudCA9IFwiSmF5IFdlbm5pbmd0b25cIjtcbiAgaW1nY2FwdGlvbi5hcHBlbmRDaGlsZChwaG90b2dyYXBoZXIpO1xuICBpbWdjYXB0aW9uLmluc2VydEFkamFjZW50VGV4dCgnYmVmb3JlZW5kJywgXCIgb24gXCIpO1xuICBjb25zdCB1bnNwbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdW5zcGxhc2guaHJlZiA9IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2Rpc2gtb24td2hpdGUtY2VyYW1pYy1wbGF0ZS1OX1k4OFRXbUd3QT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIjtcbiAgdW5zcGxhc2gudGV4dENvbnRlbnQgPSAnVW5TcGxhc2gnO1xuICBpbWdjYXB0aW9uLmFwcGVuZENoaWxkKHVuc3BsYXNoKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nY2FwdGlvbik7XG5cbmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG5jb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oZWFkbGluZS50ZXh0Q29udGVudCA9ICdDb21lIGhhdmUgbW91dGh3YXRlcmluZyBkZWxpY2FjaWVzISc7XG5oZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xuZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbmNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5pbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbmluZm8udGV4dENvbnRlbnQgPSAnT3VyIGNvenkgcmVzdGF1cmFudCBwcm92aWRlcyBhIGZpbmUgZGluaW5nIGV4cGVyaWVuY2UgYXQgdW5iZWF0YWJsZSBwcmljZXMuIEV4cGVyaWVuY2Ugb3VyIGV4cXVpc2l0ZSBtZW51IHdpdGggdGhlIHdob2xlIGZhbWlseSEgSGVhbHRoeSBhbmQgZGVsaWNpb3VzLCBzZXJ2aW5nIGx1bmNoIGFuZCBkaW5uZXIgNiBkYXlzIHBlciB3ZWVrLidcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbmNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5ob3Vycy50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5lbGVtZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29uc3Qgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnN1bmRheS50ZXh0Q29udGVudCA9ICdDbG9zZWQnO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbmNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5tb25kYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5OiA2LjAwQU0gLSAxMS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKG1vbmRheSk7XG5jb25zdCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnR1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbmNvbnN0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG53ZWRuZXNkYXkudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA2LjAwQU0gLSAxMS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG5jb25zdCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG50aHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG5jb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuZnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZChmcmlkYXkpO1xuY29uc3Qgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuc2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEwLjAwQU0gLSA5LjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuZWxlbWVudC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG5cbnJldHVybiBlbGVtZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUgKCkge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGl2Jyk7XG4gICAgZnVuY3Rpb24gbWVudUNhcmQobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuICBcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY2FyZENvbnRlbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgXG4gICAgICBjb25zdCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29zdC50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgICAgY29zdC5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb3N0KTtcbiAgXG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG4gICAgY29uc3Qgcmlzb3R0byA9IG1lbnVDYXJkKCdSaXNvdHRvJywgJ0EgcmljaCBhbmQgY3JlYW15IHJpY2UgZGlzaCBjb29rZWQgaW4gY2hpY2tlbiBicm90aC4gQ29udGFpbnMgZGFpcnknLCAnJDIwLjAwJyk7XG4gICAgY29uc3QgcG96b2xlID0gbWVudUNhcmQoJ1Bvem9sZSBWZXJkZScsICdPdXIgZmF2b3JpdGUgaGVhbHRoeSBhbmQgaGVhcnR5IE1leGljYW4gc3RldywgZmlsbGVkIHdpdGggYm9sZCBmbGF2b3JzIGFuZCBncmVlbiBjaGlsZSwgY2hpY2tlbiwgYW5kIGhvbWlueScsICckMTcuMDAnKTtcbiAgICBjb25zdCBzaG9ydHJpYiA9IG1lbnVDYXJkKCdTaG9ydCBSaWJzJywgJ1RlbmRlciBjb29rZWQgcmlicyBpbiBhIGRlbGljaW91cywgcmljaCBzYXVjZSwgc2VydmVkIG92ZXIgY3JlYW15IG1hc2hlZCBwb3RhdG9lcy4gQWxsIGNvb2tlZCBpbiBqdXN0IG9uZSBwb3QhJywgJyQyMi4wMCcpO1xuICAgIGNvbnN0IGJlZXQgPSBtZW51Q2FyZCgnQmVldCBTYWxhZCcsICdSZXNldCB3aXRoIHRoaXMgaGVhbHRoeSBzdXBlcmZvb2Qgc2FsYWQgZmVhdHVyaW5nIHJhdyBiZWV0cywgY2Fycm90LCBxdWlub2EsIHNwaW5hY2gsIGVkYW1hbWUgYW5kIGF2b2NhZG8uIEl0XFwncyBhcyBjb2xvcmZ1bCBhcyBpdCBpcyBudXRyaXRpb3VzIScsICckMTUuMDAnKTtcbiAgICBjb25zdCByYXRhdG91aWxsZSA9IG1lbnVDYXJkKCdSYXRhdG91aWxsZScsICdSaXBlIHN1bW1lciB0b21hdG9lcywgenVjY2hpbmksIGVnZ3BsYW50LCBhbmQgYmVsbCBwZXBwZXIgaW4gYSBkZWxpY2lvdXMgdmVyc2lvbiBvZiB0aGUgY2xhc3NpYyBGcmVuY2ggdmVnZXRhYmxlIHN0ZXcuJywgJyQxNy4wMCcpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlzb3R0byk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3pvbGUpOyBcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNob3J0cmliKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChiZWV0KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChyYXRhdG91aWxsZSk7XG4gIFxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn0gXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc2hlZXQgZnJvbSAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG4gICAgZnVuY3Rpb24gaG9tZWNvbnRlbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZScpO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYicpO1xuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICBjb25zdCBob21lY3QgPSBob21lKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZWN0KTtcbn1cbmZ1bmN0aW9uIG1lbnVjb250ZW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBtZW51Y3QgPSBtZW51KCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Y3QpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBhYm91dGNvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2Fib3V0Jyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYicpO1xuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnN0IGFib3V0Y3QgPSBhYm91dCgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRjdCk7XG4gIH1cbiAgXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge2hvbWVjb250ZW50KCl9KTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7bWVudWNvbnRlbnQoKX0pO1xuICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7YWJvdXRjb250ZW50KCl9KTtcbiAgXG4gIGhvbWVjb250ZW50KCk7XG4gIH1cbiAgaW5kZXgoKTsgICBcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=