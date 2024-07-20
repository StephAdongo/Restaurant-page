"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
function about() {
  var element = document.createElement('div');
  var contact = document.createElement('div');
  contact.classList.add('contact');
  var title = document.createElement('h1');
  title.classList.add('headline');
  title.textContent = 'The Branch Restaurant';
  contact.appendChild(title);
  var number = document.createElement('p');
  number.classList.add('info');
  number.textContent = 'Phone number: +254 720030099';
  number.appendChild(number);
  var email = document.createElement('p');
  email.classList.add('info');
  email.textContent = 'Email : thebranchrestaurant99@gmail.com';
  email.appendChild(email);
  var location = document.createElement('p');
  location.classList.add('info');
  location.textContent = 'Location : 345 Kenyatta Avenue,Toers plaza first floor';
  location.appendChild(location);
  element.appendChild(contact);
  var hours = document.createElement('h2');
  hours.classList.add('hours');
  hours.textContent = 'Hours';
  element.appendChild(hours);
  var schedule = document.createElement('ul');
  var sunday = document.createElement('li');
  sunday.textContent = 'Closed';
  schedule.appendChild(sunday);
  var monday = document.createElement('li');
  monday.textContent = 'Monday: 6.00AM - 11.00PM';
  schedule.appendChild(monday);
  var tuesday = document.createElement('li');
  tuesday.textContent = 'Tuesday: 6.00AM - 11.00PM';
  schedule.appendChild(tuesday);
  var wednesday = document.createElement('li');
  wednesday.textContent = 'Wednesday: 6.00AM - 11.00PM';
  schedule.appendChild(wednesday);
  var thursday = document.createElement('li');
  thursday.textContent = 'Thursday: 6.00AM - 11.00PM';
  schedule.appendChild(thursday);
  var friday = document.createElement('li');
  friday.textContent = 'Friday: 6.00AM - 11.00PM';
  schedule.appendChild(friday);
  var saturday = document.createElement('li');
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

function home() {
  var element = document.createElement('div');
  var imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  var img = new Image();
  img.src = _homepage_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  imageContainer.appendChild(img);
  var imgcaption = document.createElement('p');
  imgcaption.classList.add('imgcaption');
  imgcaption.textContent = 'Photo by ';
  var photographer = document.createElement('a');
  photographer.href = "https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  photographer.textContent = "Jay Wennington";
  imgcaption.appendChild(photographer);
  imgcaption.insertAdjacentText('beforeend', " on ");
  var unsplash = document.createElement('a');
  unsplash.href = "https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  unsplash.textContent = 'UnSplash';
  imgcaption.appendChild(unsplash);
  imageContainer.appendChild(imgcaption);
  element.appendChild(imageContainer);
  var headline = document.createElement('h1');
  headline.textContent = 'Come have mouthwatering delicacies!';
  headline.classList.add('headline');
  element.appendChild(headline);
  var info = document.createElement('p');
  info.classList.add('info');
  info.textContent = 'Our cozy restaurant provides a fine dining experience at unbeatable prices. Experience our exquisite menu with the whole family! Healthy and delicious, serving lunch and dinner 6 days per week.';
  element.appendChild(info);
  var hours = document.createElement('h2');
  hours.classList.add('hours');
  hours.textContent = 'Hours';
  element.appendChild(hours);
  var schedule = document.createElement('ul');
  var sunday = document.createElement('li');
  sunday.textContent = 'Closed';
  schedule.appendChild(sunday);
  var monday = document.createElement('li');
  monday.textContent = 'Monday: 6.00AM - 11.00PM';
  schedule.appendChild(monday);
  var tuesday = document.createElement('li');
  tuesday.textContent = 'Tuesday: 6.00AM - 11.00PM';
  schedule.appendChild(tuesday);
  var wednesday = document.createElement('li');
  wednesday.textContent = 'Wednesday: 6.00AM - 11.00PM';
  schedule.appendChild(wednesday);
  var thursday = document.createElement('li');
  thursday.textContent = 'Thursday: 6.00AM - 11.00PM';
  schedule.appendChild(thursday);
  var friday = document.createElement('li');
  friday.textContent = 'Friday: 6.00AM - 11.00PM';
  schedule.appendChild(friday);
  var saturday = document.createElement('li');
  saturday.textContent = 'Saturday: 10.00AM - 9.00PM';
  schedule.appendChild(saturday);
  element.appendChild(schedule);
  return element;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");




function index() {
  var homeButton = document.querySelector('#home');
  var menuButton = document.querySelector('#menu');
  var aboutButton = document.querySelector('#about');
  function homecontent() {
    console.log('home');
    menuButton.classList.remove('tab');
    aboutButton.classList.remove('tab');
    homeButton.classList.add('tab');
    var content = document.querySelector('#content');
    content.textContent = '';
    var homect = (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    content.appendChild(homect);
  }
  function menucontent() {
    console.log('menu');
    homeButton.classList.remove('tab');
    aboutButton.classList.remove('tab');
    menuButton.classList.add('tab');
    var content = document.querySelector('#content');
    content.textContent = '';
    var menuct = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    content.appendChild(menuct);
  }
  function aboutcontent() {
    console.log('about');
    homeButton.classList.remove('tab');
    menuButton.classList.remove('tab');
    aboutButton.classList.add('tab');
    var content = document.querySelector('#content');
    content.textContent = '';
    var aboutct = (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
    content.appendChild(aboutct);
  }
  homeButton.addEventListener("click", function () {
    homecontent();
  });
  menuButton.addEventListener("click", function () {
    menucontent();
  });
  aboutButton.addEventListener("click", function () {
    aboutcontent();
  });
  homecontent();
}
index();

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
function menu() {
  var menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-div');
  function menuCard(name, description, price) {
    var card = document.createElement('div');
    card.classList.add('menu-card');
    var title = document.createElement('h1');
    title.textContent = name;
    title.classList.add('name');
    card.appendChild(title);
    var cardContent = document.createElement('p');
    cardContent.textContent = description;
    cardContent.classList.add('description');
    card.appendChild(cardContent);
    var cost = document.createElement('p');
    cost.textContent = price;
    cost.classList.add('price');
    card.appendChild(cost);
    return card;
  }
  var risotto = menuCard('Risotto', 'A rich and creamy rice dish cooked in chicken broth. Contains dairy', '$20.00');
  var pozole = menuCard('Pozole Verde', 'Our favorite healthy and hearty Mexican stew, filled with bold flavors and green chile, chicken, and hominy', '$17.00');
  var shortrib = menuCard('Short Ribs', 'Tender cooked ribs in a delicious, rich sauce, served over creamy mashed potatoes. All cooked in just one pot!', '$22.00');
  var beet = menuCard('Beet Salad', 'Reset with this healthy superfood salad featuring raw beets, carrot, quinoa, spinach, edamame and avocado. It\'s as colorful as it is nutritious!', '$15.00');
  var ratatouille = menuCard('Ratatouille', 'Ripe summer tomatoes, zucchini, eggplant, and bell pepper in a delicious version of the classic French vegetable stew.', '$17.00');
  menuContainer.appendChild(risotto);
  menuContainer.appendChild(pozole);
  menuContainer.appendChild(shortrib);
  menuContainer.appendChild(beet);
  menuContainer.appendChild(ratatouille);
  return menuContainer;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./koi.png */ "./src/koi.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --olive: rgb(204, 232, 136);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  header {
    background-color: var(--olive);
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 10px 10px gray;
  }
  footer{
    background-color: var(--olive);
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .nav-button {
    padding: 5px;
    border-radius: 5px;
    font-family: inherit;
    background-color: rgb(64, 36, 164);
    color: antiquewhite;
  }
  .tab {
    background-color: aqua;
    color: black;
    border: 3px inset aqua;
  }
  
  #content {
    margin-top: 48px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: repeat;
    background-size: 500px auto;
    background-attachment: fixed;
    flex: 1;
    display: flex;
    justify-content: center;
  }
  #content > div {
    width: 70%;
    background-color: bisque;
    border-radius: 10px;
    padding-bottom: 30px;
  }
  .img-container > img {
    width: 100%;
    height: auto;
  }
  .imgcaption {
    text-align: center;
  }
  
  .headline {
    font-weight: 800px;
    font-style: italic;
    margin: 20px;
  }
  
  .info {
    margin: 20px;
  }
  .hours {
    font-size: large;
    margin: 20px;
    margin-bottom: 10px;
  }
  
  ul {
    margin: 20px;
    margin-top: 10px;
    list-style: none;
  }
  
  ul li {
    margin-bottom: 7px;
  }
  
  .menu-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-card {
    width: 70%;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 1px 1px 1px lightgray;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr;
  }
  .name {
    grid-column: 1/3;
    padding: 15px;
  }
  .description {
    padding: 15px;
  }
  .price {
    text-align: end;
    padding: 15px;
    font-size: 18px;
    font-weight: 800;
  }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,2BAA2B;IAC3B,qGAAqG;EACvG;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,aAAa;EACf;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,aAAa;EACf;EACA;IACE,8BAA8B;IAC9B,eAAe;IACf,MAAM;IACN,WAAW;IACX,4BAA4B;EAC9B;EACA;IACE,8BAA8B;IAC9B,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,kCAAkC;IAClC,mBAAmB;EACrB;EACA;IACE,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;IAChB,yDAAgC;IAChC,yBAAyB;IACzB,2BAA2B;IAC3B,4BAA4B;IAC5B,OAAO;IACP,aAAa;IACb,uBAAuB;EACzB;EACA;IACE,UAAU;IACV,wBAAwB;IACxB,mBAAmB;IACnB,oBAAoB;EACtB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;IACf,aAAa;IACb,eAAe;IACf,gBAAgB;EAClB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --olive: rgb(204, 232, 136);\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n  header nav {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n  }\n  header {\n    background-color: var(--olive);\n    position: fixed;\n    top: 0;\n    width: 100%;\n    box-shadow: 0 10px 10px gray;\n  }\n  footer{\n    background-color: var(--olive);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .nav-button {\n    padding: 5px;\n    border-radius: 5px;\n    font-family: inherit;\n    background-color: rgb(64, 36, 164);\n    color: antiquewhite;\n  }\n  .tab {\n    background-color: aqua;\n    color: black;\n    border: 3px inset aqua;\n  }\n  \n  #content {\n    margin-top: 48px;\n    background-image: url(./koi.png);\n    background-repeat: repeat;\n    background-size: 500px auto;\n    background-attachment: fixed;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n  }\n  #content > div {\n    width: 70%;\n    background-color: bisque;\n    border-radius: 10px;\n    padding-bottom: 30px;\n  }\n  .img-container > img {\n    width: 100%;\n    height: auto;\n  }\n  .imgcaption {\n    text-align: center;\n  }\n  \n  .headline {\n    font-weight: 800px;\n    font-style: italic;\n    margin: 20px;\n  }\n  \n  .info {\n    margin: 20px;\n  }\n  .hours {\n    font-size: large;\n    margin: 20px;\n    margin-bottom: 10px;\n  }\n  \n  ul {\n    margin: 20px;\n    margin-top: 10px;\n    list-style: none;\n  }\n  \n  ul li {\n    margin-bottom: 7px;\n  }\n  \n  .menu-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .menu-card {\n    width: 70%;\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    margin: 20px;\n    box-shadow: 1px 1px 1px lightgray;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-template-columns: auto 1fr;\n  }\n  .name {\n    grid-column: 1/3;\n    padding: 15px;\n  }\n  .description {\n    padding: 15px;\n  }\n  .price {\n    text-align: end;\n    padding: 15px;\n    font-size: 18px;\n    font-weight: 800;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage.jpeg":
/*!***************************!*\
  !*** ./src/homepage.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1280d0465df4eec29b66.jpeg";

/***/ }),

/***/ "./src/koi.png":
/*!*********************!*\
  !*** ./src/koi.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9d9d3d6f0e7d14acff9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0ICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xudGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJyYW5jaCBSZXN0YXVyYW50JztcbmNvbnRhY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5jb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5udW1iZXIuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xubnVtYmVyLnRleHRDb250ZW50ID0gJ1Bob25lIG51bWJlcjogKzI1NCA3MjAwMzAwOTknO1xubnVtYmVyLmFwcGVuZENoaWxkKG51bWJlcik7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZW1haWwuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuZW1haWwudGV4dENvbnRlbnQgPSAnRW1haWwgOiB0aGVicmFuY2hyZXN0YXVyYW50OTlAZ21haWwuY29tJztcbmVtYWlsLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5sb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbiA6IDM0NSBLZW55YXR0YSBBdmVudWUsVG9lcnMgcGxhemEgZmlyc3QgZmxvb3InO1xubG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG5jb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuZWxlbWVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbmNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5zdW5kYXkudGV4dENvbnRlbnQgPSAnQ2xvc2VkJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHN1bmRheSk7XG5jb25zdCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xubW9uZGF5LnRleHRDb250ZW50ID0gJ01vbmRheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZChtb25kYXkpO1xuY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG50dWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG5jb25zdCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xud2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuY29uc3QgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xudGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuY29uc3QgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmZyaWRheS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbmNvbnN0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnNhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiAxMC4wMEFNIC0gOS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG5yZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCBpbWFnZSBmcm9tICcuL2hvbWVwYWdlLmpwZWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lICgpe1xuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQgKCdpbWFnZS1jb250YWluZXInKTtcblxuY29uc3QgaW1nID0gbmV3IEltYWdlKClcbmltZy5zcmMgPSBpbWFnZTtcbmltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbmNvbnN0IGltZ2NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5pbWdjYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltZ2NhcHRpb24nKTtcbmltZ2NhcHRpb24udGV4dENvbnRlbnQgPSdQaG90byBieSAnO1xuY29uc3QgcGhvdG9ncmFwaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xucGhvdG9ncmFwaGVyLmhyZWYgPSBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BqYXl3ZW5uaW5ndG9uP3V0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0JnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT11bnNwbGFzaFwiO1xuICBwaG90b2dyYXBoZXIudGV4dENvbnRlbnQgPSBcIkpheSBXZW5uaW5ndG9uXCI7XG4gIGltZ2NhcHRpb24uYXBwZW5kQ2hpbGQocGhvdG9ncmFwaGVyKTtcbiAgaW1nY2FwdGlvbi5pbnNlcnRBZGphY2VudFRleHQoJ2JlZm9yZWVuZCcsIFwiIG9uIFwiKTtcbiAgY29uc3QgdW5zcGxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHVuc3BsYXNoLmhyZWYgPSBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9kaXNoLW9uLXdoaXRlLWNlcmFtaWMtcGxhdGUtTl9ZODhUV21Hd0E/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCI7XG4gIHVuc3BsYXNoLnRleHRDb250ZW50ID0gJ1VuU3BsYXNoJztcbiAgaW1nY2FwdGlvbi5hcHBlbmRDaGlsZCh1bnNwbGFzaCk7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ2NhcHRpb24pO1xuXG5lbGVtZW50LmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQ29tZSBoYXZlIG1vdXRod2F0ZXJpbmcgZGVsaWNhY2llcyEnO1xuaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG5jb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5pbmZvLnRleHRDb250ZW50ID0gJ091ciBjb3p5IHJlc3RhdXJhbnQgcHJvdmlkZXMgYSBmaW5lIGRpbmluZyBleHBlcmllbmNlIGF0IHVuYmVhdGFibGUgcHJpY2VzLiBFeHBlcmllbmNlIG91ciBleHF1aXNpdGUgbWVudSB3aXRoIHRoZSB3aG9sZSBmYW1pbHkhIEhlYWx0aHkgYW5kIGRlbGljaW91cywgc2VydmluZyBsdW5jaCBhbmQgZGlubmVyIDYgZGF5cyBwZXIgd2Vlay4nXG5lbGVtZW50LmFwcGVuZENoaWxkKGluZm8pO1xuXG5jb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuZWxlbWVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbmNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5zdW5kYXkudGV4dENvbnRlbnQgPSAnQ2xvc2VkJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHN1bmRheSk7XG5jb25zdCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xubW9uZGF5LnRleHRDb250ZW50ID0gJ01vbmRheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZChtb25kYXkpO1xuY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG50dWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG5jb25zdCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xud2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogNi4wMEFNIC0gMTEuMDBQTSc7XG5zY2hlZHVsZS5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuY29uc3QgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xudGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuY29uc3QgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmZyaWRheS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDYuMDBBTSAtIDExLjAwUE0nO1xuc2NoZWR1bGUuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbmNvbnN0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnNhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiAxMC4wMEFNIC0gOS4wMFBNJztcbnNjaGVkdWxlLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG5yZXR1cm4gZWxlbWVudDtcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgIGhvbWUgIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuXG5mdW5jdGlvbiBob21lY29udGVudCgpIHtcbiAgY29uc29sZS5sb2coJ2hvbWUnKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndGFiJyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJydcbiAgY29uc3QgaG9tZWN0ID0gaG9tZSgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVjb250ZW50KCkge1xuICBjb25zb2xlLmxvZygnbWVudScpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYicpO1xuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0YWInKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgbWVudWN0ID0gbWVudSgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVjdCk7XG59XG5cbmZ1bmN0aW9uIGFib3V0Y29udGVudCgpIHtcbiAgY29uc29sZS5sb2coJ2Fib3V0Jyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndGFiJyk7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndGFiJyk7XG4gIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gIGNvbnN0IGFib3V0Y3QgPSBhYm91dCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Y3QpO1xufVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtob21lY29udGVudCgpfSk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHttZW51Y29udGVudCgpfSk7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7YWJvdXRjb250ZW50KCl9KTtcblxuaG9tZWNvbnRlbnQoKTtcbn1cbmluZGV4KCk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSAoKSB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcbiAgICBmdW5jdGlvbiBtZW51Q2FyZChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG4gIFxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIFxuICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjYXJkQ29udGVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICBcbiAgICAgIGNvbnN0IGNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb3N0LnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICBjb3N0LmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNvc3QpO1xuICBcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICBjb25zdCByaXNvdHRvID0gbWVudUNhcmQoJ1Jpc290dG8nLCAnQSByaWNoIGFuZCBjcmVhbXkgcmljZSBkaXNoIGNvb2tlZCBpbiBjaGlja2VuIGJyb3RoLiBDb250YWlucyBkYWlyeScsICckMjAuMDAnKTtcbiAgICBjb25zdCBwb3pvbGUgPSBtZW51Q2FyZCgnUG96b2xlIFZlcmRlJywgJ091ciBmYXZvcml0ZSBoZWFsdGh5IGFuZCBoZWFydHkgTWV4aWNhbiBzdGV3LCBmaWxsZWQgd2l0aCBib2xkIGZsYXZvcnMgYW5kIGdyZWVuIGNoaWxlLCBjaGlja2VuLCBhbmQgaG9taW55JywgJyQxNy4wMCcpO1xuICAgIGNvbnN0IHNob3J0cmliID0gbWVudUNhcmQoJ1Nob3J0IFJpYnMnLCAnVGVuZGVyIGNvb2tlZCByaWJzIGluIGEgZGVsaWNpb3VzLCByaWNoIHNhdWNlLCBzZXJ2ZWQgb3ZlciBjcmVhbXkgbWFzaGVkIHBvdGF0b2VzLiBBbGwgY29va2VkIGluIGp1c3Qgb25lIHBvdCEnLCAnJDIyLjAwJyk7XG4gICAgY29uc3QgYmVldCA9IG1lbnVDYXJkKCdCZWV0IFNhbGFkJywgJ1Jlc2V0IHdpdGggdGhpcyBoZWFsdGh5IHN1cGVyZm9vZCBzYWxhZCBmZWF0dXJpbmcgcmF3IGJlZXRzLCBjYXJyb3QsIHF1aW5vYSwgc3BpbmFjaCwgZWRhbWFtZSBhbmQgYXZvY2Fkby4gSXRcXCdzIGFzIGNvbG9yZnVsIGFzIGl0IGlzIG51dHJpdGlvdXMhJywgJyQxNS4wMCcpO1xuICAgIGNvbnN0IHJhdGF0b3VpbGxlID0gbWVudUNhcmQoJ1JhdGF0b3VpbGxlJywgJ1JpcGUgc3VtbWVyIHRvbWF0b2VzLCB6dWNjaGluaSwgZWdncGxhbnQsIGFuZCBiZWxsIHBlcHBlciBpbiBhIGRlbGljaW91cyB2ZXJzaW9uIG9mIHRoZSBjbGFzc2ljIEZyZW5jaCB2ZWdldGFibGUgc3Rldy4nLCAnJDE3LjAwJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXNvdHRvKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBvem9sZSk7IFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvcnRyaWIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGJlZXQpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHJhdGF0b3VpbGxlKTtcbiAgXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufSBcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2tvaS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1vbGl2ZTogcmdiKDIwNCwgMjMyLCAxMzYpO1xuICAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWYgO1xuICB9XG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIGhlYWRlciBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGl2ZSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTBweCBncmF5O1xuICB9XG4gIGZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGl2ZSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5hdi1idXR0b24ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAzNiwgMTY0KTtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICB9XG4gIC50YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogM3B4IGluc2V0IGFxdWE7XG4gIH1cbiAgXG4gICNjb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAjY29udGVudCA+IGRpdiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuaW1nLWNvbnRhaW5lciA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5pbWdjYXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5oZWFkbGluZSB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgXG4gIC5pbmZvIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLmhvdXJzIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICB1bCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgdWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICBcbiAgLm1lbnUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubWVudS1jYXJkIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICB9XG4gIC5uYW1lIHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5wcmljZSB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHFHQUFxRztFQUN2RztFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5REFBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tb2xpdmU6IHJnYigyMDQsIDIzMiwgMTM2KTtcXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZiA7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGl2ZSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggZ3JheTtcXG4gIH1cXG4gIGZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xpdmUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5uYXYtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDM2LCAxNjQpO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgfVxcbiAgLnRhYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAzcHggaW5zZXQgYXF1YTtcXG4gIH1cXG4gIFxcbiAgI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9rb2kucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MDBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gICNjb250ZW50ID4gZGl2IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5pbWdjYXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZGxpbmUge1xcbiAgICBmb250LXdlaWdodDogODAwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuaW5mbyB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gIH1cXG4gIC5ob3VycyB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgdWwge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIHVsIGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgfVxcbiAgXFxuICAubWVudS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1lbnUtY2FyZCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIH1cXG4gIC5uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICAucHJpY2Uge1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJhYm91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwibnVtYmVyIiwiZW1haWwiLCJsb2NhdGlvbiIsImhvdXJzIiwic2NoZWR1bGUiLCJzdW5kYXkiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsImltYWdlIiwiaG9tZSIsImltYWdlQ29udGFpbmVyIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJpbWdjYXB0aW9uIiwicGhvdG9ncmFwaGVyIiwiaHJlZiIsImluc2VydEFkamFjZW50VGV4dCIsInVuc3BsYXNoIiwiaGVhZGxpbmUiLCJpbmZvIiwibWVudSIsImluZGV4IiwiaG9tZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51QnV0dG9uIiwiYWJvdXRCdXR0b24iLCJob21lY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJjb250ZW50IiwiaG9tZWN0IiwibWVudWNvbnRlbnQiLCJtZW51Y3QiLCJhYm91dGNvbnRlbnQiLCJhYm91dGN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVDb250YWluZXIiLCJtZW51Q2FyZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY2FyZCIsImNhcmRDb250ZW50IiwiY29zdCIsInJpc290dG8iLCJwb3pvbGUiLCJzaG9ydHJpYiIsImJlZXQiLCJyYXRhdG91aWxsZSJdLCJzb3VyY2VSb290IjoiIn0=