(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n*:focus {\r\n  outline: 0;\r\n  outline: none;\r\n}\r\n\r\n.App {\r\n  text-align: center;\r\n}\r\n\r\n.Hamburger {\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n  padding-left: 20px;\r\n}\r\n.Header {\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n  float: right;\r\n}\r\n\r\n/*\r\n.FadeIn {\r\n  animation: fadein 2s;\r\n  -moz-animation: fadein 2s; // Firefox\r\n  -webkit-animation: fadein 2s; // Safari and Chrome\r\n  -o-animation: fadein 2s; // Opera\r\n}\r\n*/\r\n\r\n@keyframes fadein {\r\n  from {\r\n      opacity:0;\r\n  }\r\n  to {\r\n      opacity:1;\r\n  }\r\n}\r\n@-webkit-keyframes fadein { /* Safari and Chrome */\r\n  from {\r\n      opacity:0;\r\n  }\r\n  to {\r\n      opacity:1;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, description, main, repository, homepage, license, dependencies, scripts, devDependencies, browserslist, default */
/***/ (function(module) {

module.exports = {"name":"myhushwallet","version":"v2.0.10","private":true,"description":"Secure Hush wallet online","main":"index.js","repository":"https://github.com/MyHush/myhushwallet.git","homepage":"https://MyHush.github.io/myhushwallet/","license":"MIT","dependencies":{"axios":"^0.18.0","bip32-utils":"^0.11.1","bitcoinjs-lib":"^3.0.0","bitgo-utxo-lib":"git+https://github.com/MyHush/bitgo-utxo-lib.git","bluebird":"^3.5.0","bootstrap":"^4.1.3","bs58check":"^2.1.2","file-loader":"^3.0.1","file-saver":"^2.0.0","gh-pages":"^2.2.0","npm":"^6.9.0","prop-types":"^15.6.2","qrcode.react":"^0.9.1","react":"^16.6.0","react-copy-to-clipboard":"^5.0.1","react-dom":"^16.7.0","react-router-dom":"^4.3.1","react-scripts":"^2.1.8","react-sidebar":"^2.3.2","react-table":"^6.8.6","reactstrap":"^7.0.2","secp256k1":"^3.6.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/core":"^7.2.2"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]};

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sidebar */ "./node_modules/react-sidebar/dist-modules/index.js");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SideBarContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SideBarContent */ "./src/components/SideBarContent.js");
/* harmony import */ var _MainRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainRouter */ "./src/components/MainRouter.js");
/* harmony import */ var _SideBarPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SideBarPanel */ "./src/components/SideBarPanel.js");
/* harmony import */ var _images_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/svg */ "./src/components/images/svg.js");






var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\App.js";









var styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  headerIcons: {
    color: 'white'
  },
  contentHeaderTitle: {
    float: 'right'
  },
  content: {
    padding: "16px"
  }
};
var mql = window.matchMedia("(min-width: 800px)");

var App =
/*#__PURE__*/
function (_Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      docked: mql.matches,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    };
    _this.mediaQueryChanged = _this.mediaQueryChanged.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.toggleOpen = _this.toggleOpen.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.onSetOpen = _this.onSetOpen.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      mql.removeListener(this.mediaQueryChanged);
    }
  }, {
    key: "onSetOpen",
    value: function onSetOpen(open) {
      this.setState({
        open: open
      });
    }
  }, {
    key: "mediaQueryChanged",
    value: function mediaQueryChanged() {
      this.setState({
        docked: mql.matches,
        open: false
      });
    }
  }, {
    key: "toggleOpen",
    value: function toggleOpen(ev) {
      this.setState({
        open: !this.state.open
      });

      if (ev) {
        ev.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var sidebar = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SideBarContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      });
      var contentHeader = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, !this.state.docked && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: this.toggleOpen,
        href: "Menu",
        style: styles.contentHeaderMenuLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_13__["Menu"], {
        size: "30",
        style: styles.headerIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_13__["Hush"], {
        size: "30",
        color: "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, " Hush Wallet"));
      var sidebarProps = {
        sidebar: sidebar,
        docked: this.state.docked,
        open: this.state.open,
        onSetOpen: this.onSetOpen
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_sidebar__WEBPACK_IMPORTED_MODULE_9___default.a, Object.assign({}, sidebarProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SideBarPanel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: contentHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MainRouter__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/MainRouter.js":
/*!**************************************!*\
  !*** ./src/components/MainRouter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _pages_Wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Wallet */ "./src/components/pages/Wallet.jsx");
/* harmony import */ var _pages_Faq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Faq */ "./src/components/pages/Faq.jsx");
/* harmony import */ var _pages_Guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Guide */ "./src/components/pages/Guide.jsx");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Contact */ "./src/components/pages/Contact.jsx");





var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\MainRouter.js";





 // This is the main routing for the application

var MainRouter =
/*#__PURE__*/
function (_Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainRouter, _Component);

  function MainRouter() {
    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainRouter);

    return Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainRouter).apply(this, arguments));
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainRouter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/myhushwallet/",
        component: _pages_Wallet__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/faq",
        component: _pages_Faq__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/getting_started",
        component: _pages_Guide__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/contact",
        component: _pages_Contact__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })));
    }
  }]);

  return MainRouter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainRouter);

/***/ }),

/***/ "./src/components/SideBarContent.js":
/*!******************************************!*\
  !*** ./src/components/SideBarContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideBarPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBarPanel */ "./src/components/SideBarPanel.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\SideBarContent.js";




var styles = {
  sidebar: {
    width: 256,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none' //cursor: 'pointer'

  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    flexGrow: '1',
    backgroundColor: 'white'
  } // Menu divider
  // <div style={styles.divider} />

};

var SidebarContent = function SidebarContent(props) {
  var style = props.style ? Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.sidebar, props.style) : styles.sidebar;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SideBarPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Menu',
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/myhushwallet/",
    style: styles.sidebarLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Wallet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/getting_started",
    style: styles.sidebarLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Getting started"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/faq",
    style: styles.sidebarLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/contact",
    style: styles.sidebarLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Contact")));
};

SidebarContent.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./src/components/SideBarPanel.js":
/*!****************************************!*\
  !*** ./src/components/SideBarPanel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\SideBarPanel.js";


var styles = {
  root: {
    fontWeight: 300
  },
  header: {
    backgroundColor: '#2d2d2d',
    color: 'white',
    padding: '20px',
    fontSize: '1.5em'
  }
};

var SideBarPanel = function SideBarPanel(props) {
  var rootStyle = props.style ? Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.root, props.style) : styles.root;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: rootStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.title), props.children);
};

SideBarPanel.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SideBarPanel);

/***/ }),

/***/ "./src/components/images/svg.js":
/*!**************************************!*\
  !*** ./src/components/images/svg.js ***!
  \**************************************/
