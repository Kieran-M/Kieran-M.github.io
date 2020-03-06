webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\kiera\\Documents\\Programming\\Kieran-M.github.io\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Footer = function Footer() {
  return __jsx("div", {
    className: "footer-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "\xA9 ", new Date().getFullYear(), " Kieran Malloy."));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
var _jsxFileName = "C:\\Users\\kiera\\Documents\\Programming\\Kieran-M.github.io\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  return __jsx("div", {
    className: "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\kiera\\Documents\\Programming\\Kieran-M.github.io\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Layout = function Layout(props) {
  return __jsx("div", {
    className: "site-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\kiera\\Documents\\Programming\\Kieran-M.github.io\\components\\Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Logo = function Logo() {
  return __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Fi Studio")));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\kiera\\Documents\\Programming\\Kieran-M.github.io\\pages\\portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Portfolio = function Portfolio() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Portfolio"));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=portfolio.js.fe3ff48f875fd6beb7a0.hot-update.js.map