module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/home.less":
/*!*************************!*\
  !*** ./pages/home.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"logo": "logo___uii75",
	"right": "right___1g4kC",
	"export": "export___1AUO3",
	"umenu": "umenu___3YroI",
	"headerMenu": "headerMenu___2nL5q",
	"card": "card___SJqKT",
	"icon": "icon___3KHfZ",
	"autoComplete": "autoComplete___3I5uM",
	"ant-menu-item-selected": "ant-menu-item-selected___1DOeB",
	"cardImage": "cardImage___32zer",
	"cardContent": "cardContent___EOLXB",
	"avatar": "avatar___35vlu",
	"name": "name___1htPN",
	"date": "date___NtlYL",
	"left": "left___2bZPx",
	"subtitle": "subtitle___2Difd",
	"lefticon": "lefticon___tHhI2",
	"text": "text___2CeHW",
	"middleContent": "middleContent___2j1LE"
};

/***/ }),

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/store */ "./src/store.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_header_UHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/header/UHeader */ "./src/components/header/UHeader.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_home_UCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/home/UCards */ "./src/components/home/UCards.tsx");
/* harmony import */ var _src_components_layout_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/layout/Container */ "./src/components/layout/Container.tsx");


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;
var // @ts-ignore
// @secure()
Home = ( // @ts-ignore
_dec = Object(_src_store__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var _post = _ref._post,
      loading = _ref.loading;
  return {
    posts: _post.posts,
    postGetLoading: loading.effects['_post/get'] || loading.effects['_post/initGet'],
    likeLoading: loading.effects['_post/like'] || loading.effects['_post/unlike'],
    bookLoading: loading.effects['_post/book'] || loading.effects['_post/cancelBook']
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      offset: 0,
      limit: 10,
      orderBy: 'id',
      message: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "_fetchPost", function (_ref2, props, init) {
      var offset = _ref2.offset,
          limit = _ref2.limit,
          orderBy = _ref2.orderBy;
      var dispatch = _this.props.dispatch;

      var channelGroupIds = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(props, 'query.channelGroupIds');

      var payload = {
        offset: offset,
        limit: limit,
        // orderBy: 'id',
        orderBy: orderBy,
        channelGroupIds: channelGroupIds
      };

      if (init) {
        dispatch({
          type: '_post/initGet',
          payload: payload
        });
      } else {
        dispatch({
          type: '_post/get',
          payload: payload
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trackScrolling", function () {
      var windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body;
      var html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      var windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight) {
        if (!_this.props.postGetLoading) {
          _this.setState(function (state) {
            return {
              offset: state.offset + state.limit
            };
          });

          _this._fetchPost(_this.state, _this.props, false);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLike", function (id, flag) {
      var dispatch = _this.props.dispatch;

      if (!_this.props.likeLoading) {
        if (flag) {
          dispatch({
            type: '_post/unlike',
            payload: {
              id: id
            }
          });
        } else {
          dispatch({
            type: '_post/like',
            payload: {
              id: id
            }
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hanleBook", function (id, flag) {
      var dispatch = _this.props.dispatch;

      if (!_this.props.bookLoading) {
        if (flag) {
          dispatch({
            type: '_post/cancelBook',
            payload: {
              id: id
            }
          });
        } else {
          dispatch({
            type: '_post/book',
            payload: {
              id: id
            }
          });
        }
      }
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    // static async getInitialProps(props) {
    //   // first time run in server side
    //   // other times run in client side ( client side init with default props
    //   // console.log('get init props');
    //   const { pathname, query, isServer, store } = props;
    //   // dispatch effects to fetch data here
    //   console.log('get init props');
    //
    //   await props.store.dispatch({type: '_header/get'});
    //   // dont use store as property name, it will confilct with initial store
    //   return {
    //     pathname,
    //     query,
    //     isServer,
    //     dvaStore: store,
    //
    //   };
    // }
    value: function componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling);

      this._fetchPost(this.state, this.props, true); // message.config({top: window.innerHeight - 50});

    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      if (this.props.postGetLoading !== nextProps.postGetLoading) {
        if (nextProps.postGetLoading) {
          if (!this.state.message) {
            if (typeof this.state.message === 'undefined') {
              this.setState({
                message: antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading('Loading ...', 0)
              });
            }
          }
        } else {
          if (typeof this.state.message === 'function') {
            antd__WEBPACK_IMPORTED_MODULE_2__["message"].destroy();
            this.setState({
              message: undefined
            });
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_header_UHeader__WEBPACK_IMPORTED_MODULE_4__["UHeader"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_layout_Container__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_home_UCards__WEBPACK_IMPORTED_MODULE_6__["UCards"], {
        posts: posts,
        handleBook: this.hanleBook,
        handleLike: this.handleLike
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var pathname, query, isServer, store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // first time run in server side
                // other times run in client side ( client side init with default props
                // console.log('get init props');
                pathname = props.pathname, query = props.query, isServer = props.isServer, store = props.store; // dispatch effects to fetch data here
                // if (isServer) {
                //   await props.store.dispatch({ type: '_header/get' });
                // }

                _context.next = 3;
                return props.store.dispatch({
                  type: 'posts/init'
                });

              case 3:
                return _context.abrupt("return", {
                  pathname: pathname,
                  query: query,
                  isServer: isServer,
                  dvaStore: store
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component)) || _class);


/***/ }),

/***/ "./src/components/comment/UComment.tsx":
/*!*********************************************!*\
  !*** ./src/components/comment/UComment.tsx ***!
  \*********************************************/
/*! exports provided: UComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UComment", function() { return UComment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/image */ "./src/utils/image.ts");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






// @ts-ignore
var UComment =
/*#__PURE__*/
function (_Component) {
  _inherits(UComment, _Component);

  function UComment() {
    _classCallCheck(this, UComment);

    return _possibleConstructorReturn(this, _getPrototypeOf(UComment).apply(this, arguments));
  }

  _createClass(UComment, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          comments = _this$props.comments,
          commentGetLoading = _this$props.commentGetLoading;
      var commentDetails = comments.map(function (value) {
        var ob = {
          author: value.userDisplayedName,
          avatar: Object(_utils_image__WEBPACK_IMPORTED_MODULE_4__["getAvatar"])(value.userAvatarPath),
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value.text),
          datetime: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
            title: moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(value.creationDate).subtract(1, 'days').fromNow()))
        };
        return ob;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        loading: commentGetLoading,
        className: "comment-list",
        header: "".concat(commentDetails.length, " replies"),
        itemLayout: "horizontal",
        dataSource: commentDetails,
        renderItem: function renderItem(item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
            actions: item.actions,
            author: item.author,
            avatar: item.avatar,
            content: item.content,
            datetime: item.datetime
          });
        }
      });
    }
  }]);

  return UComment;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/components/header/HeaderDropdown/index.js":
/*!*******************************************************!*\
  !*** ./src/components/header/HeaderDropdown/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/header/HeaderDropdown/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HeaderDropdown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HeaderDropdown, _PureComponent);

  function HeaderDropdown() {
    _classCallCheck(this, HeaderDropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderDropdown).apply(this, arguments));
  }

  _createClass(HeaderDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          overlayClassName = _this$props.overlayClassName,
          props = _objectWithoutProperties(_this$props, ["overlayClassName"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], _extends({
        overlayClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_3___default.a.container, overlayClassName)
      }, props));
    }
  }]);

  return HeaderDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./src/components/header/HeaderDropdown/index.less":
/*!*********************************************************!*\
  !*** ./src/components/header/HeaderDropdown/index.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___qi4sJ"
};

/***/ }),

/***/ "./src/components/header/UChannels.tsx":
/*!*********************************************!*\
  !*** ./src/components/header/UChannels.tsx ***!
  \*********************************************/
/*! exports provided: UChannels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UChannels", function() { return UChannels; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
function UChannels(props) {
  var branch = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(props, 'branch.channelGroupGroup', []);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Menu"] // onClick={this.handleClick}
  , {
    theme: 'dark',
    style: {
      width: 256
    },
    mode: "inline"
  }, branch.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubMenu, {
      key: index,
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, value.groupGroupName)
    }, value.channelGroups.map(function (value1, index1) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: index1 * value.channelGroups.length + index,
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.router.push("/channel?channelGroupIds=".concat(value1.id));
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "appstore"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, value1.groupName)));
    }));
  }));
}

/***/ }),

/***/ "./src/components/header/UHeader.less":
/*!********************************************!*\
  !*** ./src/components/header/UHeader.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"logo": "logo___io46F",
	"right": "right___2pKY6",
	"export": "export___29tIY",
	"umenu": "umenu___1U2UO",
	"headerMenu": "headerMenu___1c14b",
	"card": "card___2JNBY",
	"action": "action___2iCkP",
	"search": "search___2YROG",
	"account": "account___36puY",
	"avatar": "avatar___12XFt",
	"icon": "icon___3pY4_",
	"autoComplete": "autoComplete___32lwE",
	"ant-menu-item-selected": "ant-menu-item-selected___1vCPa",
	"cardImage": "cardImage___2mItw",
	"cardContent": "cardContent___38jLQ",
	"name": "name___2WuRO",
	"date": "date___3di5U",
	"left": "left___2Gj4x",
	"subtitle": "subtitle___20HA6",
	"lefticon": "lefticon___1NM-K",
	"text": "text___12KlX",
	"middleContent": "middleContent___2pkVv"
};

/***/ }),