/*! exports provided: Reddit, Invisible, Twitter, Telegram, Discord, Github, Bitcointalk, Unlock, Setting, Menu, ContentCopy, Eye, EyeSlash, Redo, Hush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reddit", function() { return Reddit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invisible", function() { return Invisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telegram", function() { return Telegram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discord", function() { return Discord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Github", function() { return Github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitcointalk", function() { return Bitcointalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unlock", function() { return Unlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return Setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCopy", function() { return ContentCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eye", function() { return Eye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeSlash", function() { return EyeSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redo", function() { return Redo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hush", function() { return Hush; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\images\\svg.js";
 //Use https://jakearchibald.github.io/svgomg/ for minify svg file
//Use https://svg2jsx.com/ for convert SVG to JSX

function Reddit(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M261.6,449.7c-9.8-7.7-21.9-12.1-34.4-12.1c-30.8,0-55.8,25.1-55.8,55.9c0,17.8,8.6,34.3,22.6,44.7C205.6,505,229.2,474.8,261.6,449.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M739.3,311.9c23,0,41.7-18.7,41.7-41.7s-18.7-41.7-41.7-41.7c-23,0-41.7,18.7-41.7,41.7S716.3,311.9,739.3,311.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490s490-219.4,490-490C990,229.4,770.6,10,500,10z M809.3,561.7c1.3,7.7,2.2,15.5,2.2,23.5c0,114.7-140.4,208-312.9,208c-172.5,0-312.9-93.3-312.9-208c0-8.5,1-16.7,2.5-24.9c-23.5-13.8-38.4-39.1-38.4-66.8c0-42.8,34.8-77.6,77.5-77.6c19.5,0,38.1,7.8,52.4,20.9c55.2-36,130.3-58.4,213.2-59.4l48.3-152.7c1.7-5.4,7.4-8.6,12.9-7.3l126.4,29.7c9.2-23.6,32.1-40.4,59-40.4c35,0,63.4,28.5,63.4,63.4c0,35-28.5,63.4-63.4,63.4c-35,0-63.4-28.5-63.4-63.4c0-0.6,0.1-1.1,0.2-1.7l-117.2-27.6l-43.3,136.9c79.3,2.8,150.9,25.1,203.8,60.2c14.4-13.9,33.2-22,53.5-22c42.8,0,77.6,34.8,77.6,77.6C850.3,522.5,834.4,548.3,809.3,561.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M347.5,546.8c0-25.5,20.7-46.2,46.2-46.2c25.5,0,46.2,20.7,46.2,46.2c0,25.5-20.7,46.2-46.2,46.2C368.2,592.9,347.5,572.2,347.5,546.8z M612,683.6c-23.3,23.3-59.8,34.6-111.6,34.6c-0.1,0-0.2-0.1-0.4-0.1s-0.2,0.1-0.4,0.1c-51.9,0-88.4-11.3-111.6-34.6c-4.2-4.2-4.2-11.1,0-15.4c4.2-4.2,11.1-4.2,15.4,0c19,19,50.5,28.2,96.3,28.2c0.1,0,0.2,0.1,0.4,0.1s0.2-0.1,0.4-0.1c45.8,0,77.3-9.2,96.3-28.2c4.3-4.2,11.1-4.2,15.4,0C616.3,672.5,616.3,679.4,612,683.6z M606.5,592.9c-25.4,0-46.2-20.7-46.2-46.2c0-25.5,20.7-46.2,46.2-46.2s46.2,20.7,46.2,46.2C652.7,572.2,632,592.9,606.5,592.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M772.7,437.7c-13.3,0-25.8,4.8-35.8,13.2c32.3,25.2,55.5,55.6,66.8,89c15.4-10.2,24.9-27.3,24.9-46.3C828.6,462.7,803.6,437.7,772.7,437.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}
function Invisible(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 875 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
}
function Twitter(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 510 510",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zm-58.65 186.15c-2.55 117.3-76.5 198.9-188.7 204-45.9 2.55-79.05-12.75-109.65-30.6 33.15 5.101 76.5-7.649 99.45-28.05-33.15-2.55-53.55-20.4-63.75-48.45 10.2 2.55 20.4 0 28.05 0-30.6-10.2-51-28.05-53.55-68.85 7.65 5.1 17.85 7.65 28.05 7.65-22.95-12.75-38.25-61.2-20.4-91.8 33.15 35.7 73.95 66.3 140.25 71.4-17.85-71.4 79.051-109.65 117.301-61.2 17.85-2.55 30.6-10.2 43.35-15.3-5.1 17.85-15.3 28.05-28.05 38.25 12.75-2.55 25.5-5.1 35.7-10.2-2.551 12.75-15.301 22.95-28.051 33.15z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
}
function Telegram(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 240 240",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M49.9 119l80.8-33.3c8-3.5 35-14.6 35-14.6s12.5-4.9 11.4 6.9c-.3 4.9-3.1 21.8-5.9 40.2l-8.7 54.4s-.7 8-6.6 9.4-15.6-4.9-17.3-6.2c-1.4-1-26-16.6-35-24.3-2.4-2.1-5.2-6.2.3-11.1 12.5-11.4 27.4-25.7 36.4-34.7 4.2-4.2 8.3-13.9-9-2.1l-48.9 32.9s-5.6 3.5-16 .3-22.4-7.1-22.4-7.1-8.3-5.2 5.9-10.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
}
function Discord(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 875 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M347 419.5c-28.5 0-51 25-51 55.5s23 55.5 51 55.5c28.5 0 51-25 51-55.5.5-30.5-22.5-55.5-51-55.5zm182.5 0c-28.5 0-51 25-51 55.5s23 55.5 51 55.5c28.5 0 51-25 51-55.5s-22.5-55.5-51-55.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M772.5 0h-670C46 0 0 46 0 103v676c0 57 46 103 102.5 103h567L643 789.5l64 59.5 60.5 56 107.5 95V103C875 46 829 0 772.5 0zm-193 653s-18-21.5-33-40.5C612 594 637 553 637 553c-20.5 13.5-40 23-57.5 29.5-25 10.5-49 17.5-72.5 21.5-48 9-92 6.5-129.5-.5C349 598 324.5 590 304 582c-11.5-4.5-24-10-36.5-17-1.5-1-3-1.5-4.5-2.5-1-.5-1.5-1-2-1.5-9-5-14-8.5-14-8.5s24 40 87.5 59c-15 19-33.5 41.5-33.5 41.5-110.5-3.5-152.5-76-152.5-76 0-161 72-291.5 72-291.5 72-54 140.5-52.5 140.5-52.5l5 6c-90 26-131.5 65.5-131.5 65.5s11-6 29.5-14.5c53.5-23.5 96-30 113.5-31.5 3-.5 5.5-1 8.5-1 30.5-4 65-5 101-1 47.5 5.5 98.5 19.5 150.5 48 0 0-39.5-37.5-124.5-63.5l7-8s68.5-1.5 140.5 52.5c0 0 72 130.5 72 291.5 0 0-42.5 72.5-153 76z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}
function Github(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1024 1024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M512 0C229.1 0 0 229.1 0 512c0 226.6 146.6 417.9 350.1 485.8 25.6 4.5 35.2-10.9 35.2-24.3 0-12.2-.6-52.5-.6-95.4-128.6 23.7-161.9-31.4-172.2-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-.6-33.9 40.3-.6 69.1 37.1 78.7 52.5 46.1 77.4 119.7 55.7 149.1 42.2 4.5-33.3 17.9-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 19.8-101.8 52.5-137.6-5.1-12.8-23-65.3 5.1-135.7 0 0 42.9-13.4 140.8 52.5 41-11.5 84.5-17.3 128-17.3s87 5.8 128 17.3c97.9-66.6 140.8-52.5 140.8-52.5 28.2 70.4 10.2 122.9 5.1 135.7 32.6 35.8 52.5 81.3 52.5 137.6 0 196.5-119.7 240-233.6 252.8 18.6 16 34.6 46.7 34.6 94.7 0 68.5-.6 123.5-.6 140.8 0 13.4 9.6 29.4 35.2 24.3C877.4 929.9 1024 737.9 1024 512 1024 229.1 794.9 0 512 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
}
function Bitcointalk(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 90.8 132",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M35.1 36v21.1h17.6c2.9 0 5.5-1.2 7.5-3.1 1.9-1.9 3.1-4.6 3.1-7.5S62.1 41 60.2 39c-1.9-1.9-4.6-3.1-7.5-3.1l-17.6.1zm23.1 75.2V132H42.9v-20.7h-5.3V132H22.3v-20.7H.2L3.1 96h10.1c3.7 0 6.6-3 6.6-6.6V42.5c0-3.7-3-6.6-6.6-6.6H0V20.5h22.3V0h15.3v20.6h5.3V0h15.3v21.2c5 1.1 9.4 3.6 12.9 7 4.7 4.7 7.6 11.2 7.6 18.3 0 4.8-1.3 9.2-3.6 13.1 2.9 1.4 5.5 3.2 7.8 5.4 4.9 4.9 7.9 11.7 7.9 19.1 0 7.4-3 14.2-7.9 19.1s-11.7 7.9-19.1 7.9l-5.6.1zM35.1 72.5v23.4h28.7c3.2 0 6.1-1.3 8.3-3.4 2.1-2.1 3.4-5.1 3.4-8.3 0-3.2-1.3-6.1-3.4-8.3s-5.1-3.4-8.3-3.4H35.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
}
function Unlock(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M806.3 500c17 0 31.5 6 43.4 17.9 11.9 11.9 17.9 26.4 17.9 43.4v367.5c0 17-6 31.5-17.9 43.4-12 11.8-26.4 17.8-43.4 17.8H193.8c-17 0-31.5-6-43.4-17.9-11.9-11.9-17.9-26.4-17.9-43.4V561.3c0-17 6-31.5 17.9-43.4 11.9-11.9 26.4-17.9 43.4-17.9h20.4V295.8c0-78.7 28-146 83.9-201.9C354 38 421.3 10 500 10s146 28 201.9 83.9c55.9 55.9 83.9 123.2 83.9 201.9 0 11.1-4 20.6-12.1 28.7-8.1 8.1-17.7 12.1-28.7 12.1h-40.8c-11.1 0-20.6-4-28.7-12.1-8.1-8.1-12.1-17.7-12.1-28.7 0-45.1-16-83.6-47.9-115.5-31.9-31.9-70.4-47.9-115.5-47.9-45.1 0-83.6 16-115.5 47.9s-47.9 70.4-47.9 115.5V500h469.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }));
}
function Setting(props) {
  var size = props.size;
  var color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M430.8 14.3c-16 2.1-29.8 4.6-30.6 5.5-.8.8-21.8 134.3-21.8 139.4 0 .4-15.5 8-34.4 17.2-19.3 9.2-43.6 23.5-54.6 31.9-10.9 8.4-21.4 15.1-23.5 15.1s-31.9-11.3-66.3-24.8l-62.5-24.8-9.2 8.8c-25.6 23.5-87.3 130.9-90.2 157-.8 7.5 9.2 18 50.8 51.2l52.5 42 .4 67.6.4 67.6-54.2 42c-61.3 48.3-58.3 39-30.2 99.1 18.5 39.5 53.3 93.6 70.5 109.1l9.2 8.8 62.5-24.8c34.4-13.4 64.2-24.8 66.3-24.8s12.6 6.7 23.5 15.1c10.9 8.4 35.3 22.7 54.6 31.9 18.9 9.2 34.4 16.8 34.4 17.2s4.6 30.6 10.1 67.2c5 36.5 11.3 68 13.9 70.5 8.4 8.4 95.3 13.8 144.8 8.8 25.6-2.5 48.7-6.7 50.8-8.8 2.5-2.5 22.7-117.1 23.9-137.7 0-.8 12.6-6.7 27.7-13.8 15.1-6.7 39.5-21 54.6-31.5s29-18.9 30.6-18.9 31.5 11.3 65.9 24.8l62.5 25.2 14.3-15.5c21-23.1 49.5-68.4 67.6-107 25.6-55 28.5-46.6-32.3-94.4l-53.7-42.4V432.8l52.5-41.5c41.1-33.2 52-44.1 51.2-51.2-3.4-26.9-64.6-133.9-90.2-157.4l-9.2-8.8-63 24.8c-34.4 13.4-64.6 24.8-66.3 24.8-2.1 0-12.2-6.7-23.1-15.1-10.9-8.4-35.3-22.7-54.2-31.9-30.6-14.7-34.8-18.1-36.9-29.8-1.3-7.6-5.9-39-10.9-70.1-4.6-31.1-8.8-56.7-9.2-57.1-.4-.4-16.8-2.9-36.1-5.5-41.4-5.6-91.4-5.1-132.9.3zm133 353.4c29 14.7 53.7 39 69.3 69.7 10.5 20.6 11.8 27.7 11.8 63s-1.3 42.4-11.8 63c-15.5 30.2-40.3 55-69.3 69.7-21.4 10.9-28.1 12.2-63.8 12.2-35.3 0-42.8-1.3-63.4-11.8-28.1-13.4-59.6-45.8-72.2-73.5-13-28.1-13-91.1-.4-118.8 9.6-21 33.6-49.1 52.9-63 38.6-27.7 102.4-32.3 146.9-10.5z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }));
}
function Menu(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M4 10h24c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm24 4H4c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2zm0 8H4c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
}
function ContentCopy(props) {
  var size = props.size;
  var color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M702.5 0H157.1c-50.2 0-90.9 40.7-90.9 90.9v636.4h90.9V90.9h545.5L702.5 0zm136.4 181.8h-500c-50.2 0-90.9 40.7-90.9 90.9v636.4c0 50.2 40.7 90.9 90.9 90.9h500c50.2 0 90.9-40.7 90.9-90.9V272.7c0-50.2-40.7-90.9-90.9-90.9zm0 727.3h-500V272.7h500v636.4z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }));
}
function Eye(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M569.4 231.6C513 135.9 407.8 72 288 72 168.1 72 63 136 6.6 231.6c-8.9 15-8.9 33.7 0 48.7C63 376.1 168.2 440 288 440c119.9 0 225-64 281.4-159.6 8.8-15.1 8.8-33.7 0-48.8zM288 392c-102.6 0-192.1-54.7-240-136 44.2-74.9 123.7-127.3 216.2-135 9.8 10.1 15.8 23.8 15.8 39 0 30.9-25.1 56-56 56s-56-25.1-56-56c-10.2 19.1-16 40.9-16 64 0 75.1 60.9 136 136 136s136-60.9 136-136c0-31-10.4-59.6-27.9-82.5C451.7 164.6 498 205.1 528 256c-47.9 81.3-137.4 136-240 136z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }));
}
function EyeSlash(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M303.3 359.1c80.5-9 136.2-86.9 116.9-167l-116.9 167zM288 392c102.6 0 192.1-54.7 240-136-21.8-36.9-52.1-68.3-88.3-91.7l27.5-39.3c41.8 27.2 76.9 63.7 102.2 106.6 8.9 15 8.9 33.7 0 48.7C513 376 407.9 440 288 440c-13.3 0-26.5-.8-39.6-2.4l32-45.7c2.5.1 5.1.1 7.6.1zM6.6 280.4C39.8 336.8 90 382.1 150.2 409.9l-48.1 68.7c-3.8 5.4-2.5 12.9 2.9 16.7l20.7 14.5c5.4 3.8 12.9 2.5 16.7-2.9L473.9 33.4c3.8-5.4 2.5-12.9-2.9-16.7L450.2 2.2c-5.4-3.8-12.9-2.5-16.7 2.9L378 84.4C349.4 76.3 319.2 72 288 72 168.1 72 63 136 6.6 231.6c-8.8 15.1-8.8 33.7 0 48.8zM48 256c44.2-74.9 123.7-127.3 216.2-135 9.8 10.1 15.8 23.8 15.8 39 0 30.9-25.1 56-56 56s-56-25.1-56-56c-30.6 57.3-16.7 130.3 36.9 171.7l-26.7 38.1C123.4 346.6 77.7 306.4 48 256z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }));
}
function Redo(props) {
  var size = props.size;
  var color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M959.1 305.9c-27.3-63.9-63.6-114.2-104.5-159.8-45.5-45.7-100-82.2-159.1-105C631.8 13.6 568.2-.1 500-.1c-63.6 0-127.3 13.7-186.4 36.5S200 95.8 154.5 136.9L72.7 54.7C59.1 41 40.9 36.5 27.3 45.6 9.1 54.7 0 63.9 0 82.1v292.2c0 9.1 4.5 22.8 13.6 27.4 9.1 9.1 18.2 13.7 27.3 13.7h290.9c18.2 4.6 31.8-4.6 40.9-22.8s4.5-32-9.1-45.7l-90.9-91.3c31.8-27.4 63.6-50.2 104.5-63.9 40.9-13.7 81.8-22.8 122.7-22.8 45.5 0 86.4 9.1 127.3 27.4s77.3 41.1 104.5 73.1c31.8 32 54.5 63.9 72.7 105 18.2 41.1 27.3 82.2 27.3 127.9s-9.1 86.8-27.3 127.9c-18.2 41.1-40.9 77.6-72.7 105-31.8 32-63.6 54.8-104.5 73.1-40.9 18.3-86.4 27.4-127.3 27.4-50 0-100-9.1-145.5-32s-86.4-54.8-118.2-95.9c-4.5-4.6-9.1-9.1-13.6-9.1s-13.6 0-18.2 4.6l-90.9 91.3c-4.5 4.6-4.5 9.1-4.5 13.7s0 9.1 4.5 13.7C159 881.4 218 922.5 286.2 954.4c68.2 32 136.4 45.7 213.6 45.7 68.2 0 131.8-13.7 195.5-41.1s113.6-63.9 159.1-105c45.6-45.8 82-100.6 104.7-160 27.3-63.9 40.9-127.9 40.9-196.3 0-64-13.6-127.9-40.9-191.8",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }));
}
function Hush(props) {
  var size = props.size;
  var color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "st0",
    d: "M478 2c-5.1 1.4-9.3 4.3-15.3 10.3-13 13.2-12.7 10.7-12.7 97.2.1 65.9.3 73.5 2.3 70.9 5.3-7.2 11.4-12.6 18.3-16.2 6.1-3.1 9.3-3.9 19.4-4 18.6-.1 33.3 6.9 41.6 20.2 2.7 4.3 2.7 3.4 2.4-72.2-.4-74.4-.6-76.6-3.4-83.1C521.3 5.3 499.2-4.6 478 2zM317.4 49.8c-15 2-26.7 10.4-33.2 24.2l-3.7 7.9V452.2l4 8.1c9.3 18.9 29.3 27.6 50.3 21.9 7.7-2 10.6-3.7 17-10 14.2-14 13 4.7 13-205.2 0-177.3-.1-184-2.7-190.7-6.8-17.9-25.5-29.1-44.7-26.5zM658.9 49.9c-12.2 2.1-22.7 9.2-29 19.2-7.4 11.7-7.3 11.2-7.3 134.8.1 63.3.4 117.1 1 119.4 2.6 13.1 12.6 25.7 25 31.5 9.6 4.3 25.6 4.2 34.9-.6 9.2-4.6 16.3-12 20.9-21.5l3.7-7.9.1-117.2c0-64.5-.4-120-1.1-123.4-4.2-22.6-26.2-38.1-48.2-34.3zM151.6 142.6c-13.3 2.7-24.6 11.4-30.7 23.9l-3.3 6.9V791l4 8.1c14.4 29.3 54.9 31.7 73.6 4.6 7.3-10.6 7 1.6 6.7-324.4l-.1-304.6-3.2-7.2c-3.9-8.3-11.7-17-18.9-20.7-4.4-2.3-18.6-6-21.2-5.6-.5.2-3.6.8-6.9 1.4zM829.5 143.3c-13.1 3.9-21.9 11.4-27.6 23.6l-3.7 7.9v614.8l4 8.6c7.6 16.2 20.2 24 38.2 24.2 18.3 0 31.6-8.4 39.2-24.7l3-6.6V173.3l-3.3-6.9c-1.7-3.7-5.4-9-8.2-11.7-9.8-10-28.8-15.3-41.6-11.4zM475 250.4c-8.3 3.9-16.9 12-21.2 20.2-3 5.6-3.1 7.4-3.6 65.8-.3 32.9-.1 61.2.3 62.9.4 1.6 3.6 5.7 6.9 9.3 3.4 3.6 9.7 10.7 14 15.7 4.3 5.1 8.1 9.6 8.6 10 .4.4 2.9 3.3 5.6 6.4 25.2 29.6 30.5 33.2 42 28.6 6.7-2.7 6.7-3.4 6.7-99l-.1-89.8-4-8.6c-9.7-21.2-35-31.1-55.2-21.5zM656 443c-12 2.3-22.3 10.4-29.2 23.3l-3.2 5.9v407.5l3.3 6.3c8.6 16 21 23.6 38.9 23.6 21.5-.1 37.6-13.3 41.2-33.6 1.7-9.7 1.3-397.8-.4-403.8-2.1-7.6-9.6-17.7-17-23.3-7.7-5.8-21.4-8.1-33.6-5.9zM453.7 553.7c-2.1 2-3.7 5-3.9 7.4V637c0 81.5-.1 80.6 10.9 92.9 10.7 12 28.2 17 43 12.4 12.6-3.7 25-16.3 28.5-28.6.7-2.4 1.3-23.2 1.4-46l.3-41.9-15-17.5c-8.3-9.7-18.4-21.5-22.6-26.2-9.6-11-11.4-13.2-18.4-21.5-9.6-10.9-17.3-13.4-24.2-6.9zM311 569.3c-13 3.4-23.3 13-28.4 26.5-2.6 7-2.7 12.7-2.7 143.1 0 133.5.1 136 3 143.7 6.3 16.9 24 28.5 41.9 27.2 16.9-1.1 28.6-9.2 36.3-25l3.9-7.9V739.6c.1-94.7-.3-138.7-1.4-141.7-4.3-12.7-17.2-25.6-28.6-28.5-7.7-1.9-17.1-1.9-24-.1zM449.3 890.1c0 41.5.7 77.2 1.4 79.6 3.6 12.4 15.9 24.9 28.6 28.7 13.7 4 31.7-.1 41.9-9.9 2.7-2.6 6.6-7.9 8.6-11.7l3.9-7.1.3-77.7.4-77.8-6.4 7c-3.4 4-10 9-14.6 11.3-7 3.6-10.1 4.3-20.4 4.4-10.7.3-13.4-.3-20.9-3.6-5.1-2.4-11.6-7-15.9-11.3l-7.3-7.4.4 75.5z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/lib/hdwallet.js":
/*!****************************************!*\
  !*** ./src/components/lib/hdwallet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {var bitcoinjs = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");

var bip32utils = __webpack_require__(/*! bip32-utils */ "./node_modules/bip32-utils/index.js"); //var hushjs = require('hushjs');
//var bs58check = require('bs58check');
// Hierarchical Deterministic wallet


