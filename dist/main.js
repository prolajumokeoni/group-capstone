/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Space+Mono:ital,wght@1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  /* background-color: #000a24; */\n  color: #000a24;\n  font-family: 'Lato', sans-serif;\nbackground-image: linear-gradient(315deg, #537895 0%, #09203f 74%);\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(21 21 21 / 85%);\n  width: 100%;\n  height: 100vh;\n  z-index: 20;\n  backdrop-filter: blur(5px);\n  overflow-y: hidden;\n}\n\n.popup-container {\n  position: fixed;\n  border-radius: 15px;\n  left: calc(50% - 250px);\n  height: 85%;\n  margin-top: 60px;\n  padding: 25px;\n  background-color: rgb(235, 235, 235);\n  z-index: 20;\n  overflow-y: auto;\n}\n\n.inner-content, .comment-create {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\ninput[name=\"username\"], textarea[name=\"insights\"] {\n  margin-bottom: 20px;\n}\n\n.photo-close img {\n  width: 300px;\n  height: 300px;\n  border-radius: 15px;\n  margin-bottom: 15px;\n}\n\n.fixed-top {\n  z-index: 20;\n}\n\n.photo-close span {\n  margin: -20px;\n  position: absolute;\n  right: 30px;\n}\n\n.btn-add-comment {\n  margin: 20px 0;\n  align-self: flex-end;\n}\n\n.movies-display {\n  margin-top: 60px;\n}\n\n.footer-z {\n  z-index: 19;\n}\n\nfooter, .footer-margin {\n  margin-bottom: 0;\n}\n\n.center-it {\n  display: flex;\n  flex-direction: row;\n  align-content: space-between;\n  gap: 10px;\n}\n\n.separation {\n  justify-content: space-between;\n}\n\n.close-popup:hover {\n  cursor: pointer;\n}\n\n.like:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,+BAA+B;EAC/B,cAAc;EACd,+BAA+B;AACjC,kEAAkE;AAClE;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,qCAAqC;EACrC,WAAW;EACX,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&family=Space+Mono:ital,wght@1,700&display=swap');\nbody {\n  /* background-color: #000a24; */\n  color: #000a24;\n  font-family: 'Lato', sans-serif;\nbackground-image: linear-gradient(315deg, #537895 0%, #09203f 74%);\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(21 21 21 / 85%);\n  width: 100%;\n  height: 100vh;\n  z-index: 20;\n  backdrop-filter: blur(5px);\n  overflow-y: hidden;\n}\n\n.popup-container {\n  position: fixed;\n  border-radius: 15px;\n  left: calc(50% - 250px);\n  height: 85%;\n  margin-top: 60px;\n  padding: 25px;\n  background-color: rgb(235, 235, 235);\n  z-index: 20;\n  overflow-y: auto;\n}\n\n.inner-content, .comment-create {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\ninput[name=\"username\"], textarea[name=\"insights\"] {\n  margin-bottom: 20px;\n}\n\n.photo-close img {\n  width: 300px;\n  height: 300px;\n  border-radius: 15px;\n  margin-bottom: 15px;\n}\n\n.fixed-top {\n  z-index: 20;\n}\n\n.photo-close span {\n  margin: -20px;\n  position: absolute;\n  right: 30px;\n}\n\n.btn-add-comment {\n  margin: 20px 0;\n  align-self: flex-end;\n}\n\n.movies-display {\n  margin-top: 60px;\n}\n\n.footer-z {\n  z-index: 19;\n}\n\nfooter, .footer-margin {\n  margin-bottom: 0;\n}\n\n.center-it {\n  display: flex;\n  flex-direction: row;\n  align-content: space-between;\n  gap: 10px;\n}\n\n.separation {\n  justify-content: space-between;\n}\n\n.close-popup:hover {\n  cursor: pointer;\n}\n\n.like:hover {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

const genre = 'animation';
const linkBase = 'https://api.tvmaze.com/shows/';
const searchURL = `https://api.tvmaze.com/search/shows?q=${genre}`;

const pullMovies = async () => {
  const response = await fetch(searchURL);
  const movies = await response.json();

  return movies;
};

const pullId = async (id) => {
  const response = await fetch(linkBase + id);
  const movie = await response.json();

  return movie;
};

exports.pullId = pullId;
exports.pullMovies = pullMovies;

/***/ }),

/***/ "./src/engagement.js":
/*!***************************!*\
  !*** ./src/engagement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup),
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "pullLikes": () => (/* binding */ pullLikes)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");