/***/ "./src/components/header/UHeader.tsx":
/*!*******************************************!*\
  !*** ./src/components/header/UHeader.tsx ***!
  \*******************************************/
/*! exports provided: UHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UHeader", function() { return UHeader; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UHeader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UHeader.less */ "./src/components/header/UHeader.less");
/* harmony import */ var _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UHeader_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/logo.svg */ "./static/logo.svg");
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UChannels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UChannels */ "./src/components/header/UChannels.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/store.ts");
/* harmony import */ var _HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderDropdown */ "./src/components/header/HeaderDropdown/index.js");
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/image */ "./src/utils/image.ts");
/* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/Container */ "./src/components/layout/Container.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option;
var selectAfter = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
  defaultValue: ".post",
  style: {
    width: 60,
    marginLeft: 5
  }
}, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Option, {
  value: ".post"
}, "Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Option, {
  value: ".user"
}, "User"));
var AutonComplete = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
  addonAfter: selectAfter,
  defaultValue: "mysite"
}); // @ts-ignore

var UHeader = (_dec = Object(_store__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref) {
  var _header = _ref._header,
      _user = _ref._user,
      _post = _ref._post;
  return {
    branch: _header.branch,
    user: _user.user,
    searches: _post.searches
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UHeader, _React$Component);

  function UHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (text) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: '_post/toDoSearch',
        payload: {
          text: text
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuClick", function (_ref2) {
      var key = _ref2.key;
      var dispatch = _this.props.dispatch;

      if (key === 'userCenter') {
        // router.push('/account/center');
        return;
      }

      if (key === 'triggerError') {
        // router.push('/exception/trigger');
        return;
      }

      if (key === 'userinfo') {
        // router.push('/account/settings/base');
        return;
      }

      if (key === 'logout') {
        dispatch({
          type: '_user/logout'
        });
      }
    });

    return _this;
  }

  _createClass(UHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: '_header/get'
      });
    }
  }, {
    key: "goUserInfoPage",
    value: function goUserInfoPage() {// Router.push('/userinfo');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          searches = _this$props.searches,
          user = _this$props.user;
      var dataSource = searches.map(function (value) {
        return value.post;
      }).map(function (value) {
        return value.title;
      });
      var menu = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
        selectedKeys: [],
        onClick: this.onMenuClick
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "userCenter"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "user"
      }), "user details"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "userinfo"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "setting"
      }), "my setting"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "channalfollowing"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "appstore"
      }), "followed channel"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Divider, null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "logout"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "logout"
      }), "logout"));
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_layout_Container__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ['1'],
        style: {
          lineHeight: '64px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        alt: "logo",
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
        src: _static_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "2"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.export
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
        content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UChannels__WEBPACK_IMPORTED_MODULE_4__["UChannels"], {
          branch: this.props.branch
        }),
        overlayClassName: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.headerMenu,
        placement: "bottomLeft",
        trigger: "hover"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "#"
      }, "Channels ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "down"
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.right
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
        theme: "dark",
        mode: "horizontal",
        selectable: false,
        style: {
          lineHeight: '64px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        // key='4'
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.autoComplete
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
        onChange: this.onSearchChange,
        dataSource: dataSource
      }, AutonComplete)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        overlay: menu
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        prefetch: true,
        href: "/userinfo?userIds=".concat(user.userId)
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "".concat(_UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.action, " ").concat(_UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.account)
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
        size: "small",
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.icon // icon='user'
        ,
        src: Object(_utils_image__WEBPACK_IMPORTED_MODULE_7__["getAvatar"])(user.avatar),
        alt: "avatar",
        onClick: this.goUserInfoPage.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.name
      }, user.fullName))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "notification",
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.icon
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        key: "3"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "edit",
        className: _UHeader_less__WEBPACK_IMPORTED_MODULE_2___default.a.icon
      }))))));
    }
  }]);

  return UHeader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class);

/***/ }),

/***/ "./src/components/home/UCard.tsx":
/*!***************************************!*\
  !*** ./src/components/home/UCard.tsx ***!
  \***************************************/
/*! exports provided: UCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCard", function() { return UCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/home.less */ "./pages/home.less");
/* harmony import */ var _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_home_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/image */ "./src/utils/image.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-medium-image-zoom */ "react-medium-image-zoom");
/* harmony import */ var react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_CommentModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/CommentModal */ "./src/components/modal/CommentModal.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;
var UCard =
/*#__PURE__*/
function (_Component) {
  _inherits(UCard, _Component);

  function UCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOk", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (e) {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(UCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          post = _this$props.post,
          handleLike = _this$props.handleLike,
          hanleBook = _this$props.hanleBook,
          cardLoading = _this$props.cardLoading;
      var _post$actionCount = post.actionCount,
          Bookmark = _post$actionCount.Bookmark,
          Comment = _post$actionCount.Comment,
          Like = _post$actionCount.Like;
      var liked = post.liked,
          bookmarked = post.bookmarked;
      var _ref = post.post,
          userDisplayedName = _ref.userDisplayedName,
          userAvatar = _ref.userAvatar,
          text = _ref.text,
          smallMediaPaths = _ref.smallMediaPaths,
          category = _ref.category,
          channelGroup = _ref.channelGroup,
          channelGroupGroup = _ref.channelGroupGroup,
          creationDate = _ref.creationDate,
          id = _ref.id,
          userId = _ref.userId;

      var groupGroupName = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](channelGroupGroup, 'groupGroupName');

      var groupName = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](channelGroup, 'groupName');

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        style: {
          width: '100%',
          marginTop: '16px'
        },
        loading: cardLoading
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        autoplay: true,
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.cardImage
      }, smallMediaPaths.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_6___default.a, {
          image: {
            src: Object(_utils_image__WEBPACK_IMPORTED_MODULE_3__["getPostImage"])(value),
            alt: 'Golden Gate Bridge',
            className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.cardImage // style: { width: '50em' }

          },
          zoomImage: {
            src: Object(_utils_image__WEBPACK_IMPORTED_MODULE_3__["getPostImage"])(value),
            alt: 'Golden Gate Bridge'
          }
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/profile?userIds=".concat(userId)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.cardContent
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: Object(_utils_image__WEBPACK_IMPORTED_MODULE_3__["getAvatar"])(userAvatar),
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.name
      }, userDisplayedName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.name
      }, groupGroupName, groupName ? "/".concat(groupName) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.date
      }, moment__WEBPACK_IMPORTED_MODULE_5___default()(creationDate).format('ll'))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.left
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "link",
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle
      }, category))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 200
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.middleContent
      }, text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.left
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "heart",
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.lefticon,
        theme: liked ? 'filled' : 'outlined',
        onClick: function onClick() {
          handleLike(id, liked);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.text
      }, Like), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "message",
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.lefticon,
        onClick: this.showModal
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        onClick: this.showModal
      }, Comment), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "book",
        theme: bookmarked ? 'filled' : 'outlined',
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.lefticon,
        onClick: function onClick() {
          hanleBook(id, bookmarked);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _pages_home_less__WEBPACK_IMPORTED_MODULE_2___default.a.text
      }, Bookmark)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal_CommentModal__WEBPACK_IMPORTED_MODULE_7__["CommentModal"], {
        postId: id,
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel
      })))));
    }
  }]);

  return UCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(UCard, "defaultProps", {
  cardLoading: false
});