function phraseToHDWallet(phraseStr) {
  // Seed key, make it fucking strong
  // phraseStr: string
  var seedHex = Buffer.from(phraseStr).toString('hex'); // chains

  var hdNode = bitcoinjs.HDNode.fromSeedHex(seedHex);
  var chain = new bip32utils.Chain(hdNode); // Creates 43 address from the same chain

  for (var k = 0; k < 42; k++) {
    chain.next();
  } // Get private keys from them


  var privateKeys = chain.getAll().map(function (x) {
    return chain.derive(x).keyPair.toWIF();
  });
  return privateKeys;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  phraseToHDWallet: phraseToHDWallet
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/components/lib/hushjs/address.js":
/*!**********************************************!*\
  !*** ./src/components/lib/hushjs/address.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var bs58check = __webpack_require__(/*! bs58check */ "./node_modules/bs58check/index.js");

var secp256k1 = __webpack_require__(/*! secp256k1 */ "./node_modules/secp256k1/elliptic.js");

var zcrypto = __webpack_require__(/*! ./crypto */ "./src/components/lib/hushjs/crypto.js");

var zconfig = __webpack_require__(/*! ./config */ "./src/components/lib/hushjs/config.js");
/*
 * Makes a private key
 * @param {String} phrase (Password phrase)
 * @return {Sting} Private key
 */