const apiHead = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const apiApp = 'YQ7WFyq4DimB3lfs5mdI';
const commentsURL = `${apiHead}/${apiApp}/comments`;
const likeURL = `${apiHead}/${apiApp}/likes`;

const createComment = async (obj) => {
  const commentBody = {
    item_id: obj.item_id,
    username: obj.username,
    comment: obj.comment,
  };

  const response = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });

  return response.status;
};

const getComments = async (id) => {
  try {
    const response = await fetch(`${commentsURL}?item_id=${id}`);
    const comments = await response.json();

    return comments;
  } catch (error) {
    return [];
  }
};

const getCommentsNumber = (commentId) => {
  const commentsContent = document.querySelectorAll(`[comment-id="${commentId}"]`)[0]
    .parentElement.previousElementSibling.children;

  const commentsCount = [...commentsContent].filter((elem) => elem.nodeName === 'P').length;

  return commentsCount;
};

const updateCommentTitle = (id) => {
  const numberOfComments = getCommentsNumber(id);

  const commentsContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
    .parentElement.previousElementSibling.children;

  if (commentsContent.length > 0) {
    const commentTitle = [...commentsContent].filter((elem) => elem.nodeName === 'H3')[0];

    commentTitle.innerText = `Comments (${numberOfComments})`;
  }
};

const genPopupContent = async (movie) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  popup.innerHTML = '';
  const image = movie.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';

  const movieId = movie.id;
  const comments = await getComments(movieId);

  let commentBlock = '';

  popup.insertAdjacentHTML('beforeend', ` 
      <div class="popup-container">
        <div class="inner-content">
          <div class="photo-close d-flex">
            <img src="${image}" />
            <span type="button" class="material-icons-outlined close-popup">close</span>
          </div>
          <h1>${movie.name}</h1>
          <div class="d-flex">
          <div class="">
            <p>Type: ${movie.type}</p>
            <p>Language: ${movie.language}</p>
          </div>
          <div class="pl-2">
            <p>Status: ${movie.status}</p>
            <p>Premiered: ${movie.premiered}</p>
          </div>
          </div>
          <div class="comments-display">
            ${commentBlock}
          </div>
          <div class="comment-create">
            <h3>Add a comment</h3>
            <input name="username" class="form-control" placeholder="Your username"/>
            <textarea name="insights" class="form-control" rows="3" placeholder="Your comments"></textarea>
            <span class="center-it" type="button" comment-id="${movie.id}"><i class="material-icons-outlined">comment</i>Comment</span>
            </div>
        </div>
      </div>`);
  document.querySelector('main').appendChild(popup);
  const closeButton = document.getElementsByClassName('close-popup')[0];
  closeButton.addEventListener('click', () => {
    document.querySelector('.popup').remove();
  });

  const commentsDisplay = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0]
    .parentElement.previousElementSibling;

  if (comments.length > 0) {
    commentBlock += '<h3>Comments</h3>';
    comments.forEach((comment) => {
      const date = comment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
    });
  }
  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);

  updateCommentTitle(movie.id);

  const commentButton = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0];
  commentButton.addEventListener('click', async (e) => {
    const commentObject = {
      item_id: Number(e.target.getAttribute('comment-id')),
      username: commentButton.previousElementSibling.previousElementSibling.value,
      comment: commentButton.previousElementSibling.value,
    };

    const result = await createComment(commentObject);

    if (result === 201) {
      const comments = await getComments(movieId);
      const lastComment = comments[comments.length - 1];
      const commentsDisplay = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0]
        .parentElement.previousElementSibling;
      const date = lastComment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;

      if (comments.length === 1) {
        commentsDisplay.insertAdjacentHTML('beforeend', `
            <h3>Comments</h3>
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `);
      } else {
        commentsDisplay.insertAdjacentHTML('beforeend', `
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `);
      }
      updateCommentTitle(movie.id);
    }
  });
};

const displayPopup = async (id) => {
  const movie = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.pullId)(id);
  genPopupContent(movie);
};