/***/ }),

/***/ "./src/components/home/UCards.less":
/*!*****************************************!*\
  !*** ./src/components/home/UCards.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"posts": "posts___3MLuq"
};

/***/ }),

/***/ "./src/components/home/UCards.tsx":
/*!****************************************!*\
  !*** ./src/components/home/UCards.tsx ***!
  \****************************************/
/*! exports provided: UCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCards", function() { return UCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UCard */ "./src/components/home/UCard.tsx");
/* harmony import */ var _UCards_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UCards.less */ "./src/components/home/UCards.less");
/* harmony import */ var _UCards_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UCards_less__WEBPACK_IMPORTED_MODULE_2__);



var UCards = function UCards(_ref) {
  var posts = _ref.posts,
      _ref$postInitGetLoadi = _ref.postInitGetLoading,
      postInitGetLoading = _ref$postInitGetLoadi === void 0 ? false : _ref$postInitGetLoadi,
      handleLike = _ref.handleLike,
      handleBook = _ref.handleBook;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _UCards_less__WEBPACK_IMPORTED_MODULE_2___default.a.posts
  }, posts.map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UCard__WEBPACK_IMPORTED_MODULE_1__["UCard"], {
      cardLoading: postInitGetLoading,
      key: value.post.id,
      post: value,
      handleLike: handleLike,
      hanleBook: handleBook
    });
  }));
};

/***/ }),

/***/ "./src/components/layout/Container.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/Container.tsx ***!
  \*********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


var Container = function Container(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 0,
    md: 4
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 16
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 0,
    md: 4
  }));
};

/***/ }),

/***/ "./src/components/modal/CommentModal.tsx":
/*!***********************************************!*\
  !*** ./src/components/modal/CommentModal.tsx ***!
  \***********************************************/
/*! exports provided: CommentModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModal", function() { return CommentModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comment_UComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment/UComment */ "./src/components/comment/UComment.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;
var CommentModal = (_dec = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create(), _dec2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var _comment = _ref._comment,
      loading = _ref.loading;
  return {
    comments: _comment.comments,
    commentGetLoading: loading.effects['_comment/get'],
    commentPostLoading: loading.effects['_comment/post']
  };
}), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentModal, _Component);

  function CommentModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

    _defineProperty(_assertThisInitialized(_this), "postHandler", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          postId = _this$props.postId,
          dispatch = _this$props.dispatch,
          form = _this$props.form;
      form.validateFieldsAndScroll(function (err, _ref2) {
        var message = _ref2.message;

        if (!err) {
          dispatch({
            type: '_comment/post',
            payload: {
              postId: postId,
              text: message,
              emails: []
            }
          });
          form.resetFields();
        }
      });
    });

    return _this;
  }

  _createClass(CommentModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          postId = _this$props2.postId,
          dispatch = _this$props2.dispatch;
      var payload = {
        offset: 0,
        limit: 100,
        postId: postId
      };
      dispatch({
        type: '_comment/get',
        payload: payload
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dispatch = this.props.dispatch;

      if (this.props.visible !== nextProps.visible) {
        var postId = nextProps.postId;
        var payload = {
          offset: 0,
          limit: 100,
          postId: postId
        };
        dispatch({
          type: '_comment/get',
          payload: payload
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          commentGetLoading = _this$props3.commentGetLoading,
          comments = _this$props3.comments,
          commentPostLoading = _this$props3.commentPostLoading,
          form = _this$props3.form;
      var getFieldDecorator = form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        title: "Comments",
        visible: visible,
        onOk: this.props.onOk,
        onCancel: this.props.onCancel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, getFieldDecorator('message', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 4
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        loading: commentPostLoading,
        type: "primary",
        onClick: this.postHandler
      }, "Add Comment"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comment_UComment__WEBPACK_IMPORTED_MODULE_2__["UComment"], {
        commentGetLoading: commentGetLoading,
        comments: comments
      }));
    }
  }]);

  return CommentModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);

/***/ }),