function mkPrivKey(phrase) {
  return zcrypto.sha256(Buffer.from(phrase, 'utf-8'));
}
/*
 * Converts a private key to WIF format
 * @param {String} privKey (private key)
 * @param {boolean} toCompressed (Convert to WIF compressed key or nah)
 * @param {string} wif (wif hashing bytes (default: 0x80))
 * @return {Sting} WIF format (uncompressed)
 */


function privKeyToWIF(privKey, toCompressed, wif) {
  toCompressed = toCompressed || false;
  wif = wif || zconfig.mainnet.wif;
  if (toCompressed) privKey = privKey + '01';
  return bs58check.encode(Buffer.from(wif + privKey, 'hex'));
}
/*
 * Returns private key's public Key
 * @param {String} privKey (private key)
 * @param {boolean} toCompressed (Convert to public key compressed key or nah)
 * @return {Sting} Public Key (default: uncompressed)
 */


function privKeyToPubKey(privKey, toCompressed) {
  toCompressed = toCompressed || false;
  var pkBuffer = Buffer.from(privKey, 'hex');
  var publicKey = secp256k1.publicKeyCreate(pkBuffer, toCompressed);
  return publicKey.toString('hex');
}
/*
 * Given a WIF format pk, convert it back to the original pk
 * @param {String} privKey (private key)
 * @return {Sting} Public Key (uncompressed)
 */


function WIFToPrivKey(wifPk) {
  var og = bs58check.decode(wifPk, 'hex').toString('hex');
  og = og.substr(2, og.length); // remove WIF format ('80')
  // remove the '01' at the end to 'compress it' during WIF conversion

  if (og.length > 64) {
    og = og.substr(0, 64);
  }

  return og;
}
/*
 * Converts public key to hush address
 * @param {String} pubKey (public key)
 * @param {String} pubKeyHash (public key hash (optional, else use defaul))
 * @return {Sting} hush address
 */


function pubKeyToAddr(pubKey, pubKeyHash) {
  pubKeyHash = pubKeyHash || zconfig.mainnet.pubKeyHash;
  var hash160 = zcrypto.hash160(Buffer.from(pubKey, 'hex'));
  return bs58check.encode(Buffer.from(pubKeyHash + hash160, 'hex')).toString('hex');
}

module.exports = {
  mkPrivKey: mkPrivKey,
  privKeyToWIF: privKeyToWIF,
  privKeyToPubKey: privKeyToPubKey,
  pubKeyToAddr: pubKeyToAddr,
  WIFToPrivKey: WIFToPrivKey
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/components/lib/hushjs/config.js":
/*!*********************************************!*\
  !*** ./src/components/lib/hushjs/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
config.js - Configuration for Hush Coin
*/
module.exports = {
  mainnet: {
    messagePrefix: 'HUSH mainnet',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
    },
    pubKeyHash: '3c',
    scriptHash: '55',
    zcPaymentAddressHash: '169a',
    zcSpendingKeyHash: 'ab36',
    wif: 'BC'
  },
  testnet: {
    messagePrefix: 'HUSH testnet',
    bip32: {
      public: '043587cf',
      private: '04358394'
    },
    pubKeyHash: '3c',
    scriptHash: '55',
    zcPaymentAddressHash: '16b6',
    zcSpendingKeyHash: 'ac08',
    wif: 'ef'
  }
};

/***/ }),

/***/ "./src/components/lib/hushjs/crypto.js":
/*!*********************************************!*\
  !*** ./src/components/lib/hushjs/crypto.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* 
 * Obtained from https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/crypto.js
 * 2017/07/25: No ripemd160 in SJCL, so resorted to this
 */
var createHash = __webpack_require__(/*! create-hash */ "./node_modules/create-hash/browser.js");

function ripemd160(buffer) {
  return createHash('rmd160').update(buffer).digest('hex');
}

function sha1(buffer) {
  return createHash('sha1').update(buffer).digest('hex');
}

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function sha256x2(buffer) {
  return sha256(Buffer.from(sha256(buffer), 'hex'));
}

function hash160(buffer) {
  var sha = sha256(buffer);
  var hash160 = ripemd160(Buffer.from(sha, 'hex'));
  return hash160;
}

module.exports = {
  hash160: hash160,
  ripemd160: ripemd160,
  sha1: sha1,
  sha256: sha256,
  sha256x2: sha256x2
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/components/lib/utils.js":
/*!*************************************!*\
  !*** ./src/components/lib/utils.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);
 // Append url

function urlAppend(url, param) {
  if (url.substr(-1) !== '/') {
    url = url + '/';
  }

  return url + param;
} // Debounce promise


function promiseDebounce(fn, delay, count) {
  var working = 0,
      queue = [];

  function work() {
    if (queue.length === 0 || working === count) return;
    working++;
    bluebird__WEBPACK_IMPORTED_MODULE_0___default.a.delay(delay).tap(function () {
      working--;
    }).then(work);
    var next = queue.shift();
    next[2](fn.apply(next[0], next[1]));
  }

  return function debounced() {
    var args = arguments;
    return new bluebird__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
      queue.push([this, args, resolve]);
      if (working < count) work();
    }.bind(this));
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  promiseDebounce: promiseDebounce,
  urlAppend: urlAppend
});

/***/ }),

/***/ "./src/components/pages/Contact.jsx":
/*!******************************************!*\
  !*** ./src/components/pages/Contact.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZContact; });
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _images_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/svg */ "./src/components/images/svg.js");





var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\pages\\Contact.jsx";










var ColoredLine = function ColoredLine(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
    style: {
      color: color,
      backgroundColor: color,
      height: 0.25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
};

var styles = {
  center: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    fontWeight: 'normal'
  },
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  marginRight: {
    margin: '10px'
  }
};

var ZContact =
/*#__PURE__*/
function (_React$Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZContact, _React$Component);

  function ZContact() {
    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZContact);

    return Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZContact).apply(this, arguments));
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZContact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ColoredLine, {
        color: "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: styles.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "JOIN US!"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: styles.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Hush"), " is a community project. Everyone is welcomed with open arms!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: styles.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://myhush.org/discord/index.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Discord"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Invisible"], {
        size: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://twitter.com/MyHushTeam",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Twitter"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Invisible"], {
        size: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://t.me/Hush_Coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Telegram"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Invisible"], {
        size: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://reddit.com/r/Myhush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Reddit"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Invisible"], {
        size: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://bitcointalk.org/index.php?topic=2008578.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Bitcointalk"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Invisible"], {
        size: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/MyHush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Github"], {
        size: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: styles.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Copyright \xA9 2016-2020 The Hush developers. All rights reserved.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), "v2.0.10"))));
    }
  }]);

  return ZContact;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/pages/Faq.jsx":
/*!**************************************!*\
  !*** ./src/components/pages/Faq.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZFaq; });
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\pages\\Faq.jsx";



var ColoredLine = function ColoredLine(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
    style: {
      color: color,
      backgroundColor: color,
      height: 0.25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

var styles = {
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  }
};

var ZFaq =
/*#__PURE__*/
function (_React$Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZFaq, _React$Component);

  function ZFaq() {
    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZFaq);

    return Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZFaq).apply(this, arguments));
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZFaq, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ColoredLine, {
        color: "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Are my private keys secured?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.normal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Yes they are secured, your private keys never leave your browser.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "How is this secure? Its on a web browser!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.normal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "My Hush Wallet has replicated the core features of the HUSH daemon in JavaScript!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.normal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "So the process of creating and signing the transactions are all done within the browser."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.normal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "No sensitive information is sent through the network.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Can I have the source code?"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/myhush/myhushwallet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Here you go")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.bold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Why are you doing this?"), "My Hush Wallet was inspired by", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://myzenwallet.io/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "MyZenWallet's"), " which was inspired by", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://myetherwallet.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "MyEtherWallet's."), " We also want to provide the people the ability to interact with the HUSH blockchain easily, without having to run a full node."))));
    }
  }]);

  return ZFaq;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/pages/Guide.jsx":
/*!****************************************!*\
  !*** ./src/components/pages/Guide.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZGuide; });
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _images_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/svg */ "./src/components/images/svg.js");





var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\pages\\Guide.jsx";