const addLike = async (id) => {
  const likeBody = {
    item_id: id,
  };

  const response = await fetch(`${likeURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeBody),
  });

  return response.status;
};

const pullLikes = async () => {
  try {
    const response = await fetch(`${likeURL}`);
    const likes = await response.json();

    return likes;
  } catch (error) {
    return [];
  }
};



/***/ }),

/***/ "./src/movies.js":
/*!***********************!*\
  !*** ./src/movies.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _engagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engagement */ "./src/engagement.js");



const getCount = () => {
  const movieCount = document.getElementById('movies').children.length;
  return movieCount;
};

const updateTitles = (count) => {
  const movieTitle = document.getElementById('movie-count');
  movieTitle.innerText = `Movies (${count})`;
};

const displayMovies = async () => {
  const movies = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.pullMovies)();
  const likes = await (0,_engagement__WEBPACK_IMPORTED_MODULE_1__.pullLikes)();
  const moviesList = document.getElementById('movies');

  moviesList.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    const likeObject = likes.filter((like) => like.item_id === movies[i].show.id);

    let numLikes = '';
    if (likeObject.length > 0) {
      numLikes = `${likeObject[0].likes} likes`;
    }

    const image = movies[i].show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';
    moviesList.insertAdjacentHTML('beforeend', `
          <div class="col-lg-4 col-md-6 col-sm-6 mb-5 shadow ">
            <div class="movie-container card rounded">
                <div class="movie-content">
                  <img src="${image}" height="300px" width= "100%" />
                </div>
                  <h6 class="pl-3 pt-2">${movies[i].show.name}</h6>
                <div class="pt-3 px-3 d-flex separation">
                  <span like-id="${movies[i].show.id}" class="material-icons-outlined pl-3 pt-2 pr-2 like">thumb_up</span>
                  <p class="pt-2" >${numLikes}</p>
                  <button data-id="${movies[i].show.id}" class="material-icons-outlined btn btn-primary btn-sm ml-2 mb-3">comment</button>
                </div>
            </div>
            </div>`);
    const button = document.querySelectorAll(`[data-id="${movies[i].show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const movieId = e.target.getAttribute('data-id');
      (0,_engagement__WEBPACK_IMPORTED_MODULE_1__.displayPopup)(movieId);
    });
    const likeButton = document.querySelectorAll(`[like-id="${movies[i].show.id}"]`)[0];
    likeButton.addEventListener('click', async (e) => {
      const movieId = e.target.getAttribute('like-id');
      const status = await (0,_engagement__WEBPACK_IMPORTED_MODULE_1__.addLike)(Number(movieId));
      const newLikes = await (0,_engagement__WEBPACK_IMPORTED_MODULE_1__.pullLikes)(movieId);
      const newLikeObject = newLikes.filter((like) => like.item_id === Number(movieId));
      const newNumLikes = newLikeObject[0].likes;
      const newLike = document.querySelectorAll(`[like-id="${movieId}"]`)[0];
      if (status === 'success') {
        newLike.innerText = `${newNumLikes} likes`;
      }
      window.location.reload();
    });
  }

  const movieCount = getCount();
  updateTitles(movieCount);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.js */ "./src/movies.js");