/***/ "./src/models/comment.ts":
/*!*******************************!*\
  !*** ./src/models/comment.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urekaapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/urekaapi */ "./src/services/urekaapi.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var model = {
  namespace: '_comment',
  state: {
    comments: []
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        comments: payload.reverse()
      });
    }
  },
  effects: {
    get:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function get(_ref, _ref2) {
      var payload, put, postId, offset, limit, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put;
              postId = payload.postId, offset = payload.offset, limit = payload.limit;
              _context.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getComment"])(postId, offset, limit);

            case 5:
              data = _context.sent;

              if (!data) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({
                type: 'fetch',
                payload: data
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, get);
    }),
    post:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function post(_ref3, _ref4) {
      var payload, put, postId, text, emails, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function post$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put;
              postId = payload.postId, text = payload.text, emails = payload.emails;
              _context2.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["postComment"])(postId, {
                postId: postId,
                text: text,
                emails: emails
              });

            case 5:
              data = _context2.sent;

              if (!data) {
                _context2.next = 11;
                break;
              }

              _context2.next = 9;
              return put({
                type: '_post/increaseComment',
                payload: {
                  postId: postId
                }
              });

            case 9:
              _context2.next = 11;
              return put({
                type: 'get',
                payload: {
                  postId: postId,
                  offset: 0,
                  limit: 100
                }
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, post);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/header.ts":
/*!******************************!*\
  !*** ./src/models/header.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urekaapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/urekaapi */ "./src/services/urekaapi.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var model = {
  namespace: '_header',
  state: {
    branch: {}
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        branch: payload
      });
    }
  },
  effects: {
    get:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function get(_action, _ref) {
      var call, put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              call = _ref.call, put = _ref.put;
              _context.next = 3;
              return call(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getBranch"]);

            case 3:
              data = _context.sent;

              if (!data) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return put({
                type: 'fetch',
                payload: data
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, get);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample/post */ "./src/models/sample/post.ts");
/* harmony import */ var _sample_album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample/album */ "./src/models/sample/album.ts");
/* harmony import */ var _sample_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample/user */ "./src/models/sample/user.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/models/login.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./src/models/post.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/models/header.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register */ "./src/models/register.ts");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment */ "./src/models/comment.ts");








var model = [_sample_post__WEBPACK_IMPORTED_MODULE_0__["default"], _sample_album__WEBPACK_IMPORTED_MODULE_1__["default"], _sample_user__WEBPACK_IMPORTED_MODULE_2__["default"], _login__WEBPACK_IMPORTED_MODULE_3__["default"], _post__WEBPACK_IMPORTED_MODULE_4__["default"], _header__WEBPACK_IMPORTED_MODULE_5__["default"], _register__WEBPACK_IMPORTED_MODULE_6__["default"], _comment__WEBPACK_IMPORTED_MODULE_7__["default"]]; // const model = [login, post];

/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/login.ts":
/*!*****************************!*\
  !*** ./src/models/login.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urekaapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/urekaapi */ "./src/services/urekaapi.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/token */ "./src/utils/token.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var model = {
  namespace: '_user',
  state: {
    user: {},
    forgetPassword: {}
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        user: payload
      });
    },
    forgetPasswordReduce: function forgetPasswordReduce(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        forgetPassword: payload
      });
    }
  },
  effects: {
    login:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function login(_ref, _ref2) {
      var payload, put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put;
              _context.next = 4;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["putLogin"])(payload);

            case 4:
              data = _context.sent;

              if (!data) {
                _context.next = 11;
                break;
              }

              localStorage.setItem('userinfo', JSON.stringify(data));
              _utils_token__WEBPACK_IMPORTED_MODULE_3__["default"].save(data.token);
              _context.next = 10;
              return put({
                type: 'fetch',
                payload: data
              });

            case 10:
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.router.push('/home');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, login);
    }),
    fp:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function fp(_ref3, _ref4) {
      var payload, put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fp$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put;
              _context2.next = 4;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["forgetPassword"])(payload);

            case 4:
              data = _context2.sent;

              if (!data) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return put({
                type: 'forgetPasswordReduce',
                payload: data
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, fp);
    }),
    logout:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function logout() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _utils_token__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.router.push('/login');

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, logout);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/post.ts":
/*!****************************!*\
  !*** ./src/models/post.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urekaapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/urekaapi */ "./src/services/urekaapi.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var model = {
  namespace: '_post',
  state: {
    posts: [],
    searches: []
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      var posts = state.posts;
      return _objectSpread({}, state, {
        posts: lodash__WEBPACK_IMPORTED_MODULE_2__["uniqWith"](posts.concat(payload), lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])
      });
    },
    increaseComment: function increaseComment(state, action) {
      var payload = action.payload;
      var posts = state.posts;
      var postId = payload.postId;
      return _objectSpread({}, state, {
        posts: posts.map(function (value) {
          return value.post.id === postId ? _objectSpread({}, value, {
            actionCount: _objectSpread({}, value.actionCount, {
              Comment: value.actionCount.Comment + 1
            })
          }) : value;
        })
      });
    },
    init: function init(state, action) {
      return _objectSpread({}, state, {
        posts: []
      });
    },
    setSearch: function setSearch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        searches: payload
      });
    },
    updateLike: function updateLike(state, action) {
      var id = action.id;
      var posts = state.posts;

      var index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](posts, {
        post: {
          id: id
        }
      });

      posts[index].liked = !posts[index].liked;

      if (posts[index].liked) {
        posts[index].actionCount.Like += 1;
      } else {
        posts[index].actionCount.Like -= 1;
      }

      return _objectSpread({}, state, {
        posts: _toConsumableArray(posts)
      });
    },
    updateBook: function updateBook(state, action) {
      var id = action.id;
      var posts = state.posts;

      var index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](posts, {
        post: {
          id: id
        }
      });

      posts[index].bookmarked = !posts[index].bookmarked;

      if (posts[index].bookmarked) {
        posts[index].actionCount.Bookmark += 1;
      } else {
        posts[index].actionCount.Bookmark -= 1;
      }

      return _objectSpread({}, state, {
        posts: _toConsumableArray(posts)
      });
    }
  },
  effects: {
    get:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function get(_ref, _ref2) {
      var payload, put, offset, limit, orderBy, channelGroupIds, userIds, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put;
              offset = payload.offset, limit = payload.limit, orderBy = payload.orderBy, channelGroupIds = payload.channelGroupIds, userIds = payload.userIds;
              _context.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getPost"])({
                offset: offset,
                limit: limit,
                orderBy: orderBy,
                channelGroupIds: channelGroupIds,
                userIds: userIds
              });

            case 5:
              data = _context.sent;

              if (!data) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({
                type: 'fetch',
                payload: data
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, get);
    }),
    initGet:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function initGet(_ref3, _ref4) {
      var payload, call, put, offset, limit, orderBy, channelGroupIds, userIds, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initGet$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              call = _ref4.call, put = _ref4.put;
              offset = payload.offset, limit = payload.limit, orderBy = payload.orderBy, channelGroupIds = payload.channelGroupIds, userIds = payload.userIds;
              _context2.next = 5;
              return call(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getPost"], {
                offset: offset,
                limit: limit,
                orderBy: orderBy,
                channelGroupIds: channelGroupIds,
                userIds: userIds
              });

            case 5:
              data = _context2.sent;

              if (!data) {
                _context2.next = 11;
                break;
              }

              _context2.next = 9;
              return put({
                type: 'init'
              });

            case 9:
              _context2.next = 11;
              return put({
                type: 'fetch',
                payload: data
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, initGet);
    }),
    getSearch:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getSearch(_ref5, _ref6) {
      var payload, call, put, text, offset, limit, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSearch$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              call = _ref6.call, put = _ref6.put;
              text = payload.text, offset = payload.offset, limit = payload.limit;
              _context3.next = 5;
              return call(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getSearchPost"], text, offset, limit);

            case 5:
              data = _context3.sent;

              if (!data) {
                _context3.next = 9;
                break;
              }

              _context3.next = 9;
              return put({
                type: 'setSearch',
                payload: data
              });

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, getSearch);
    }),
    // *toDoSearch({ payload }, { put, takeLatest }) {
    //   yield takeLatest('FETCH_AUTOCOMPLETE', function*() {
    //     yield put({ type: 'getSearch', payload });
    //   });
    // },
    toDoSearch: [
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref7, _ref8) {
      var payload, put;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put;
              _context4.next = 4;
              return put({
                type: 'getSearch',
                payload: payload
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee);
    }), {
      type: 'throttle',
      ms: 200
    }],
    like:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function like(_ref9, _ref10) {
      var payload, put, id, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function like$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              put = _ref10.put;
              id = payload.id;
              _context5.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["like"])(id);

            case 5:
              data = _context5.sent;

              if (!data) {
                _context5.next = 9;
                break;
              }

              _context5.next = 9;
              return put({
                type: 'updateLike',
                id: id
              });

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, like);
    }),
    unlike:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function unlike(_ref11, _ref12) {
      var payload, put, id, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlike$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref11.payload;
              put = _ref12.put;
              id = payload.id;
              _context6.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["unlike"])(id);

            case 5:
              data = _context6.sent;

              if (!data) {
                _context6.next = 9;
                break;
              }

              _context6.next = 9;
              return put({
                type: 'updateLike',
                id: id
              });

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, unlike);
    }),
    book:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function book(_ref13, _ref14) {
      var payload, put, id, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function book$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              payload = _ref13.payload;
              put = _ref14.put;
              id = payload.id;
              _context7.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["book"])(id);

            case 5:
              data = _context7.sent;

              if (!data) {
                _context7.next = 9;
                break;
              }

              _context7.next = 9;
              return put({
                type: 'updateBook',
                id: id
              });

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, book);
    }),
    cancelBook:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function cancelBook(_ref15, _ref16) {
      var payload, put, id, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function cancelBook$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              payload = _ref15.payload;
              put = _ref16.put;
              id = payload.id;
              _context8.next = 5;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["unbook"])(id);

            case 5:
              data = _context8.sent;

              if (!data) {
                _context8.next = 9;
                break;
              }

              _context8.next = 9;
              return put({
                type: 'updateBook',
                id: id
              });

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, cancelBook);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/register.ts":
/*!********************************!*\
  !*** ./src/models/register.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urekaapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/urekaapi */ "./src/services/urekaapi.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var model = {
  namespace: '_register',
  state: {
    occupation: [],
    createUser: {}
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        occupation: payload
      });
    },
    create: function create(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        createUser: payload
      });
    }
  },
  effects: {
    occupation:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function occupation(_ref, _ref2) {
      var payload, put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function occupation$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put;
              _context.next = 4;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["getOccupations"])();

            case 4:
              data = _context.sent;

              if (!data) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return put({
                type: 'fetch',
                payload: data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, occupation);
    }),
    createUser:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function createUser(_ref3, _ref4) {
      var payload, put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put;
              _context2.next = 4;
              return Object(_services_urekaapi__WEBPACK_IMPORTED_MODULE_1__["creatUser"])(payload);

            case 4:
              data = _context2.sent;

              if (!data) {
                _context2.next = 9;
                break;
              }

              _context2.next = 8;
              return put({
                type: 'create',
                payload: data
              });

            case 8:
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.router.push('/login');

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, createUser);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/sample/album.ts":
/*!************************************!*\
  !*** ./src/models/sample/album.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var model = {
  namespace: 'albums',
  state: {
    init: false,
    list: []
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        list: payload
      });
    }
  },
  effects: {
    init:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function init(_action, _ref) {
      var put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref.put;
              _context.next = 3;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["queryAlbums"])();

            case 3:
              data = _context.sent;
              _context.next = 6;
              return put({
                type: 'fetch',
                payload: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, init);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/sample/post.ts":
/*!***********************************!*\
  !*** ./src/models/sample/post.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

var model = {
  namespace: 'posts',
  state: {
    init: false,
    list: [],
    item: {}
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        list: payload
      });
    },
    fetchItem: function fetchItem(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        item: payload
      });
    }
  },
  effects: {
    init:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function init(_action, _ref) {
      var put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref.put;
              _context.next = 3;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["queryPosts"])();

            case 3:
              data = _context.sent;
              _context.next = 6;
              return put({
                type: 'fetch',
                payload: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, init);
    }),
    initItem:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function initItem(action, _ref2) {
      var put, id, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initItem$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              put = _ref2.put;
              id = action.payload.id;
              _context2.next = 4;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["queryPostById"])(id);

            case 4:
              data = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'fetchItem',
                payload: data
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, initItem);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/models/sample/user.ts":
/*!***********************************!*\
  !*** ./src/models/sample/user.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var model = {
  namespace: 'users',
  state: {
    init: false,
    item: {}
  },
  reducers: {
    fetch: function fetch(state, action) {
      var payload = action.payload;
      return _objectSpread({}, state, {
        item: payload
      });
    }
  },
  effects: {
    init:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function init(_action, _ref) {
      var put, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref.put;
              _context.next = 3;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["queryUserById"])();

            case 3:
              data = _context.sent;
              _context.next = 6;
              return put({
                type: 'fetch',
                payload: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, init);
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: queryPosts, queryPostById, queryAlbums, queryUserById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryPosts", function() { return queryPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryPostById", function() { return queryPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAlbums", function() { return queryAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryUserById", function() { return queryUserById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function queryPosts() {
  return _queryPosts.apply(this, arguments);
}

function _queryPosts() {
  _queryPosts = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/channel/groupTree?canWrite=false&subscribedOnly=false'));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _queryPosts.apply(this, arguments);
}

function queryPostById(_x) {
  return _queryPostById.apply(this, arguments);
} // https://github.com/typicode/json-server

function _queryPostById() {
  _queryPostById = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("https://jsonplaceholder.typicode.com/posts/".concat(id)));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _queryPostById.apply(this, arguments);
}

function queryAlbums() {
  return _queryAlbums.apply(this, arguments);
} // visitor

function _queryAlbums() {
  _queryAlbums = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('https://jsonplaceholder.typicode.com/albums?_page=1&_limit=20'));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _queryAlbums.apply(this, arguments);
}

function queryUserById() {
  return _queryUserById.apply(this, arguments);
}

function _queryUserById() {
  _queryUserById = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('https://jsonplaceholder.typicode.com/users/1'));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _queryUserById.apply(this, arguments);
}

/***/ }),