var ColoredLine = function ColoredLine(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
    style: {
      color: color,
      backgroundColor: color,
      height: 0.25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

var ZGuide =
/*#__PURE__*/
function (_React$Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZGuide, _React$Component);

  function ZGuide() {
    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZGuide);

    return Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZGuide).apply(this, arguments));
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZGuide, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Getting Started"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ColoredLine, {
        color: "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "1. Creating a new wallet"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Go to ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://MyHush.github.io/myhushwallet/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "https://MyHush.github.io/myhushwallet/")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Enter a strong but easy to remember secret phrase. Save this somewhere and do NOT forget it."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Click the ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Unlock Button"), " (", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Unlock"], {
        size: "15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), ") on the right."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "This creates a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://en.bitcoin.it/wiki/Deterministic_wallet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "deterministic wallet"), " based on your secret phrase."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "2. Accessing an existing wallet"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "If you've created a wallet on ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://MyHush.github.io/myhushwallet/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "https://MyHush.github.io/myhushwallet/"), " via the secret phrase, simply re-enter the same phrase."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "For those with a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "wallet.dat"), " file generated by GUI wallets. Click ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "settings"), " (", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Setting"], {
        size: "15",
        color: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), "), select the ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Load wallet.dat"), " option and load your ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "wallet.dat"), " file"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "To unlock a single address, Click ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "settings"), " (", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Setting"], {
        size: "15",
        color: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), "), select the ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Paste private key"), " option, paste in your private key and click the unlock button (", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_7__["Unlock"], {
        size: "15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), ")")))));
    }
  }]);

  return ZGuide;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/pages/Wallet.jsx":
/*!*****************************************!*\
  !*** ./src/components/pages/Wallet.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZWallet; });
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bitgo-utxo-lib */ "./node_modules/bitgo-utxo-lib/src/index.js");
/* harmony import */ var bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/hushjs/address */ "./src/components/lib/hushjs/address.js");
/* harmony import */ var _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/hushjs/config */ "./src/components/lib/hushjs/config.js");
/* harmony import */ var _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/utils */ "./src/components/lib/utils.js");
/* harmony import */ var _lib_hdwallet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/hdwallet */ "./src/components/lib/hdwallet.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/svg */ "./src/components/images/svg.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);






var _jsxFileName = "D:\\git\\myhushwallet\\src\\components\\pages\\Wallet.jsx";


















 // Throttled GET request to prevent unusable lag

var throttledAxiosGet = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].promiseDebounce(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get, 1000, 5); // Unlock wallet enum

var UNLOCK_WALLET_TYPE = {
  IMPORT_WALLET: 0,
  HD_WALLET: 1,
  PASTE_PRIV_KEY: 2 // Components

};

var ToolTipButton =
/*#__PURE__*/
function (_React$Component) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ToolTipButton, _React$Component);

  function ToolTipButton(props) {
    var _this;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToolTipButton);

    _this = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ToolTipButton).call(this, props));
    _this.toggle = _this.toggle.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      tooltipOpen: false
    };
    return _this;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ToolTipButton, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        disabled: this.props.disabled,
        onClick: this.props.onClick,
        className: "mr-1",
        color: "secondary",
        id: 'Tooltip-' + this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.buttonText), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        placement: "top",
        isOpen: this.state.tooltipOpen,
        target: 'Tooltip-' + this.props.id,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.tooltipText));
    }
  }]);

  return ToolTipButton;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWalletGenerator =
/*#__PURE__*/
function (_React$Component2) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWalletGenerator, _React$Component2);

  function ZWalletGenerator(props) {
    var _this2;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWalletGenerator);

    _this2 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWalletGenerator).call(this, props));
    _this2.handlePasswordPhrase = _this2.handlePasswordPhrase.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2)));
    _this2.state = {
      passwordPhrase: '',
      privateKey: ''
    };
    return _this2;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWalletGenerator, [{
    key: "handlePasswordPhrase",
    value: function handlePasswordPhrase(e) {
      // What wif format do we use?
      var wifHash = this.props.settings.useTestNet ? _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.testnet.wif : _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.mainnet.wif;
      var pk = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.mkPrivKey(e.target.value);
      var pkwif = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.privKeyToWIF(pk, true, wifHash);

      if (e.target.value === '') {
        pkwif = '';
      }

      this.setState({
        privateKey: pkwif
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "display-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Generate New Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handlePasswordPhrase,
        placeholder: "Password phrase. Do NOT forget to save this! Use >15 words to be safe.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        value: this.state.privateKey,
        placeholder: "Private key generated from password phrase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default.a, {
        text: this.state.privateKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["ContentCopy"], {
        size: "15",
        color: "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))))));
    }
  }]);

  return ZWalletGenerator;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWalletUnlockKey =
/*#__PURE__*/
function (_React$Component3) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWalletUnlockKey, _React$Component3);

  function ZWalletUnlockKey(props) {
    var _this3;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWalletUnlockKey);

    _this3 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWalletUnlockKey).call(this, props));
    _this3.unlockHDWallet = _this3.unlockHDWallet.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3)));
    _this3.loadWalletDat = _this3.loadWalletDat.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3)));
    _this3.toggleShowPassword = _this3.toggleShowPassword.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3)));
    _this3.unlockPrivateKeys = _this3.unlockPrivateKeys.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3)));
    _this3.state = {
      showPassword: false,
      secretPhrase: '',
      invalidPrivateKey: false,
      secretPhraseTooShort: false,
      // Style for input button
      inputFileStyle: {
        WebkitAppearance: 'button',
        cursor: 'pointer'
      }
    };
    return _this3;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWalletUnlockKey, [{
    key: "toggleShowPassword",
    value: function toggleShowPassword() {
      this.setState({
        showPassword: !this.state.showPassword
      });
    }
  }, {
    key: "unlockPrivateKeys",
    value: function unlockPrivateKeys() {
      // Success = return 0
      var success = this.props.handleUnlockPrivateKeys() === 0;

      if (!success) {
        this.setState({
          invalidPrivateKey: true
        });
      }
    }
  }, {
    key: "unlockHDWallet",
    value: function unlockHDWallet() {
      try {
        // Generate private keys from secret phrase
        var pk = _lib_hdwallet__WEBPACK_IMPORTED_MODULE_17__["default"].phraseToHDWallet(this.state.secretPhrase);
        this.setState({
          secretPhraseTooShort: false
        }); // Set private key and unlock them (we know it'll work so no need to validate)

        this.props.setPrivateKeys(pk, true);
      } catch (err) {
        this.setState({
          secretPhraseTooShort: true
        });
      }
    }
  }, {
    key: "loadWalletDat",
    value: function loadWalletDat(e) {
      var _this4 = this;

      var reader = new FileReader();
      var file = e.target.files[0]; // Read file callback function

      reader.onloadend = function () {
        // Get reader results in bytes
        var dataHexStr = reader.result; // Retrieve private keys from wallet.dat
        // Source: https://gist.github.com/moocowmoo/a715c80399bb202a65955771c465530c

        var re = /\x30\x81\xD3\x02\x01\x01\x04\x20(.{32})/gm;
        var privateKeys = dataHexStr.match(re);
        privateKeys = privateKeys.map(function (x) {
          x = x.replace('\x30\x81\xD3\x02\x01\x01\x04\x20', '');
          x = Buffer.from(x, 'latin1').toString('hex');
          return x;
        }); // Set private key

        _this4.props.setPrivateKeys(privateKeys); // Unlock private key


        var success = _this4.props.handleUnlockPrivateKeys() === 0;

        if (!success) {
          _this4.setState({
            invalidPrivateKey: true
          });
        }
      }; // Read file


      reader.readAsBinaryString(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.props.unlockType === UNLOCK_WALLET_TYPE.IMPORT_WALLET) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
          row: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, this.state.invalidPrivateKey ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, "Error."), "\xA0Keys in files are corrupted") : '', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
          for: "walletDatFile",
          className: "btn btn-block btn-secondary",
          style: this.state.inputFileStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, "Select wallet.dat file", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          style: {
            display: 'none'
          },
          type: "file",
          name: "file",
          id: "walletDatFile",
          onChange: this.loadWalletDat,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormText"], {
          color: "muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, "For Windows, it should be in %APPDATA%/Roaming/Hush", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }), "For Mac/Linux, it should be in ~/.Hush"))));
      } else if (this.props.unlockType === UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, this.state.invalidPrivateKey ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, "Error."), "\xA0Invalid private key") : '', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          id: 4,
          onClick: this.toggleShowPassword,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, this.state.showPassword ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["Eye"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["EyeSlash"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: this.state.showPassword ? "text" : "password",
          onChange: function onChange(e) {
            return _this5.props.setPrivateKeys([e.target.value]);
          } // Set it in a list so we can map over it later
          ,
          placeholder: "Private key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            paddingTop: '8px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: "secondary",
          className: "btn-block",
          onClick: this.unlockPrivateKeys,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, "Unlock Private Key")));
      } else if (this.props.unlockType === UNLOCK_WALLET_TYPE.HD_WALLET) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "warning",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, "Warning."), "\xA0Make sure you have saved your secret phrase somewhere."), this.state.secretPhraseTooShort ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "Error."), "\xA0Secret phrase too short") : '', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          id: 7,
          onClick: this.toggleShowPassword,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, this.state.showPassword ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["Eye"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["EyeSlash"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: this.state.showPassword ? "text" : "password",
          maxLength: "64",
          onChange: function onChange(e) {
            return _this5.setState({
              secretPhrase: e.target.value
            });
          },
          placeholder: "Secret phrase. e.g. hush puppy washington heros paris money bag time grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            paddingTop: '8px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: "secondary",
          className: "btn-block",
          onClick: this.unlockHDWallet,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, "Generate Wallet / Login")));
      }
    }
  }]);

  return ZWalletUnlockKey;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWalletSettings =
/*#__PURE__*/
function (_React$Component4) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWalletSettings, _React$Component4);

  function ZWalletSettings() {
    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWalletSettings);

    return Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWalletSettings).apply(this, arguments));
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWalletSettings, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        isOpen: this.props.settings.showSettings,
        toggle: this.props.toggleModalSettings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
        toggle: this.props.toggleShowSettings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Hush Wallet Settings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZWalletSelectUnlockType, {
        setUnlockType: this.props.setUnlockType,
        unlockType: this.props.settings.unlockType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "Insight API"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        value: this.props.settings.insightAPI,
        onChange: function onChange(e) {
          return _this6.props.setInsightAPI(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        disabled: !(this.props.publicAddresses === null),
        defaultChecked: this.props.settings.compressPubKey,
        type: "checkbox",
        onChange: this.props.toggleCompressPubKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }), ' ', "Compress Public Key")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        defaultChecked: this.props.settings.showWalletGen,
        type: "checkbox",
        onChange: this.props.toggleShowWalletGen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), ' ', "Show Address Generator")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        disabled: !(this.props.publicAddresses === null),
        defaultChecked: this.props.settings.useTestNet,
        type: "checkbox",
        onChange: this.props.toggleUseTestNet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), ' ', "testnet")));
    }
  }]);

  return ZWalletSettings;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZAddressInfo =
/*#__PURE__*/
function (_React$Component5) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZAddressInfo, _React$Component5);

  function ZAddressInfo(props) {
    var _this7;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZAddressInfo);

    _this7 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZAddressInfo).call(this, props));
    _this7.updateAddressInfo = _this7.updateAddressInfo.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7)));
    _this7.updateAddressesInfo = _this7.updateAddressesInfo.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7)));
    _this7.getAddressBlockExplorerURL = _this7.getAddressBlockExplorerURL.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7)));
    _this7.state = {
      retrieveAddressError: false
    };
    return _this7;
  } // Updates all address info


  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZAddressInfo, [{
    key: "updateAddressesInfo",
    value: function updateAddressesInfo() {
      // The key is the address
      // Value is the private key
      Object.keys(this.props.publicAddresses).forEach(function (key) {
        if (key !== undefined) {
          this.updateAddressInfo(key);
        }
      }.bind(this));
    } // Gets the blockchain explorer URL for an address

  }, {
    key: "getAddressBlockExplorerURL",
    value: function getAddressBlockExplorerURL(address) {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.explorerURL, 'address/') + address;
    } // Updates a address info

  }, {
    key: "updateAddressInfo",
    value: function updateAddressInfo(address) {
      // GET request to URL
      var info_url = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.insightAPI, 'addr/');
      info_url = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(info_url, address + '?noTxList=1');
      throttledAxiosGet(info_url).then(function (response) {
        var data = response.data;
        this.props.setPublicAddressesKeyValue(address, 'confirmedBalance', data.balance);
        this.props.setPublicAddressesKeyValue(address, 'unconfirmedBalance', data.unconfirmedBalance);
        this.setState({
          retrieveAddressError: false
        });
      }.bind(this)).catch(function (error) {
        this.setState({
          retrieveAddressError: true
        });
      }.bind(this));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Run immediately
      this.updateAddressesInfo(); // Update every 30 seconds    

      this.interval = setInterval(this.updateAddressesInfo, 300000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      // Key is the address
      var addresses = [];
      var totalConfirmed = 0.0;
      var totalUnconfirmed = 0.0;
      Object.keys(this.props.publicAddresses).forEach(function (key) {
        if (key !== undefined) {
          // Add to address    
          addresses.push({
            address: key,
            privateKeyWIF: this.props.publicAddresses[key].privateKeyWIF,
            confirmedBalance: this.props.publicAddresses[key].confirmedBalance,
            unconfirmedBalance: this.props.publicAddresses[key].unconfirmedBalance
          });
          var c_confirmed = Number(this.props.publicAddresses[key].confirmedBalance);
          var c_unconfirmed = Number(this.props.publicAddresses[key].unconfirmedBalance);

          if (!isNaN(c_confirmed)) {
            totalConfirmed += c_confirmed * 100000000;
          }

          if (!isNaN(c_unconfirmed)) {
            totalUnconfirmed += c_unconfirmed * 100000000;
          }
        }
      }.bind(this));

      if (!isNaN(totalConfirmed)) {
        totalConfirmed = totalConfirmed / 100000000;
      }

      if (!isNaN(totalUnconfirmed)) {
        totalUnconfirmed = totalUnconfirmed / 100000000;
      }

      var addressColumns = [{
        Header: 'Address',
        accessor: 'address',
        headerStyle: {
          textAlign: "left"
        },
        style: {
          textAlign: "left"
        },
        resizable: true,
        Cell: function Cell(props) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            target: "_blank",
            href: _this8.getAddressBlockExplorerURL(props.value),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 454
            },
            __self: this
          }, props.value);
        }
      }, {
        Header: 'Confirmed',
        accessor: 'confirmedBalance',
        maxWidth: 166,
        headerStyle: {
          textAlign: "right"
        },
        style: {
          textAlign: "right"
        },
        Cell: function Cell(props) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 463
            },
            __self: this
          }, props.value);
        }
      }, {
        Header: 'Unconfirmed',
        accessor: 'unconfirmedBalance',
        maxWidth: 166,
        headerStyle: {
          textAlign: "right"
        },
        style: {
          textAlign: "right"
        },
        Cell: function Cell(props) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, props.value);
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, this.state.retrieveAddressError ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Error connecting to the Insight API. Double check the Insight API supplied in settings.") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        color: "warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "The balance displayed here is dependent on the insight node.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }), "Automatically updates every 5 minutes. Alternatively, you can ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this8.updateAddressesInfo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "forcefully refresh"), " them."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        columns: [{
          Header: 'Total Confirmed',
          accessor: 'totalConfirmed',
          headerStyle: {
            textAlign: "center" //fontWeight: "bold",
            //backgroundColor: "white",
            //color: "white"

          },
          style: {
            textAlign: "center"
          },
          Cell: function Cell(props) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              className: "number",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 500
              },
              __self: this
            }, props.value);
          }
        }, {
          Header: 'Total Unconfirmed',
          accessor: 'totalUnconfirmed',
          headerStyle: {
            textAlign: "center"
          },
          style: {
            textAlign: "center"
          },
          Cell: function Cell(props) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              className: "number",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 508
              },
              __self: this
            }, props.value);
          }
        }],
        data: [{
          totalConfirmed: totalConfirmed,
          totalUnconfirmed: totalUnconfirmed
        }],
        showPagination: false,
        minRows: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: addresses,
        columns: addressColumns,
        minRows: addresses.length > 20 ? 20 : addresses.length,
        showPagination: addresses.length > 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      })))));
    }
  }]);

  return ZAddressInfo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZSendHUSH =
/*#__PURE__*/
function (_React$Component6) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZSendHUSH, _React$Component6);

  function ZSendHUSH(props) {
    var _this9;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZSendHUSH);

    _this9 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZSendHUSH).call(this, props));
    _this9.setProgressValue = _this9.setProgressValue.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.setSendErrorMessage = _this9.setSendErrorMessage.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleUpdateSelectedAddress = _this9.handleUpdateSelectedAddress.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleUpdateRecipientAddress = _this9.handleUpdateRecipientAddress.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleUpdateAmount = _this9.handleUpdateAmount.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleCheckChanged = _this9.handleCheckChanged.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleUpdateFee = _this9.handleUpdateFee.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.handleSendHUSH = _this9.handleSendHUSH.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9)));
    _this9.state = {
      selectedAddress: '',
      // which address did we select
      recipientAddress: '',
      fee: '',
      amount: '',
      sentTxid: '',
      // Whats the send txid
      sendProgress: 0,
      // Progress bar, 100 to indicate complete
      sendErrorMessage: '',
      confirmSend: false
    };
    return _this9;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZSendHUSH, [{
    key: "handleUpdateSelectedAddress",
    value: function handleUpdateSelectedAddress(e) {
      this.setState({
        selectedAddress: e.target.value
      });
    }
  }, {
    key: "handleUpdateRecipientAddress",
    value: function handleUpdateRecipientAddress(e) {
      this.setState({
        recipientAddress: e.target.value
      });
    }
  }, {
    key: "handleUpdateFee",
    value: function handleUpdateFee(e) {
      this.setState({
        fee: e.target.value
      });
    }
  }, {
    key: "handleUpdateAmount",
    value: function handleUpdateAmount(e) {
      this.setState({
        amount: e.target.value
      });
    }
  }, {
    key: "handleCheckChanged",
    value: function handleCheckChanged(e) {
      this.setState({
        confirmSend: e.target.checked
      });
    }
  }, {
    key: "setProgressValue",
    value: function setProgressValue(v) {
      this.setState({
        sendProgress: v
      });
    }
  }, {
    key: "setSendErrorMessage",
    value: function setSendErrorMessage(msg) {
      this.setState({
        sendErrorMessage: msg
      });
    }
  }, {
    key: "handleSendHUSH",
    value: function handleSendHUSH() {
      var value = this.state.amount;
      var fee = this.state.fee;
      var recipientAddress = this.state.recipientAddress;
      var senderAddress = this.state.selectedAddress; // Convert how much we wanna send
      // to satoshis

      var satoshisToSend = Math.round(value * 100000000);
      var satoshisfeesToSend = Math.round(fee * 100000000); // Reset hush send progress and error message

      this.setProgressValue(1);
      this.setSendErrorMessage(''); // Error strings

      var errString = ''; // Validation    

      if (senderAddress === '') {
        errString += '`From Address` field can\'t be empty.;';
      }

      if (recipientAddress.length !== 34) {
        errString += 'Invalid address.;';
      }

      if (typeof parseInt(value) !== 'number' || value === '') {
        errString += 'Invalid amount.;';
      } // Can't send 0 satoshis


      if (satoshisToSend <= 0) {
        errString += 'Amount must be greater than 0.;';
      }

      if (typeof parseInt(fee) !== 'number' || fee === '') {
        errString += 'Invalid fee.;';
      }

      if (errString !== '') {
        this.setSendErrorMessage(errString);
        this.setProgressValue(0);
        return;
      } // Private key


      var senderPrivateKey = this.props.publicAddresses[senderAddress].privateKey;
      var wifHash = this.props.settings.useTestNet ? '80' : 'bc';

      if (senderPrivateKey.length !== 64) {
        senderPrivateKey = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.WIFToPrivKey(senderPrivateKey);
      }

      var senderPrivateKeyWIF = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.privKeyToWIF(senderPrivateKey, true, wifHash); // Get previous transactions

      var prevTxURL = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.insightAPI, 'addr/') + senderAddress + '/utxo';
      var infoURL = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.insightAPI, 'status?q=getInfo');
      var sendRawTxURL = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.insightAPI, 'tx/send'); // Building our transaction TXOBJ
      // How many satoshis do we have so far

      var satoshisSoFar = 0;
      var history = [];
      var recipients = [{
        address: recipientAddress,
        satoshis: satoshisToSend
      }]; // Get transactions and info

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(prevTxURL).then(function (tx_resp) {
        this.setProgressValue(25);
        var tx_data = tx_resp.data;
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(infoURL).then(function (info_resp) {
          this.setProgressValue(50);
          var info_data = info_resp.data;
          var expiryHeight = info_data.info.blocks + 30; //one hour
          // Iterate through each utxo
          // append it to history

          for (var i = 0; i < tx_data.length; i++) {
            if (tx_data[i].confirmations === 0) {
              continue;
            }

            history = history.concat({
              txid: tx_data[i].txid,
              vout: tx_data[i].vout,
              scriptPubKey: tx_data[i].scriptPubKey,
              satoshis: tx_data[i].satoshis
            }); // How many satoshis do we have so far

            satoshisSoFar = satoshisSoFar + tx_data[i].satoshis;

            if (satoshisSoFar >= satoshisToSend + satoshisfeesToSend) {
              break;
            }
          } // If we don't have enough address
          // fail and tell user


          if (satoshisSoFar < satoshisToSend + satoshisfeesToSend) {
            this.setSendErrorMessage('Not enough confirmed HUSH in account to perform transaction');
            this.setProgressValue(0);
          } // If we don't have exact amount
          // Refund remaining to current address


          if (satoshisSoFar !== satoshisToSend + satoshisfeesToSend) {
            var refundSatoshis = satoshisSoFar - satoshisToSend - satoshisfeesToSend;
            recipients = recipients.concat({
              address: senderAddress,
              satoshis: refundSatoshis
            });
          } // Creation of transaction


          var network = this.props.settings.useTestNet ? bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default.a.networks.komodo : bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default.a.networks.komodo; // komodo has bitcoin prefixes for testnet. Needs network specification in network.

          var maxFeeRate = satoshisfeesToSend;
          var txb = new bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default.a.TransactionBuilder(network, maxFeeRate);
          txb.setVersion(4);
          txb.setVersionGroupId(0x892F2085);
          txb.setExpiryHeight(expiryHeight); // Add Inputs/Outputs

          history.forEach(function (x) {
            return txb.addInput(x.txid, x.vout);
          });
          recipients.forEach(function (x) {
            return txb.addOutput(x.address, x.satoshis);
          });
          console.log(txb); // Sign

          var keyPair = bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default.a.ECPair.fromWIF(senderPrivateKeyWIF, network);
          var hashType = bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_13___default.a.Transaction.SIGHASH_ALL;

          for (var _i = 0; _i < txb.inputs.length; _i++) {
            txb.sign(_i, keyPair, null, hashType, history[_i].satoshis);
          }

          console.log(txb); // Make it rain

          var result = txb.build();
          var txHexString = result.toHex();
          axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(sendRawTxURL, {
            rawtx: txHexString
          }).then(function (sendtx_resp) {
            this.setState({
              sendProgress: 100,
              sentTxid: sendtx_resp.data.txid
            });
          }.bind(this)).catch(function (error) {
            this.setSendErrorMessage(error + '');
            this.setProgressValue(0);
            return;
          }.bind(this));
        }.bind(this));
      }.bind(this)).catch(function (error) {
        this.setSendErrorMessage(error);
        this.setProgressValue(0);
        return;
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      // If send was successful
      var hushTxLink;

      if (this.state.sendProgress === 100) {
        var hushtx = _lib_utils__WEBPACK_IMPORTED_MODULE_16__["default"].urlAppend(this.props.settings.explorerURL, 'tx/') + this.state.sentTxid;
        hushTxLink = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 773
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774
          },
          __self: this
        }, "HUSH successfully sent!"), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: hushtx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774
          },
          __self: this
        }, "Click here to view your transaction"));
      } // Else show error why
      else if (this.state.sendErrorMessage !== '') {
          hushTxLink = this.state.sendErrorMessage.split(';').map(function (s) {
            if (s !== '') {
              return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
                color: "danger",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 785
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 786
                },
                __self: this
              }, "Error."), " ", s);
            }
          });
        } // Send addresses
      // Key is the address btw


      var sendAddresses = [];
      Object.keys(this.props.publicAddresses).forEach(function (key) {
        if (key !== undefined) {
          sendAddresses.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 800
            },
            __self: this
          }, "[", this.props.publicAddresses[key].confirmedBalance, "] - ", key));
        }
      }.bind(this));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        __self: this
      }, "ALWAYS VALIDATE YOUR DESTINATION ADDRESS BY SENDING SMALL AMOUNTS OF HUSH FIRST"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, "From Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        onChange: this.handleUpdateSelectedAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 814
        },
        __self: this
      }), sendAddresses)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 818
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819
        },
        __self: this
      }, "To Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handleUpdateRecipientAddress,
        placeholder: "e.g RHushEyeDm7XwtaTWtyCbjGQumYyV8vMjn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        __self: this
      }, "Amount"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handleUpdateAmount,
        placeholder: "e.g 42",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        __self: this
      }, "Fee"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handleUpdateFee,
        placeholder: "e.g 0.001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handleCheckChanged,
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        __self: this
      }), ' ', "Yes, I would like to send these HUSH")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "warning",
        className: "btn-block",
        disabled: !this.state.confirmSend || this.state.sendProgress > 0 && this.state.sendProgress < 100,
        onClick: this.handleSendHUSH,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        },
        __self: this
      }, "Send")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        __self: this
      }, hushTxLink, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Progress"], {
        value: this.state.sendProgress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        __self: this
      })))));
    }
  }]);

  return ZSendHUSH;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWalletSelectUnlockType =
/*#__PURE__*/
function (_React$Component7) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWalletSelectUnlockType, _React$Component7);

  function ZWalletSelectUnlockType(props) {
    var _this10;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWalletSelectUnlockType);

    _this10 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWalletSelectUnlockType).call(this, props));
    _this10.state = {
      cSelected: _this10.props.unlockType
    };
    return _this10;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWalletSelectUnlockType, [{
    key: "onRadioBtnClick",
    value: function onRadioBtnClick(s) {
      this.setState({
        cSelected: s
      });
      this.props.setUnlockType(s);
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this11.onRadioBtnClick(UNLOCK_WALLET_TYPE.HD_WALLET);
        },
        active: this.state.cSelected === UNLOCK_WALLET_TYPE.HD_WALLET,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        __self: this
      }, "Enter secret phrase"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this11.onRadioBtnClick(UNLOCK_WALLET_TYPE.IMPORT_WALLET);
        },
        active: this.state.cSelected === UNLOCK_WALLET_TYPE.IMPORT_WALLET,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875
        },
        __self: this
      }, "Load wallet.dat"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this11.onRadioBtnClick(UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY);
        },
        active: this.state.cSelected === UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 876
        },
        __self: this
      }, "Paste private key")));
    }
  }]);

  return ZWalletSelectUnlockType;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZPrintableKeys =
/*#__PURE__*/
function (_React$Component8) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZPrintableKeys, _React$Component8);

  function ZPrintableKeys(props) {
    var _this12;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZPrintableKeys);

    _this12 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZPrintableKeys).call(this, props));
    _this12.state = {
      selectedPublicAddress: '',
      selectedPrivateKey: ''
    };
    _this12.handleUpdateSelectedAddress = _this12.handleUpdateSelectedAddress.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this12)));
    return _this12;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZPrintableKeys, [{
    key: "handleUpdateSelectedAddress",
    value: function handleUpdateSelectedAddress(e) {
      var selectedPublicAddress = e.target.value;
      var selectedPrivateKey = selectedPublicAddress === '' ? '' : this.props.publicAddresses[selectedPublicAddress].privateKeyWIF;
      this.setState({
        selectedPublicAddress: selectedPublicAddress,
        selectedPrivateKey: selectedPrivateKey
      });
      console.log(selectedPrivateKey);
    }
  }, {
    key: "render",
    value: function render() {
      var sendAddresses = [];
      Object.keys(this.props.publicAddresses).forEach(function (key) {
        if (key !== undefined) {
          sendAddresses.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 912
            },
            __self: this
          }, "[", this.props.publicAddresses[key].confirmedBalance, "] - ", key));
        }
      }.bind(this));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        __self: this
      }, "Printable Wallet"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        onChange: this.handleUpdateSelectedAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921
        },
        __self: this
      }), sendAddresses), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924
        },
        __self: this
      }, this.state.selectedPublicAddress === '' ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        style: {
          textAlign: 'center',
          paddingTop: '75px',
          paddingBottom: '25px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 929
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 930
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        value: this.state.selectedPublicAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        },
        __self: this
      }), this.state.selectedPublicAddress), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 935
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        value: this.state.selectedPrivateKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        __self: this
      }), this.state.selectedPrivateKey))));
    }
  }]);

  return ZPrintableKeys;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWalletTabs =
/*#__PURE__*/
function (_React$Component9) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWalletTabs, _React$Component9);

  function ZWalletTabs(props) {
    var _this13;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWalletTabs);

    _this13 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWalletTabs).call(this, props));
    _this13.toggleTabs = _this13.toggleTabs.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this13)));
    _this13.savePrivateKeys = _this13.savePrivateKeys.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this13)));
    _this13.state = {
      activeTab: '1'
    };
    return _this13;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWalletTabs, [{
    key: "toggleTabs",
    value: function toggleTabs(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "savePrivateKeys",
    value: function savePrivateKeys() {
      // ISO 8601
      var now = new Date();
      now = now.toISOString().split('.')[0] + 'Z';
      var fileStr = '# Wallet dump created by myhushwallet ' + _package_json__WEBPACK_IMPORTED_MODULE_20__.version + '\n';
      fileStr += '# Created on ' + now + '\n\n\n';
      Object.keys(this.props.publicAddresses).forEach(function (key) {
        fileStr += this.props.publicAddresses[key].privateKeyWIF;
        fileStr += ' ' + now + ' label= # addr=' + key;
        fileStr += '\n';
      }.bind(this));
      var pkBlob = new Blob([fileStr], {
        type: 'text/plain;charset=utf-8'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_18___default.a.saveAs(pkBlob, now + '_myhushwallet_private_keys.txt');
    }
  }, {
    key: "render",
    value: function render() {
      var _this14 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 987
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 988
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 989
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this14.toggleTabs('1');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 990
        },
        __self: this
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 997
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this14.toggleTabs('2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 998
        },
        __self: this
      }, "Send HUSH")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1005
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
          active: this.state.activeTab === '3'
        }),
        onClick: function onClick() {
          _this14.toggleTabs('3');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1006
        },
        __self: this
      }, "Export"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabContent"], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1014
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1015
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZAddressInfo, {
        publicAddresses: this.props.publicAddresses,
        settings: this.props.settings,
        setPublicAddressesKeyValue: this.props.setPublicAddressesKeyValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1016
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1022
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZSendHUSH, {
        settings: this.props.settings,
        publicAddresses: this.props.publicAddresses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1023
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
        tabId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1028
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1029
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1030
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1031
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1032
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZPrintableKeys, {
        publicAddresses: this.props.publicAddresses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1033
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1035
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1036
        },
        __self: this
      }, "Private Key Dump"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "secondary",
        className: "btn-block",
        onClick: this.savePrivateKeys,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1037
        },
        __self: this
      }, "Download Private Keys"))))))));
    }
  }]);

  return ZWalletTabs;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ZWallet =
/*#__PURE__*/
function (_React$Component10) {
  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ZWallet, _React$Component10);

  function ZWallet(props) {
    var _this15;

    Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZWallet);

    _this15 = Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ZWallet).call(this, props));
    _this15.resetKeys = _this15.resetKeys.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.handleUnlockPrivateKeys = _this15.handleUnlockPrivateKeys.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.setPrivateKeys = _this15.setPrivateKeys.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.setInsightAPI = _this15.setInsightAPI.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.setUnlockType = _this15.setUnlockType.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.setPublicAddressesKeyValue = _this15.setPublicAddressesKeyValue.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.toggleUseTestNet = _this15.toggleUseTestNet.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.toggleCompressPubKey = _this15.toggleCompressPubKey.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.toggleShowSettings = _this15.toggleShowSettings.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.toggleShowWalletGen = _this15.toggleShowWalletGen.bind(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this15)));
    _this15.state = {
      privateKeys: '',
      publicAddresses: null,
      // Public address will be {address: {privateKey: '', transactionURL: '', privateKeyWIF: ''}
      settings: {
        showSettings: false,
        showWalletGen: false,
        compressPubKey: true,
        insightAPI: 'https://explorer.myhush.org/insight-api-komodo',
        explorerURL: 'https://explorer.myhush.org/',
        useTestNet: false,
        unlockType: UNLOCK_WALLET_TYPE.HD_WALLET
      }
    };
    return _this15;
  }

  Object(D_git_myhushwallet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ZWallet, [{
    key: "handleUnlockPrivateKeys",
    value: function handleUnlockPrivateKeys() {
      if (this.state.privateKeys.length === 0) {
        return -2;
      }

      try {
        var _privKeyToAddr = function _privKeyToAddr(pk, compressPubKey, useTestNet) {
          // If not 64 length, probs WIF format
          if (pk.length !== 64) {
            pk = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.WIFToPrivKey(pk);
          } // Convert public key to public address


          var pubKey = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.privKeyToPubKey(pk, compressPubKey); // Testnet or nah

          var pubKeyHash = useTestNet ? _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.testnet.pubKeyHash : _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.mainnet.pubKeyHash;
          var publicAddr = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.pubKeyToAddr(pubKey, pubKeyHash);
          return publicAddr;
        };

        var publicAddresses = {};

        for (var i = 0; i < this.state.privateKeys.length; i++) {
          var pubKeyHash = this.state.settings.useTestNet ? _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.testnet.wif : _lib_hushjs_config__WEBPACK_IMPORTED_MODULE_15___default.a.mainnet.wif;
          var c_pk_wif;
          var c_pk = this.state.privateKeys[i]; // If not 64 length, probs WIF format

          if (c_pk.length !== 64) {
            c_pk_wif = c_pk;
            c_pk = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.WIFToPrivKey(c_pk);
          } else {
            c_pk_wif = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.privKeyToWIF(c_pk);
          }

          c_pk_wif = _lib_hushjs_address__WEBPACK_IMPORTED_MODULE_14___default.a.privKeyToWIF(c_pk, true, pubKeyHash);

          var c_addr = _privKeyToAddr(c_pk, this.state.settings.compressPubKey, this.state.settings.useTestNet);

          publicAddresses[c_addr] = {
            privateKey: c_pk,
            privateKeyWIF: c_pk_wif,
            confirmedBalance: 'loading...',
            unconfirmedBalance: 'loading...'
          };
        } // Set public address


        this.setPublicAddresses(publicAddresses); // Return success

        return 0;
      } catch (err) {
        this.setPublicAddresses(null);
        return -1;
      }
    }
  }, {
    key: "resetKeys",
    value: function resetKeys() {
      this.setState({
        privateKeys: '',
        publicAddresses: null
      });
    } // Only used for bip32 gen wallet because
    // of the async nature

  }, {
    key: "setPrivateKeys",
    value: function setPrivateKeys(pk, handleUnlockingKeys) {
      if (handleUnlockingKeys === undefined) {
        handleUnlockingKeys = false;
      }

      this.setState({
        privateKeys: pk
      }, handleUnlockingKeys ? this.handleUnlockPrivateKeys : undefined);
    }
  }, {
    key: "setPublicAddresses",
    value: function setPublicAddresses(pa) {
      this.setState({
        publicAddresses: pa
      });
    }
  }, {
    key: "setPublicAddressesKeyValue",
    value: function setPublicAddressesKeyValue(address, key, value) {
      var newPublicAddresses = this.state.publicAddresses;
      newPublicAddresses[address][key] = value;
      this.setState({
        publicAddresses: newPublicAddresses
      });
    }
  }, {
    key: "setInsightAPI",
    value: function setInsightAPI(uri) {
      var _settings = this.state.settings;
      _settings.insightAPI = uri;
      this.setState({
        _settings: _settings
      });
    }
  }, {
    key: "setUnlockType",
    value: function setUnlockType(t) {
      var _settings = this.state.settings;
      _settings.unlockType = t;
      this.setState({
        _settings: _settings
      });
    }
  }, {
    key: "toggleCompressPubKey",
    value: function toggleCompressPubKey(b) {
      var _settings = this.state.settings;
      _settings.compressPubKey = !_settings.compressPubKey;
      this.setState({
        _settings: _settings
      });
    }
  }, {
    key: "toggleUseTestNet",
    value: function toggleUseTestNet() {
      var _settings = this.state.settings;
      _settings.useTestNet = !_settings.useTestNet;

      if (_settings.useTestNet) {
        _settings.insightAPI = 'https://explorer.testnet.myhush.org/insight-api-komodo';
        _settings.explorerURL = 'https://explorer.testnet.myhush.org/';
      } else {
        _settings.insightAPI = 'https://explorer.myhush.org/insight-api-komodo';
        _settings.explorerURL = 'https://explorer.myhush.org/';
      }

      this.setState({
        settings: _settings
      });
    }
  }, {
    key: "toggleShowSettings",
    value: function toggleShowSettings() {
      var _settings = this.state.settings;
      _settings.showSettings = !_settings.showSettings;
      this.setState({
        settings: _settings
      });
    }
  }, {
    key: "toggleShowWalletGen",
    value: function toggleShowWalletGen() {
      var _settings = this.state.settings;
      _settings.showWalletGen = !_settings.showWalletGen;
      this.setState({
        settings: _settings
      });
    } //<h1 className='display-6'>Hush Wallet&nbsp;

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ToolTipButton, {
        onClick: this.toggleShowSettings,
        id: 1,
        buttonText: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["Setting"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1247
          },
          __self: this
        }),
        tooltipText: 'settings',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1247
        },
        __self: this
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ToolTipButton, {
        disabled: this.state.publicAddresses === null,
        onClick: this.resetKeys,
        id: 2,
        buttonText: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_images_svg__WEBPACK_IMPORTED_MODULE_19__["Redo"], {
          size: "15",
          color: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1248
          },
          __self: this
        }),
        tooltipText: 'reset wallet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1248
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZWalletSettings, {
        setUnlockType: this.setUnlockType,
        toggleShowSettings: this.toggleShowSettings,
        toggleCompressPubKey: this.toggleCompressPubKey,
        toggleShowWalletGen: this.toggleShowWalletGen,
        toggleUseTestNet: this.toggleUseTestNet,
        setInsightAPI: this.setInsightAPI,
        settings: this.state.settings,
        publicAddresses: this.state.publicAddresses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1250
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1260
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1264
        },
        __self: this
      }, this.state.publicAddresses === null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZWalletUnlockKey, {
        handleUnlockPrivateKeys: this.handleUnlockPrivateKeys,
        setPrivateKeys: this.setPrivateKeys,
        unlockType: this.state.settings.unlockType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1267
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZWalletTabs, {
        publicAddresses: this.state.publicAddresses,
        settings: this.state.settings,
        setPublicAddressesKeyValue: this.setPublicAddressesKeyValue,
        privateKeys: this.state.privateKeys,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1274
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1284
        },
        __self: this
      }, this.state.settings.showWalletGen ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1286
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1286
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZWalletGenerator, {
        settings: this.state.settings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1286
        },
        __self: this
      })) : null)));
    }
  }]);

  return ZWallet;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\git\\myhushwallet\\src\\index.js";



 // Main CSS

 // Main app picked up by the index.html file

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\git\myhushwallet\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! D:\git\myhushwallet\src\index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map