document.addEventListener('DOMContentLoaded', () => { (0,_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esa0JBQWtCLG1CQUFtQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlEO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRCxxQ0FBcUMsU0FBUztBQUM5QyxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0I7QUFDNUU7QUFDQTtBQUNBLE1BQU0seURBQVk7QUFDbEIsS0FBSztBQUNMLDhEQUE4RCxrQkFBa0I7QUFDaEY7QUFDQTtBQUNBLDJCQUEyQixvREFBTztBQUNsQyw2QkFBNkIsc0RBQVM7QUFDdEM7QUFDQTtBQUNBLDZEQUE2RCxRQUFRO0FBQ3JFO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7O1VDbEU1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7O0FBRWtCOztBQUV4QyxzREFBc0Qsc0RBQWEsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvZW5nYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVNwYWNlK01vbm86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMGEyNDsgKi9cXG4gIGNvbG9yOiAjMDAwYTI0O1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTM3ODk1IDAlLCAjMDkyMDNmIDc0JSk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxIDIxIDIxIC8gODUlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmlubmVyLWNvbnRlbnQsIC5jb21tZW50LWNyZWF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwidXNlcm5hbWVcXFwiXSwgdGV4dGFyZWFbbmFtZT1cXFwiaW5zaWdodHNcXFwiXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucGhvdG8tY2xvc2UgaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZpeGVkLXRvcCB7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLnBob3RvLWNsb3NlIHNwYW4ge1xcbiAgbWFyZ2luOiAtMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYnRuLWFkZC1jb21tZW50IHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5tb3ZpZXMtZGlzcGxheSB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4uZm9vdGVyLXoge1xcbiAgei1pbmRleDogMTk7XFxufVxcblxcbmZvb3RlciwgLmZvb3Rlci1tYXJnaW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmNlbnRlci1pdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZXBhcmF0aW9uIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDLGtFQUFrRTtBQUNsRTs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmZhbWlseT1TcGFjZStNb25vOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5ib2R5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDBhMjQ7ICovXFxuICBjb2xvcjogIzAwMGEyNDtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzUzNzg5NSAwJSwgIzA5MjAzZiA3NCUpO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSAyMSAyMSAvIDg1JSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcXG4gIGhlaWdodDogODUlO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICB6LWluZGV4OiAyMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbm5lci1jb250ZW50LCAuY29tbWVudC1jcmVhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmlucHV0W25hbWU9XFxcInVzZXJuYW1lXFxcIl0sIHRleHRhcmVhW25hbWU9XFxcImluc2lnaHRzXFxcIl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnBob3RvLWNsb3NlIGltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5maXhlZC10b3Age1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbi5waG90by1jbG9zZSBzcGFuIHtcXG4gIG1hcmdpbjogLTIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG59XFxuXFxuLmJ0bi1hZGQtY29tbWVudCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW92aWVzLWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLmZvb3Rlci16IHtcXG4gIHotaW5kZXg6IDE5O1xcbn1cXG5cXG5mb290ZXIsIC5mb290ZXItbWFyZ2luIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jZW50ZXItaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VwYXJhdGlvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saWtlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2VucmUgPSAnYW5pbWF0aW9uJztcbmNvbnN0IGxpbmtCYXNlID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJztcbmNvbnN0IHNlYXJjaFVSTCA9IGBodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPSR7Z2VucmV9YDtcblxuY29uc3QgcHVsbE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hVUkwpO1xuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIG1vdmllcztcbn07XG5cbmNvbnN0IHB1bGxJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmtCYXNlICsgaWQpO1xuICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gbW92aWU7XG59O1xuXG5leHBvcnRzLnB1bGxJZCA9IHB1bGxJZDtcbmV4cG9ydHMucHVsbE1vdmllcyA9IHB1bGxNb3ZpZXM7IiwiaW1wb3J0IHsgcHVsbElkIH0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBhcGlIZWFkID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcbmNvbnN0IGFwaUFwcCA9ICdZUTdXRnlxNERpbUIzbGZzNW1kSSc7XG5jb25zdCBjb21tZW50c1VSTCA9IGAke2FwaUhlYWR9LyR7YXBpQXBwfS9jb21tZW50c2A7XG5jb25zdCBsaWtlVVJMID0gYCR7YXBpSGVhZH0vJHthcGlBcHB9L2xpa2VzYDtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIChvYmopID0+IHtcbiAgY29uc3QgY29tbWVudEJvZHkgPSB7XG4gICAgaXRlbV9pZDogb2JqLml0ZW1faWQsXG4gICAgdXNlcm5hbWU6IG9iai51c2VybmFtZSxcbiAgICBjb21tZW50OiBvYmouY29tbWVudCxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbW1lbnRzVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRCb2R5KSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c1VSTH0/aXRlbV9pZD0ke2lkfWApO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgZ2V0Q29tbWVudHNOdW1iZXIgPSAoY29tbWVudElkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb21tZW50LWlkPVwiJHtjb21tZW50SWR9XCJdYClbMF1cbiAgICAucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuO1xuXG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBbLi4uY29tbWVudHNDb250ZW50XS5maWx0ZXIoKGVsZW0pID0+IGVsZW0ubm9kZU5hbWUgPT09ICdQJykubGVuZ3RoO1xuXG4gIHJldHVybiBjb21tZW50c0NvdW50O1xufTtcblxuY29uc3QgdXBkYXRlQ29tbWVudFRpdGxlID0gKGlkKSA9PiB7XG4gIGNvbnN0IG51bWJlck9mQ29tbWVudHMgPSBnZXRDb21tZW50c051bWJlcihpZCk7XG5cbiAgY29uc3QgY29tbWVudHNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NvbW1lbnQtaWQ9XCIke2lkfVwiXWApWzBdXG4gICAgLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZHJlbjtcblxuICBpZiAoY29tbWVudHNDb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjb21tZW50VGl0bGUgPSBbLi4uY29tbWVudHNDb250ZW50XS5maWx0ZXIoKGVsZW0pID0+IGVsZW0ubm9kZU5hbWUgPT09ICdIMycpWzBdO1xuXG4gICAgY29tbWVudFRpdGxlLmlubmVyVGV4dCA9IGBDb21tZW50cyAoJHtudW1iZXJPZkNvbW1lbnRzfSlgO1xuICB9XG59O1xuXG5jb25zdCBnZW5Qb3B1cENvbnRlbnQgPSBhc3luYyAobW92aWUpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblxuICBwb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaW1hZ2UgPSBtb3ZpZS5pbWFnZT8ubWVkaXVtID8/ICdodHRwczovL2kuaWJiLmNvL25QenlGbTYvcGxhY2Vob2xkZXIucG5nJztcblxuICBjb25zdCBtb3ZpZUlkID0gbW92aWUuaWQ7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMobW92aWVJZCk7XG5cbiAgbGV0IGNvbW1lbnRCbG9jayA9ICcnO1xuXG4gIHBvcHVwLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYCBcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvdG8tY2xvc2UgZC1mbGV4XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGNsb3NlLXBvcHVwXCI+Y2xvc2U8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxPiR7bW92aWUubmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICA8cD5UeXBlOiAke21vdmllLnR5cGV9PC9wPlxuICAgICAgICAgICAgPHA+TGFuZ3VhZ2U6ICR7bW92aWUubGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0yXCI+XG4gICAgICAgICAgICA8cD5TdGF0dXM6ICR7bW92aWUuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDxwPlByZW1pZXJlZDogJHttb3ZpZS5wcmVtaWVyZWR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1kaXNwbGF5XCI+XG4gICAgICAgICAgICAke2NvbW1lbnRCbG9ja31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1jcmVhdGVcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciB1c2VybmFtZVwiLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5zaWdodHNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIzXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2VudGVyLWl0XCIgdHlwZT1cImJ1dHRvblwiIGNvbW1lbnQtaWQ9XCIke21vdmllLmlkfVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5jb21tZW50PC9pPkNvbW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZS1wb3B1cCcpWzBdO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NvbW1lbnQtaWQ9XCIke21vdmllLmlkfVwiXWApWzBdXG4gICAgLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbW1lbnRCbG9jayArPSAnPGgzPkNvbW1lbnRzPC9oMz4nO1xuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBjb21tZW50LmNyZWF0aW9uX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgIGNvbnN0IGRhdGVGb3JtYXRlZCA9IGAke2RhdGVbMV19LyR7ZGF0ZVsyXX0vJHtkYXRlWzBdfWA7XG4gICAgICBjb21tZW50QmxvY2sgKz0gYDxwPiR7ZGF0ZUZvcm1hdGVkfSAke2NvbW1lbnQudXNlcm5hbWV9OiAke2NvbW1lbnQuY29tbWVudH08L3A+YDtcbiAgICB9KTtcbiAgfVxuICBjb21tZW50c0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb21tZW50QmxvY2spO1xuXG4gIHVwZGF0ZUNvbW1lbnRUaXRsZShtb3ZpZS5pZCk7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb21tZW50LWlkPVwiJHttb3ZpZS5pZH1cIl1gKVswXTtcbiAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgY29tbWVudE9iamVjdCA9IHtcbiAgICAgIGl0ZW1faWQ6IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NvbW1lbnQtaWQnKSksXG4gICAgICB1c2VybmFtZTogY29tbWVudEJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50QnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUNvbW1lbnQoY29tbWVudE9iamVjdCk7XG5cbiAgICBpZiAocmVzdWx0ID09PSAyMDEpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMobW92aWVJZCk7XG4gICAgICBjb25zdCBsYXN0Q29tbWVudCA9IGNvbW1lbnRzW2NvbW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgY29tbWVudHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NvbW1lbnQtaWQ9XCIke21vdmllLmlkfVwiXWApWzBdXG4gICAgICAgIC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBjb25zdCBkYXRlID0gbGFzdENvbW1lbnQuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgY29uc3QgZGF0ZUZvcm1hdGVkID0gYCR7ZGF0ZVsxXX0vJHtkYXRlWzJdfS8ke2RhdGVbMF19YDtcblxuICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb21tZW50c0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgICA8aDM+Q29tbWVudHM8L2gzPlxuICAgICAgICAgICAgPHA+JHtkYXRlRm9ybWF0ZWR9ICR7bGFzdENvbW1lbnQudXNlcm5hbWV9OiAke2xhc3RDb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgICAgIGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWVudHNEaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICAgICAgPHA+JHtkYXRlRm9ybWF0ZWR9ICR7bGFzdENvbW1lbnQudXNlcm5hbWV9OiAke2xhc3RDb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgICAgIGApO1xuICAgICAgfVxuICAgICAgdXBkYXRlQ29tbWVudFRpdGxlKG1vdmllLmlkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheVBvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IG1vdmllID0gYXdhaXQgcHVsbElkKGlkKTtcbiAgZ2VuUG9wdXBDb250ZW50KG1vdmllKTtcbn07XG5cbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgbGlrZUJvZHkgPSB7XG4gICAgaXRlbV9pZDogaWQsXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtsaWtlVVJMfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlrZUJvZHkpLFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuY29uc3QgcHVsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bGlrZVVSTH1gKTtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBsaWtlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQb3B1cCwgYWRkTGlrZSwgcHVsbExpa2VzIH07IiwiaW1wb3J0IHsgcHVsbE1vdmllcyB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCwgcHVsbExpa2VzLCBhZGRMaWtlIH0gZnJvbSAnLi9lbmdhZ2VtZW50JztcblxuY29uc3QgZ2V0Q291bnQgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmllQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWVzJykuY2hpbGRyZW4ubGVuZ3RoO1xuICByZXR1cm4gbW92aWVDb3VudDtcbn07XG5cbmNvbnN0IHVwZGF0ZVRpdGxlcyA9IChjb3VudCkgPT4ge1xuICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLWNvdW50Jyk7XG4gIG1vdmllVGl0bGUuaW5uZXJUZXh0ID0gYE1vdmllcyAoJHtjb3VudH0pYDtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IHB1bGxNb3ZpZXMoKTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBwdWxsTGlrZXMoKTtcbiAgY29uc3QgbW92aWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXMnKTtcblxuICBtb3ZpZXNMaXN0LmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpa2VPYmplY3QgPSBsaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gbW92aWVzW2ldLnNob3cuaWQpO1xuXG4gICAgbGV0IG51bUxpa2VzID0gJyc7XG4gICAgaWYgKGxpa2VPYmplY3QubGVuZ3RoID4gMCkge1xuICAgICAgbnVtTGlrZXMgPSBgJHtsaWtlT2JqZWN0WzBdLmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBtb3ZpZXNbaV0uc2hvdy5pbWFnZT8ubWVkaXVtID8/ICdodHRwczovL2kuaWJiLmNvL25QenlGbTYvcGxhY2Vob2xkZXIucG5nJztcbiAgICBtb3ZpZXNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBtYi01IHNoYWRvdyBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1jb250YWluZXIgY2FyZCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBoZWlnaHQ9XCIzMDBweFwiIHdpZHRoPSBcIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwicGwtMyBwdC0yXCI+JHttb3ZpZXNbaV0uc2hvdy5uYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTMgcHgtMyBkLWZsZXggc2VwYXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gbGlrZS1pZD1cIiR7bW92aWVzW2ldLnNob3cuaWR9XCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBwbC0zIHB0LTIgcHItMiBsaWtlXCI+dGh1bWJfdXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInB0LTJcIiA+JHtudW1MaWtlc308L3A+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCIke21vdmllc1tpXS5zaG93LmlkfVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBtbC0yIG1iLTNcIj5jb21tZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPVwiJHttb3ZpZXNbaV0uc2hvdy5pZH1cIl1gKVswXTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgZGlzcGxheVBvcHVwKG1vdmllSWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbbGlrZS1pZD1cIiR7bW92aWVzW2ldLnNob3cuaWR9XCJdYClbMF07XG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaWtlLWlkJyk7XG4gICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBhZGRMaWtlKE51bWJlcihtb3ZpZUlkKSk7XG4gICAgICBjb25zdCBuZXdMaWtlcyA9IGF3YWl0IHB1bGxMaWtlcyhtb3ZpZUlkKTtcbiAgICAgIGNvbnN0IG5ld0xpa2VPYmplY3QgPSBuZXdMaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gTnVtYmVyKG1vdmllSWQpKTtcbiAgICAgIGNvbnN0IG5ld051bUxpa2VzID0gbmV3TGlrZU9iamVjdFswXS5saWtlcztcbiAgICAgIGNvbnN0IG5ld0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbbGlrZS1pZD1cIiR7bW92aWVJZH1cIl1gKVswXTtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICBuZXdMaWtlLmlubmVyVGV4dCA9IGAke25ld051bUxpa2VzfSBsaWtlc2A7XG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBtb3ZpZUNvdW50ID0gZ2V0Q291bnQoKTtcbiAgdXBkYXRlVGl0bGVzKG1vdmllQ291bnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1vdmllczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vdmllcy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IGRpc3BsYXlNb3ZpZXMoKTsgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9