/***/ "./src/services/urekaapi.ts":
/*!**********************************!*\
  !*** ./src/services/urekaapi.ts ***!
  \**********************************/
/*! exports provided: url, putLogin, getBranch, getOccupations, getSearchPost, creatUser, forgetPassword, getPost, like, unlike, book, unbook, getComment, postComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putLogin", function() { return putLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranch", function() { return getBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOccupations", function() { return getOccupations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchPost", function() { return getSearchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatUser", function() { return creatUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetPassword", function() { return forgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "like", function() { return like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlike", function() { return unlike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "book", function() { return book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbook", function() { return unbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComment", function() { return getComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComment", function() { return postComment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var url = 'http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080'; // export const url = 'https://ureka.science';

function putLogin(_x) {
  return _putLogin.apply(this, arguments);
}

function _putLogin() {
  _putLogin = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/users/login', {
              method: 'PUT',
              body: body
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _putLogin.apply(this, arguments);
}

function getBranch() {
  return _getBranch.apply(this, arguments);
}

function _getBranch() {
  _getBranch = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/channel/groupTree?canWrite=false&subscribedOnly=false'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getBranch.apply(this, arguments);
}

function getOccupations() {
  return _getOccupations.apply(this, arguments);
}

function _getOccupations() {
  _getOccupations = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/occupations', {
              method: 'GET'
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOccupations.apply(this, arguments);
}

function getSearchPost(_x2) {
  return _getSearchPost.apply(this, arguments);
}

function _getSearchPost() {
  _getSearchPost = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(text) {
    var offset,
        limit,
        _args4 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            offset = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 0;
            limit = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 10;
            return _context4.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post?offset=".concat(offset, "0&limit=").concat(limit, "&fulltext=").concat(text, "&orderBy=postrank&subscribedOnly=false"), {
              method: 'GET'
            }));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSearchPost.apply(this, arguments);
}

function creatUser(_x3) {
  return _creatUser.apply(this, arguments);
}

function _creatUser() {
  _creatUser = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/users/create', {
              method: 'POST',
              body: body
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _creatUser.apply(this, arguments);
}

function forgetPassword(_x4) {
  return _forgetPassword.apply(this, arguments);
}

function _forgetPassword() {
  _forgetPassword = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/users/reset/password', {
              method: 'PUT',
              body: body
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _forgetPassword.apply(this, arguments);
}

function getPost(_x5) {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(_ref) {
    var offset, limit, orderBy, channelGroupIds, userIds, make, urlString;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            offset = _ref.offset, limit = _ref.limit, orderBy = _ref.orderBy, channelGroupIds = _ref.channelGroupIds, userIds = _ref.userIds;
            make = {
              limit: limit ? "limit=".concat(limit) : limit,
              orderBy: orderBy ? "orderBy=".concat(orderBy) : orderBy,
              userIds: userIds ? "userIds=".concat(userIds, "&channelOnly=false") : userIds,
              channelGroupIds: channelGroupIds ? "channelGroupIds=".concat(channelGroupIds, "&channelOnly=true") : channelGroupIds
            }; // @ts-ignore

            urlString = Object.values(make).filter(function (url) {
              return url;
            }).join('&');

            if (!urlString) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post?subscribedOnly=false&includeWelcome=false&offset=".concat(offset, "&").concat(urlString), {
              method: 'GET'
            }));

          case 7:
            return _context7.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])(url + '/api/post', {
              method: 'GET'
            }));

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getPost.apply(this, arguments);
}

function like(_x6) {
  return _like.apply(this, arguments);
}

function _like() {
  _like = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/like"), {
              method: 'PUT'
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _like.apply(this, arguments);
}

function unlike(_x7) {
  return _unlike.apply(this, arguments);
}

function _unlike() {
  _unlike = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/unlike"), {
              method: 'DELETE'
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _unlike.apply(this, arguments);
}

function book(_x8) {
  return _book.apply(this, arguments);
}

function _book() {
  _book = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/bookmark"), {
              method: 'PUT'
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _book.apply(this, arguments);
}

function unbook(_x9) {
  return _unbook.apply(this, arguments);
} // comment

function _unbook() {
  _unbook = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/discard"), {
              method: 'DELETE'
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _unbook.apply(this, arguments);
}

function getComment(_x10, _x11, _x12) {
  return _getComment.apply(this, arguments);
}

function _getComment() {
  _getComment = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(postId, offset, limit) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/comment?offset=").concat(offset, "&limit=").concat(limit), {
              method: 'GET'
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getComment.apply(this, arguments);
}

function postComment(_x13, _x14) {
  return _postComment.apply(this, arguments);
}

function _postComment() {
  _postComment = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(postId, body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/post/".concat(postId, "/comment"), {
              method: 'POST',
              body: body
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _postComment.apply(this, arguments);
}

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connection; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-no-router */ "dva-no-router");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_no_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dva-loading */ "dva-loading");
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dva_loading__WEBPACK_IMPORTED_MODULE_5__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

