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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #000a24;\r\n  color: #000a24;\r\n}\r\n\r\n.logo {\r\n  width: 6rem;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(36, 35, 35, 0.3);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 19;\r\n}\r\n\r\n.popup-container {\r\n  overflow-y: scroll;\r\n  position: fixed;\r\n  border: 2px solid #000a24;\r\n  border-radius: 30px;\r\n  left: calc(50% - 250px);\r\n  height: 500px;\r\n  width: 600px;\r\n  margin-top: 80px;\r\n  padding: 25px;\r\n  background-color: rgb(235, 235, 235);\r\n  z-index: 20;\r\n}\r\n\r\n.inner-content,\r\n.comment-create {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\ninput[name=\"username\"],\r\ntextarea[name=\"insights\"] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.photo-close img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.photo-close span {\r\n  padding-left: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.btn-add-comment {\r\n  margin: 20px 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.movies-display {\r\n  margin-top: 60px;\r\n}\r\nfooter,\r\n.footer-margin {\r\n  margin-bottom: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,uCAAuC;EACvC,WAAW;EACX,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB","sourcesContent":["body {\r\n  background-color: #000a24;\r\n  color: #000a24;\r\n}\r\n\r\n.logo {\r\n  width: 6rem;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(36, 35, 35, 0.3);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 19;\r\n}\r\n\r\n.popup-container {\r\n  overflow-y: scroll;\r\n  position: fixed;\r\n  border: 2px solid #000a24;\r\n  border-radius: 30px;\r\n  left: calc(50% - 250px);\r\n  height: 500px;\r\n  width: 600px;\r\n  margin-top: 80px;\r\n  padding: 25px;\r\n  background-color: rgb(235, 235, 235);\r\n  z-index: 20;\r\n}\r\n\r\n.inner-content,\r\n.comment-create {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\ninput[name=\"username\"],\r\ntextarea[name=\"insights\"] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.photo-close img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.photo-close span {\r\n  padding-left: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.btn-add-comment {\r\n  margin: 20px 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.movies-display {\r\n  margin-top: 60px;\r\n}\r\nfooter,\r\n.footer-margin {\r\n  margin-bottom: 0;\r\n}"],"sourceRoot":""}]);
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
const apiApp = 'MZpaps73wewnyNptjwlc';
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
          <h1 class="text-primary">${movie.name}</h1>
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
            <input name="username" class="form-control" placeholder="Your username" required/>
            <textarea name="insights" class="form-control" rows="3" placeholder="Your comments" required></textarea>
            <span type="button" comment-id="${movie.id}" class="material-icons-outlined">comment</span>
            <p>Comment</p>
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
                <div class="pt-3 px-3 d-flex">
                  <span like-id="${movies[i].show.id}" class="material-icons-outlined pl-3 pr-2">thumb_up</span>
                  <p>${numLikes}</p>
                  <button data-id="${movies[i].show.id}" class="btn btn-primary btn-sm ml-2 mb-3">Comment</button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtBQUNsQixLQUFLO0FBQ0wsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFPO0FBQ2xDLDZCQUE2QixzREFBUztBQUN0QztBQUNBO0FBQ0EsNkRBQTZELFFBQVE7QUFDckU7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7OztVQ2xFNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3RCO0FBQ3dDO0FBQ3hDO0FBQ0Esc0RBQXNELHNEQUFhLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL2VuZ2FnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW92aWVzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBhMjQ7XFxyXFxuICBjb2xvcjogIzAwMGEyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzUsIDM1LCAwLjMpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMTk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMGEyNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItY29udGVudCxcXHJcXG4uY29tbWVudC1jcmVhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W25hbWU9XFxcInVzZXJuYW1lXFxcIl0sXFxyXFxudGV4dGFyZWFbbmFtZT1cXFwiaW5zaWdodHNcXFwiXSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY2xvc2UgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5waG90by1jbG9zZSBzcGFuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWFkZC1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMtZGlzcGxheSB7XFxyXFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5mb290ZXIsXFxyXFxuLmZvb3Rlci1tYXJnaW4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBhMjQ7XFxyXFxuICBjb2xvcjogIzAwMGEyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzUsIDM1LCAwLjMpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMTk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMGEyNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItY29udGVudCxcXHJcXG4uY29tbWVudC1jcmVhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W25hbWU9XFxcInVzZXJuYW1lXFxcIl0sXFxyXFxudGV4dGFyZWFbbmFtZT1cXFwiaW5zaWdodHNcXFwiXSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY2xvc2UgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5waG90by1jbG9zZSBzcGFuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWFkZC1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMtZGlzcGxheSB7XFxyXFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5mb290ZXIsXFxyXFxuLmZvb3Rlci1tYXJnaW4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2VucmUgPSAnYW5pbWF0aW9uJztcclxuY29uc3QgbGlua0Jhc2UgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xyXG5jb25zdCBzZWFyY2hVUkwgPSBgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT0ke2dlbnJlfWA7XHJcblxyXG5jb25zdCBwdWxsTW92aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoVVJMKTtcclxuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiBtb3ZpZXM7XHJcbn07XHJcblxyXG5jb25zdCBwdWxsSWQgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmtCYXNlICsgaWQpO1xyXG4gIGNvbnN0IG1vdmllID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4gbW92aWU7XHJcbn07XHJcblxyXG5leHBvcnRzLnB1bGxJZCA9IHB1bGxJZDtcclxuZXhwb3J0cy5wdWxsTW92aWVzID0gcHVsbE1vdmllczsiLCJpbXBvcnQgeyBwdWxsSWQgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5jb25zdCBhcGlIZWFkID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcclxuY29uc3QgYXBpQXBwID0gJ01acGFwczczd2V3bnlOcHRqd2xjJztcclxuY29uc3QgY29tbWVudHNVUkwgPSBgJHthcGlIZWFkfS8ke2FwaUFwcH0vY29tbWVudHNgO1xyXG5jb25zdCBsaWtlVVJMID0gYCR7YXBpSGVhZH0vJHthcGlBcHB9L2xpa2VzYDtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudEJvZHkgPSB7XHJcbiAgICBpdGVtX2lkOiBvYmouaXRlbV9pZCxcclxuICAgIHVzZXJuYW1lOiBvYmoudXNlcm5hbWUsXHJcbiAgICBjb21tZW50OiBvYmouY29tbWVudCxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbW1lbnRzVVJMLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50Qm9keSksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbW1lbnRzVVJMfT9pdGVtX2lkPSR7aWR9YCk7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb21tZW50c051bWJlciA9IChjb21tZW50SWQpID0+IHtcclxuICBjb25zdCBjb21tZW50c0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY29tbWVudC1pZD1cIiR7Y29tbWVudElkfVwiXWApWzBdXHJcbiAgICAucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuO1xyXG5cclxuICBjb25zdCBjb21tZW50c0NvdW50ID0gWy4uLmNvbW1lbnRzQ29udGVudF0uZmlsdGVyKChlbGVtKSA9PiBlbGVtLm5vZGVOYW1lID09PSAnUCcpLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIGNvbW1lbnRzQ291bnQ7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVDb21tZW50VGl0bGUgPSAoaWQpID0+IHtcclxuICBjb25zdCBudW1iZXJPZkNvbW1lbnRzID0gZ2V0Q29tbWVudHNOdW1iZXIoaWQpO1xyXG5cclxuICBjb25zdCBjb21tZW50c0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY29tbWVudC1pZD1cIiR7aWR9XCJdYClbMF1cclxuICAgIC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGRyZW47XHJcblxyXG4gIGlmIChjb21tZW50c0NvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgY29tbWVudFRpdGxlID0gWy4uLmNvbW1lbnRzQ29udGVudF0uZmlsdGVyKChlbGVtKSA9PiBlbGVtLm5vZGVOYW1lID09PSAnSDMnKVswXTtcclxuXHJcbiAgICBjb21tZW50VGl0bGUuaW5uZXJUZXh0ID0gYENvbW1lbnRzICgke251bWJlck9mQ29tbWVudHN9KWA7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2VuUG9wdXBDb250ZW50ID0gYXN5bmMgKG1vdmllKSA9PiB7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xyXG5cclxuICBwb3B1cC5pbm5lckhUTUwgPSAnJztcclxuICBjb25zdCBpbWFnZSA9IG1vdmllLmltYWdlPy5tZWRpdW0gPz8gJ2h0dHBzOi8vaS5pYmIuY28vblB6eUZtNi9wbGFjZWhvbGRlci5wbmcnO1xyXG5cclxuICBjb25zdCBtb3ZpZUlkID0gbW92aWUuaWQ7XHJcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhtb3ZpZUlkKTtcclxuXHJcbiAgbGV0IGNvbW1lbnRCbG9jayA9ICcnO1xyXG5cclxuICBwb3B1cC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBob3RvLWNsb3NlIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgY2xvc2UtcG9wdXBcIj5jbG9zZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+JHttb3ZpZS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxwPlR5cGU6ICR7bW92aWUudHlwZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkxhbmd1YWdlOiAke21vdmllLmxhbmd1YWdlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTJcIj5cclxuICAgICAgICAgICAgPHA+U3RhdHVzOiAke21vdmllLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgIDxwPlByZW1pZXJlZDogJHttb3ZpZS5wcmVtaWVyZWR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICR7Y29tbWVudEJsb2NrfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1jcmVhdGVcIj5cclxuICAgICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgdXNlcm5hbWVcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5zaWdodHNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIzXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNvbW1lbnQtaWQ9XCIke21vdmllLmlkfVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5jb21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICA8cD5Db21tZW50PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlLXBvcHVwJylbMF07XHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKS5yZW1vdmUoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NvbW1lbnQtaWQ9XCIke21vdmllLmlkfVwiXWApWzBdXHJcbiAgICAucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29tbWVudEJsb2NrICs9ICc8aDM+Q29tbWVudHM8L2gzPic7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBjb21tZW50LmNyZWF0aW9uX2RhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgY29uc3QgZGF0ZUZvcm1hdGVkID0gYCR7ZGF0ZVsxXX0vJHtkYXRlWzJdfS8ke2RhdGVbMF19YDtcclxuICAgICAgY29tbWVudEJsb2NrICs9IGA8cD4ke2RhdGVGb3JtYXRlZH0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9wPmA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29tbWVudHNEaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29tbWVudEJsb2NrKTtcclxuXHJcbiAgdXBkYXRlQ29tbWVudFRpdGxlKG1vdmllLmlkKTtcclxuXHJcbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb21tZW50LWlkPVwiJHttb3ZpZS5pZH1cIl1gKVswXTtcclxuICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbW1lbnRPYmplY3QgPSB7XHJcbiAgICAgIGl0ZW1faWQ6IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NvbW1lbnQtaWQnKSksXHJcbiAgICAgIHVzZXJuYW1lOiBjb21tZW50QnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSxcclxuICAgICAgY29tbWVudDogY29tbWVudEJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVDb21tZW50KGNvbW1lbnRPYmplY3QpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IDIwMSkge1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKG1vdmllSWQpO1xyXG4gICAgICBjb25zdCBsYXN0Q29tbWVudCA9IGNvbW1lbnRzW2NvbW1lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBjb21tZW50c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY29tbWVudC1pZD1cIiR7bW92aWUuaWR9XCJdYClbMF1cclxuICAgICAgICAucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBjb25zdCBkYXRlID0gbGFzdENvbW1lbnQuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICBjb25zdCBkYXRlRm9ybWF0ZWQgPSBgJHtkYXRlWzFdfS8ke2RhdGVbMl19LyR7ZGF0ZVswXX1gO1xyXG5cclxuICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbW1lbnRzRGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgICAgPGgzPkNvbW1lbnRzPC9oMz5cclxuICAgICAgICAgICAgPHA+JHtkYXRlRm9ybWF0ZWR9ICR7bGFzdENvbW1lbnQudXNlcm5hbWV9OiAke2xhc3RDb21tZW50LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29tbWVudHNEaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgICA8cD4ke2RhdGVGb3JtYXRlZH0gJHtsYXN0Q29tbWVudC51c2VybmFtZX06ICR7bGFzdENvbW1lbnQuY29tbWVudH08L3A+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVDb21tZW50VGl0bGUobW92aWUuaWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVBvcHVwID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBwdWxsSWQoaWQpO1xyXG4gIGdlblBvcHVwQ29udGVudChtb3ZpZSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgbGlrZUJvZHkgPSB7XHJcbiAgICBpdGVtX2lkOiBpZCxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2xpa2VVUkx9YCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlrZUJvZHkpLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xyXG59O1xyXG5cclxuY29uc3QgcHVsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2xpa2VVUkx9YCk7XHJcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gbGlrZXM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5UG9wdXAsIGFkZExpa2UsIHB1bGxMaWtlcyB9OyIsImltcG9ydCB7IHB1bGxNb3ZpZXMgfSBmcm9tICcuL2FwaSc7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCwgcHVsbExpa2VzLCBhZGRMaWtlIH0gZnJvbSAnLi9lbmdhZ2VtZW50JztcclxuXHJcbmNvbnN0IGdldENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1vdmllQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWVzJykuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIHJldHVybiBtb3ZpZUNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVGl0bGVzID0gKGNvdW50KSA9PiB7XHJcbiAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZS1jb3VudCcpO1xyXG4gIG1vdmllVGl0bGUuaW5uZXJUZXh0ID0gYE1vdmllcyAoJHtjb3VudH0pYDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgcHVsbE1vdmllcygpO1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgcHVsbExpa2VzKCk7XHJcbiAgY29uc3QgbW92aWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXMnKTtcclxuXHJcbiAgbW92aWVzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbGlrZU9iamVjdCA9IGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBtb3ZpZXNbaV0uc2hvdy5pZCk7XHJcblxyXG4gICAgbGV0IG51bUxpa2VzID0gJyc7XHJcbiAgICBpZiAobGlrZU9iamVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG51bUxpa2VzID0gYCR7bGlrZU9iamVjdFswXS5saWtlc30gbGlrZXNgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbW92aWVzW2ldLnNob3cuaW1hZ2U/Lm1lZGl1bSA/PyAnaHR0cHM6Ly9pLmliYi5jby9uUHp5Rm02L3BsYWNlaG9sZGVyLnBuZyc7XHJcbiAgICBtb3ZpZXNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IG1iLTUgc2hhZG93IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtY29udGFpbmVyIGNhcmQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGhlaWdodD1cIjMwMHB4XCIgd2lkdGg9IFwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwicGwtMyBwdC0yXCI+JHttb3ZpZXNbaV0uc2hvdy5uYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMyBweC0zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBsaWtlLWlkPVwiJHttb3ZpZXNbaV0uc2hvdy5pZH1cIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHBsLTMgcHItMlwiPnRodW1iX3VwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke251bUxpa2VzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHttb3ZpZXNbaV0uc2hvdy5pZH1cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gbWwtMiBtYi0zXCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPVwiJHttb3ZpZXNbaV0uc2hvdy5pZH1cIl1gKVswXTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgZGlzcGxheVBvcHVwKG1vdmllSWQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2xpa2UtaWQ9XCIke21vdmllc1tpXS5zaG93LmlkfVwiXWApWzBdO1xyXG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xpa2UtaWQnKTtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgYWRkTGlrZShOdW1iZXIobW92aWVJZCkpO1xyXG4gICAgICBjb25zdCBuZXdMaWtlcyA9IGF3YWl0IHB1bGxMaWtlcyhtb3ZpZUlkKTtcclxuICAgICAgY29uc3QgbmV3TGlrZU9iamVjdCA9IG5ld0xpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBOdW1iZXIobW92aWVJZCkpO1xyXG4gICAgICBjb25zdCBuZXdOdW1MaWtlcyA9IG5ld0xpa2VPYmplY3RbMF0ubGlrZXM7XHJcbiAgICAgIGNvbnN0IG5ld0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbbGlrZS1pZD1cIiR7bW92aWVJZH1cIl1gKVswXTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgbmV3TGlrZS5pbm5lclRleHQgPSBgJHtuZXdOdW1MaWtlc30gbGlrZXNgO1xyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92aWVDb3VudCA9IGdldENvdW50KCk7XHJcbiAgdXBkYXRlVGl0bGVzKG1vdmllQ291bnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1vdmllczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgZGlzcGxheU1vdmllcygpOyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=