function createDvaStore(initialState) {
  var app;

  if (initialState) {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_2___default()({
      initialState: initialState
    });
  } else {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_2___default()({});
  }

  app.use(dva_loading__WEBPACK_IMPORTED_MODULE_5___default()());
  var isArray = Array.isArray(_models__WEBPACK_IMPORTED_MODULE_4__["default"]);

  if (isArray) {
    _models__WEBPACK_IMPORTED_MODULE_4__["default"].forEach(function (m) {
      app.model(m);
    });
  } else {
    app.model(_models__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

  app.router(function () {});
  app.start(); // console.log(app);

  var store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  var isServer = checkServer();

  if (isServer) {
    // run in server
    return createDvaStore(initialState);
  }

  if (!window[__NEXT_DVA_STORE__]) {
    // run in client
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  }

  return window[__NEXT_DVA_STORE__];
}

function Connection() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function CreateNextPage(Component) {
    var ComponentWithDva = function ComponentWithDva() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // @ts-ignore
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState;
      var ConnectedComponent = dva_no_router__WEBPACK_IMPORTED_MODULE_2__["connect"].apply(void 0, args)(Component);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], // in client side, it will init store with the initial state tranfer from server side
      {
        store: store && store.dispatch ? store : getOrCreateStore(initialState)
      }, // transfer next.js's props to the page
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConnectedComponent, initialProps));
    }; // @ts-ignore


    ComponentWithDva.getInitialProps =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var props,
          isServer,
          store,
          initialProps,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              isServer = checkServer(); // @ts-ignore

              store = getOrCreateStore(props.jsonPageRes); // call children's getInitialProps
              // get initProps and transfer in to the page

              if (!Component.getInitialProps) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Component.getInitialProps(_objectSpread({}, props, {
                isServer: isServer,
                store: store
              }));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {};

            case 10:
              initialProps = _context.t0;
              console.log('initialProps' + initialProps);
              return _context.abrupt("return", {
                store: store,
                initialProps: initialProps,
                initialState: store.getState()
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return ComponentWithDva;
  };
}

/***/ }),

/***/ "./src/utils/image.ts":
/*!****************************!*\
  !*** ./src/utils/image.ts ***!
  \****************************/
/*! exports provided: getAvatar, getPostImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvatar", function() { return getAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostImage", function() { return getPostImage; });
var avatarUrl = "/api/avatar";
var postUrl = "/api/post";
var getAvatar = function getAvatar(path) {
  return "".concat(avatarUrl, "/").concat(path, "/downloadMedia");
};
var getPostImage = function getPostImage(path) {
  return "".concat(postUrl, "/").concat(path, "/downloadMedia?mediaFidelity=Medium");
};

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: buildAuthorization, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAuthorization", function() { return buildAuthorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
/* harmony import */ var dva_no_router_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dva-no-router/fetch */ "dva-no-router/fetch");
/* harmony import */ var dva_no_router_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dva_no_router_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/utils/token.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

var codeMessage = {
  200: 'The request has succeeded.',
  201: 'Created.',
  202: 'The request has been received but not yet acted upon.',
  204: 'No Content.',
  400: 'Bad Request.',
  401: 'Unauthorized.',
  403: 'Forbidden.',
  404: 'Not Found.',
  406: 'Not Acceptable.',
  410: 'Gone.',
  422: 'Unprocessable Entity.',
  500: 'Internal Server Error.',
  502: 'Bad Gateway.',
  503: 'Service Unavailable.',
  504: 'Gateway Timeout.'
};
function buildAuthorization() {
  var tokenVal = _token__WEBPACK_IMPORTED_MODULE_2__["default"].get();
  return tokenVal ? "Bearer ".concat(tokenVal) : undefined;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } //
  // if (response.status == 403) {
  //   Router.router.push('/login');
  // }


  var errortext = "".concat(codeMessage[response.status] || response.statusText, " ").concat(response.status, ": ").concat(response.url);
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"].error({
    message: "error: ".concat(response.status),
    description: errortext
  });
  var error = new Error(errortext);
  error.name = response.status; // @ts-ignore

  error.response = response;
  throw error;
}

function request(url, options) {
  var defaultOptions = {
    credentials: 'include',
    'Content-Type': 'application/json' // 'Access-Control-Allow-Origin': '*',

  };

  var newOptions = _objectSpread({}, defaultOptions, options);

  newOptions.headers = _objectSpread({
    'Content-Type': 'application/json'
  }, newOptions.headers);

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = _objectSpread({
        Accept: 'application/json'
      }, newOptions.headers);
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = _objectSpread({
        Accept: 'application/json'
      }, newOptions.headers);
    }
  }

  console.log(newOptions);

  if (_token__WEBPACK_IMPORTED_MODULE_2__["default"].get()) {
    newOptions.headers = _objectSpread({
      Authorization: buildAuthorization()
    }, newOptions.headers);
  }

  return dva_no_router_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, newOptions).then(checkStatus).then(function (response) {
    if (newOptions.method === 'DELETE' || response.status === 204) {
      return response.text();
    }

    return response.json();
  }).catch(function (e) {
    console.error(e);
    return false;
  });
}

/***/ }),

/***/ "./src/utils/token.ts":
/*!****************************!*\
  !*** ./src/utils/token.ts ***!
  \****************************/
/*! exports provided: setCookie, removeCookie, getCookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atob */ "atob");
/* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(atob__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var STORAGE_TOKEN_NAME = 'TOKEN';
var isBrowser = false;

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

var setCookie = function setCookie(key, value) {
  if (false) {}
};
var removeCookie = function removeCookie(key) {
  if (isBrowser) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};
/**
 * JWT的方案
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  parse: function parse() {
    var token = this.get();

    try {
      var arr = token.split('.');

      if (arr.length === 3) {
        token = atob__WEBPACK_IMPORTED_MODULE_0___default()(token.split('.')[1]);
      }

      return JSON.parse(token);
    } catch (ex) {
      throw ex;
    }
  },
  check: function check() {
    try {
      var payload = this.parse();
      return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(payload);
    } catch (ex) {
      this.remove();
      return false;
    }
  },
  get: function get() {
    return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(STORAGE_TOKEN_NAME);
  },
  save: function save(token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(STORAGE_TOKEN_NAME, token);
    sessionStorage.setItem(STORAGE_TOKEN_NAME, token);
  },
  remove: function remove() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(STORAGE_TOKEN_NAME);
  }
});

/***/ }),

/***/ "./static/logo.svg":
/*!*************************!*\
  !*** ./static/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDQzNyA0MjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+CiAgICA8ZyBpZD0iWE1MSURfMTc1XyI+CiAgICAgICAgPHBhdGggaWQ9IlhNTElEXzE3OF8iIGQ9Ik0yMjIuOSwzMjIuN0MyMjQuOCwzMjEuNSAyMjYuNywzMjAuMiAyMjguNSwzMTlDMjQzLjMsMzA5LjUgMjU2LjUsMjk4LjIgMjY4LjQsMjg1LjNDMjY5LjcsMjgzLjkgMjcxLDI4Mi40IDI3Mi40LDI4MS4xQzI3Mi44LDI4MC43IDI3My44LDI4MC41IDI3NC40LDI4MC42QzI3Ny44LDI4MS41IDI4MS4yLDI4Mi43IDI4NC43LDI4My40QzI4OC45LDI4NC4zIDI5NCwyODIuNCAyOTUuNywyNzguMkMyOTcsMjc0LjggMjk3LjQsMjcxLjQgMjk2LjgsMjY3LjlDMjk1LjcsMjYwLjkgMjkzLjEsMjU0LjQgMjkwLjEsMjQ4LjFDMjg1LjYsMjM4LjYgMjc5LDIzMC43IDI3MSwyMjMuOEMyNjYuNCwyMTkuOSAyNjEuNSwyMTYuNCAyNTYuMiwyMTMuOEMyNTEuNCwyMTEuNSAyNDYuNCwyMDkuNCAyNDEuMywyMDcuN0MyMzcuOSwyMDYuNSAyMzQuMiwyMDUuOSAyMzAuNiwyMDUuM0MyMjguMSwyMDQuOSAyMjUuNSwyMDQuNiAyMjIuOSwyMDQuNkMyMTguNywyMDQuNiAyMTQuNCwyMDQuNSAyMTAuMiwyMDUuMUMyMDYuNCwyMDUuNiAyMDIuNywyMDcgMTk5LDIwOC4yQzE5Ni44LDIwOC45IDE5NS45LDIwOC44IDE5NC45LDIwNi43QzE5My45LDIwNC42IDE5Mi45LDIwMi40IDE5Mi4yLDIwMC4xQzE5MC43LDE5NS42IDE4OS4xLDE5MS4xIDE4Ny45LDE4Ni40QzE4Ni45LDE4Mi4yIDE4Ni4xLDE3Ny44IDE4NS44LDE3My41QzE4NS41LDE2OC4yIDE4NS41LDE2Mi45IDE4NS44LDE1Ny42QzE4NiwxNTQuMyAxODcsMTUxIDE4Ny43LDE0Ny44QzE4OC4xLDE0NS44IDE5MCwxNDUuNSAxOTEuNSwxNDQuOUMyMDIuNiwxNDAuOSAyMTQsMTM5IDIyNS43LDEzOS44QzIzMS45LDE0MC4yIDIzOC4yLDE0MSAyNDQuMywxNDIuNEMyNTAuNywxNDMuOSAyNTYuOSwxNDYuMSAyNjMuMSwxNDguM0MyNzIuMSwxNTEuNCAyODAuNiwxNTUuOSAyODguNywxNjFDMzAwLjQsMTY4LjMgMzExLjIsMTc2LjcgMzIwLjUsMTg2LjlDMzIzLjgsMTkwLjYgMzI3LjUsMTk0IDMzMC42LDE5Ny45QzMzNCwyMDIuMSAzMzcsMjA2LjcgMzQwLjEsMjExLjFDMzQ1LjEsMjE4LjMgMzQ5LjIsMjI2LjEgMzUyLjMsMjM0LjJDMzU0LjYsMjQwLjIgMzU2LjMsMjQ2LjQgMzU4LjEsMjUyLjVDMzYwLjYsMjYxLjYgMzYxLjIsMjcxIDM2MC42LDI4MC40QzM2MC4yLDI4Ny4yIDM1OC44LDI5My44IDM1Ni41LDMwMC4xQzM1My42LDMwOC4xIDM0OS4zLDMxNS4yIDM0My41LDMyMS40QzMzOC4xLDMyNy4yIDMzMS44LDMzMS45IDMyNC41LDMzNS4zQzMxOS40LDMzNy43IDMxNCwzMzkuNCAzMDguNSwzNDAuM0MzMDMuNCwzNDEuMSAyOTguMiwzNDEuMyAyOTMsMzQxLjVDMjg2LjMsMzQxLjggMjc5LjYsMzQxLjIgMjczLDMzOS44QzI2Ny4yLDMzOC41IDI2MS4yLDMzNy41IDI1NS41LDMzNS44QzI0OSwzMzMuOSAyNDIuNywzMzEuNCAyMzYuMywzMjlDMjMxLjcsMzI3LjMgMjI3LjMsMzI1LjIgMjIyLjgsMzIzLjNDMjIyLjksMzIzLjEgMjIyLjksMzIyLjkgMjIyLjksMzIyLjdaIiBzdHlsZT0iZmlsbDpyZ2IoMCwxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBpZD0iWE1MSURfMTc3XyIgZD0iTTMxNC43LDE3Ni41QzMxMS40LDE3My44IDMwOC40LDE3MS4zIDMwNS4zLDE2OC44QzI5OC4xLDE2My4xIDI5MC41LDE1Ny45IDI4Mi40LDE1My42QzI3Ni40LDE1MC41IDI3MC40LDE0Ny41IDI2NC4yLDE0NUMyNTkuNSwxNDMuMSAyNTQuNiwxNDEuOCAyNDkuOCwxNDAuMkMyNDkuMywxNDAgMjQ4LjcsMTM5LjQgMjQ4LjYsMTM4LjhDMjQ1LjgsMTI5LjEgMjM5LjcsMTIyLjIgMjMwLjcsMTE4QzIyNC42LDExNS4yIDIxOC4yLDExNC40IDIxMS43LDExNi4xQzIwNC44LDExNy45IDE5OS4zLDEyMS45IDE5NC45LDEyNy4zQzE5MC40LDEzMi44IDE4Ny4zLDEzOS4xIDE4NS4xLDE0NS44QzE4Mi4zLDE1NC40IDE4MS4zLDE2My4yIDE4Mi4yLDE3Mi4yQzE4Mi43LDE3NyAxODMuMiwxODEuOCAxODQuMiwxODYuNUMxODQuOSwxOTAuMSAxODYuNCwxOTMuNSAxODcuNiwxOTYuOUMxODguNiwxOTkuNyAxODkuNCwyMDIuNyAxOTAuNiwyMDUuNEMxOTIsMjA4LjUgMTk0LDIxMS40IDE5NS41LDIxNC41QzIwMC4yLDIyMy43IDIwNi42LDIzMS42IDIxMy43LDIzOUMyMTQuOSwyNDAuMiAyMTYuMSwyNDEuMyAyMTcuNCwyNDIuNUMyMTguMiwyNDMuMiAyMTguMywyNDMuOCAyMTcuNCwyNDQuNkMyMTAuOSwyNTAuNSAyMDMuOSwyNTUuOSAxOTYuNCwyNjAuNUMxOTAuNCwyNjQuMyAxODQuMSwyNjcuNCAxNzcuNSwyNzAuMUMxNzQuNSwyNzEuMyAxNzEuNCwyNzIuMiAxNjguMywyNzMuMkMxNjcuMiwyNzMuNiAxNjYuNiwyNzMuMSAxNjYsMjcyLjJDMTU5LjksMjYyLjYgMTUzLjUsMjUzIDE0Ny42LDI0My4zQzE0NC40LDIzOC4xIDE0MS45LDIzMi40IDEzOS4yLDIyNi45QzEzNy4zLDIyMyAxMzUuNywyMTguOSAxMzQuMSwyMTQuOUMxMzMuMywyMTIuOSAxMzIuOSwyMTAuOCAxMzIuMiwyMDguN0MxMzEuNCwyMDYuMiAxMzAuNiwyMDMuOCAxMjkuOCwyMDEuM0MxMjkuMywxOTkuOCAxMjguOSwxOTguMiAxMjguNiwxOTYuNkMxMjcuMywxOTAuNyAxMjUuOCwxODQuOCAxMjUsMTc4LjlDMTI0LjIsMTcyLjkgMTIzLjksMTY2LjggMTIzLjcsMTYwLjhDMTIzLjUsMTU1LjggMTIzLjUsMTUwLjggMTI0LDE0NS45QzEyNC40LDE0MS42IDEyNS4zLDEzNy40IDEyNi40LDEzMy4yQzEyNy40LDEyOSAxMjguOCwxMjQuOSAxMzAuMywxMjAuOUMxMzIuNSwxMTUuMSAxMzUuMywxMDkuNyAxMzguNywxMDQuNkMxNDQuNCw5NiAxNTEuNSw4OC43IDE1OS44LDgyLjZDMTY0LjksNzguOSAxNzAuMyw3NS41IDE3Ni4xLDczQzE4MC4zLDcxLjIgMTg0LjUsNjkuNCAxODguOSw2OEMxOTMuMiw2Ni43IDE5Ny42LDY1LjkgMjAxLjksNjQuOUMyMTAuNiw2Mi45IDIxOS41LDYyLjcgMjI4LjQsNjMuM0MyMzMuMyw2My42IDIzOC4yLDY0LjYgMjQzLjEsNjUuOEMyNDcsNjYuNyAyNTAuOCw2OC4xIDI1NC42LDY5LjRDMjYxLjUsNzEuOSAyNjcuOSw3NS42IDI3My45LDc5LjhDMjgzLjgsODYuOCAyOTIsOTUuNCAyOTguNiwxMDUuNUMzMDIsMTEwLjcgMzA1LDExNi4yIDMwNy4yLDEyMi4yQzMwOSwxMjcuMiAzMTAuOSwxMzIuMiAzMTIuMywxMzcuNEMzMTQuNCwxNDUuNiAzMTUuNSwxNTQuMSAzMTUuNSwxNjIuNkMzMTUuNSwxNjYuOCAzMTUuMywxNzEgMzE1LjIsMTc1LjNDMzE1LDE3NS40IDMxNC45LDE3NS44IDMxNC43LDE3Ni41WiIgc3R5bGU9ImZpbGw6cmdiKDI0OCwxNTMsMjkpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGlkPSJYTUxJRF8xNzZfIiBkPSJNMTIyLjUsMTg2LjNDMTIyLjksMTg4IDEyMy4zLDE4OS41IDEyMy42LDE5MUMxMjQuMiwxOTMuNyAxMjQuNiwxOTYuNCAxMjUuMywxOTlDMTI2LjMsMjAyLjUgMTI3LjMsMjA2LjEgMTI4LjYsMjA5LjVDMTMwLjUsMjE0LjcgMTMyLjMsMjE5LjkgMTM0LjcsMjI0LjhDMTM4LjIsMjMyLjIgMTQyLjEsMjM5LjQgMTQ1LjksMjQ2LjZDMTQ2LjIsMjQ3LjEgMTQ2LjQsMjQ3LjcgMTQ2LjgsMjQ4LjFDMTQ4LjgsMjUwLjQgMTQ4LjUsMjUyLjQgMTQ2LjksMjU0LjlDMTQ0LDI1OS4zIDE0MiwyNjQuMiAxNDEuNSwyNjkuNUMxNDEsMjc0LjYgMTQzLjMsMjc5LjMgMTQ5LjQsMjc5LjVDMTU0LjIsMjc5LjcgMTU4LjksMjc5LjEgMTYzLjUsMjc3LjhDMTY2LjcsMjc2LjkgMTcwLDI3Ni4xIDE3My4xLDI3NUMxNzcuMywyNzMuNSAxODEuNSwyNzIuMSAxODUuNCwyNzAuMkMxOTEuMSwyNjcuMyAxOTYuOCwyNjQuMSAyMDIuMiwyNjAuNkMyMTIuMywyNTQgMjIxLjUsMjQ2LjMgMjI5LjIsMjM3QzIzMy44LDIzMS40IDIzNy44LDIyNS4yIDI0MS45LDIxOS4zQzI0My4xLDIxNy42IDI0My45LDIxNS43IDI0NSwyMTMuOUMyNDUuMiwyMTMuNSAyNDYuMSwyMTMuMiAyNDYuNSwyMTMuM0MyNDguMywyMTMuOSAyNTAuMSwyMTQuNSAyNTEuNywyMTUuM0MyNTQuMiwyMTYuNiAyNTYuNiwyMTggMjU5LDIxOS40QzI2Ny4zLDIyNC40IDI3NC42LDIzMC42IDI4MC4zLDIzOC40QzI4My4yLDI0Mi40IDI4NS41LDI0Ni44IDI4OCwyNTEuMUMyODguNywyNTIuMyAyODguNywyNTMuNSAyODgsMjU0LjdDMjgyLjksMjYzLjMgMjc3LjIsMjcxLjUgMjcwLjYsMjc5QzI1OC44LDI5Mi41IDI0NS4yLDMwNCAyMzAuNCwzMTRDMjIyLjQsMzE5LjQgMjE0LjEsMzI0LjQgMjA1LjQsMzI4LjVDMTk5LjEsMzMxLjQgMTkyLjcsMzMzLjggMTg2LjIsMzM2LjFDMTcyLjUsMzQwLjkgMTU4LjQsMzQyLjcgMTQ0LDM0MS4zQzEzOC42LDM0MC44IDEzMy4zLDMzOS40IDEyOCwzMzhDMTIwLjcsMzM2LjEgMTE0LjEsMzMyLjkgMTA3LjcsMzI4LjlDOTkuMiwzMjMuNSA5Mi40LDMxNi42IDg3LjksMzA3LjVDODQuNCwzMDAuNSA4Mi4yLDI5My4yIDgxLjYsMjg1LjRDODEuMiwyODAuNCA4MC43LDI3NS40IDgxLDI3MC41QzgxLjMsMjY1IDgyLjMsMjU5LjYgODMuNCwyNTQuMkM4NC4xLDI1MC40IDg1LjEsMjQ2LjYgODYuNCwyNDNDODguNCwyMzcuNyA5MC44LDIzMi41IDkzLjIsMjI3LjNDOTcuMSwyMTguOSAxMDIuMiwyMTEuMiAxMDcuOCwyMDMuOEMxMTIuMSwxOTguMiAxMTYuNywxOTMgMTIxLjIsMTg3LjZDMTIxLjQsMTg3LjEgMTIxLjksMTg2LjggMTIyLjUsMTg2LjNaIiBzdHlsZT0iZmlsbDpyZ2IoMTQ2LDM5LDE0Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/home.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/home.tsx */"./pages/home.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "atob":
/*!***********************!*\
  !*** external "atob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "dva-loading":
/*!******************************!*\
  !*** external "dva-loading" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva-loading");

/***/ }),

/***/ "dva-no-router":
/*!********************************!*\
  !*** external "dva-no-router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva-no-router");

/***/ }),

/***/ "dva-no-router/fetch":
/*!**************************************!*\
  !*** external "dva-no-router/fetch" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva-no-router/fetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-medium-image-zoom":
/*!******************************************!*\
  !*** external "react-medium-image-zoom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-medium-image-zoom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map