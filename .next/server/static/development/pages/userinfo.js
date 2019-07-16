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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/userinfo.less":
/*!*****************************!*\
  !*** ./pages/userinfo.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"userinfo-page": "userinfo-page___1Xzcn",
	"header": "header____YkxR",
	"top-placement": "top-placement___3uIOL",
	"logo": "logo___Cb3Qg",
	"list-info": "list-info___3JrWm",
	"item-info": "item-info___2HMGS",
	"image": "image___2R_cQ",
	"main-container": "main-container___2v_ic",
	"main-left": "main-left___3Ip3N",
	"username": "username___rJdPy",
	"info": "info___cg3N4",
	"edit-btn-container": "edit-btn-container___1-RC6",
	"edit-form": "edit-form___UgREq",
	"form-input": "form-input___2UZwX",
	"main-center": "main-center___3jJNM",
	"message-container": "message-container___mAR5N",
	"portrait": "portrait___12Nyo",
	"info-container": "info-container___2nlfi",
	"theme": "theme___M8x8k",
	"time": "time___30DqD",
	"tool-bar": "tool-bar___1I3l-",
	"bar-btn": "bar-btn___1JaFy",
	"main-right": "main-right___1f-7l",
	"edit-btn": "edit-btn___1xJk6"
};

/***/ }),

/***/ "./pages/userinfo.tsx":
/*!****************************!*\
  !*** ./pages/userinfo.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userinfo_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userinfo.less */ "./pages/userinfo.less");
/* harmony import */ var _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_userinfo_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/logo.svg */ "./static/logo.svg");
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store */ "./src/store.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var UserInfo = ( // @ts-ignore
_dec = Object(_src_store__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref) {
  var albums = _ref.albums,
      loading = _ref.loading;
  return {
    albums: albums,
    loading: loading.effects['_user/login']
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  _createClass(UserInfo, null, [{
    key: "getInitialProps",
    // 异步获取 JS 普通对象，并绑定在props上当服务渲染时, 我是最先执行的声明周期函数  first
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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

  // 构造函数， 我是 second
  function UserInfo(props) {
    var _this;

    _classCallCheck(this, UserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserInfo).call(this, props));
    var username = _this.props.username; // 定义state数据

    _this.state = {
      isEdit: false
    };
    console.log('huangbiao', username);
    return _this;
  } // 页面加载完了，设置body的背景色    我是 Third


  _createClass(UserInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementsByTagName('body')[0].style.background = '#E7ECEF';
      var _this$props = this.props,
          username = _this$props.username,
          Identity = _this$props.Identity,
          Bio = _this$props.Bio,
          Position = _this$props.Position,
          Institution = _this$props.Institution,
          Website = _this$props.Website,
          messageList = _this$props.messageList;
      console.log('huangbiao', username);
      var userinfoStr = window.localStorage.getItem("userinfo");
      var userInfo = JSON.parse(userinfoStr);
      this.setState({
        "username": userInfo.fullName,
        "Identity": userInfo.occupation,
        "Bio": userInfo.bio,
        "Position": userInfo.profession,
        "Institution": userInfo.institution,
        "Website": userInfo.personalWebsite
      });
      this.getMesageList();
    }
  }, {
    key: "getMesageList",
    value: function getMesageList() {
      var that = this;
      var userInfoStr = window.localStorage.getItem("userinfo");
      var userInfo = JSON.parse(userInfoStr);
      var tokenStr = userInfo.token;
      var userId = userInfo.userId;
      var opts = {
        method: "GET"
      };
      fetch("http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/post?offset=0&limit=10&userIds=" + userId + "&statuses=Draft&subscribedOnly=false", {
        method: "GET",
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + tokenStr
        }
      }).then(function (response) {
        return response.json(); //返回一个带有文本的对象
      }).then(function (res) {
        var messageArr = res;
        var result = [];

        for (var i = 0; i < messageArr.length; i++) {
          var currentObj = messageArr[i];
          var showObj = {
            id: currentObj.post.id,
            title: currentObj.post.title,
            message: currentObj.post.text,
            date: moment__WEBPACK_IMPORTED_MODULE_7___default()(new Date(currentObj.post.lastModififedDate)).format('YYYY-MM-DD HH:mm:ss')
          };
          result.push(showObj);
        }

        that.setState({
          "messageList": result
        });
      }).catch(function (error) {
        alert(error);
      });
    } // 离开页面处理的逻辑  我是 Last

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {} // 点击编辑按钮，将 isEdit 改为true，即 编辑状态

  }, {
    key: "editAction",
    value: function editAction() {
      this.setState({
        isEdit: true
      });
    } // 点击取消按钮，将 isEdit 改为false，即 非编辑状态

  }, {
    key: "cancelInputAction",
    value: function cancelInputAction() {
      this.setState({
        isEdit: false
      });
    } // saveUserInfoAction () {
    //     this.setState({
    //         isEdit: false
    //     })
    // }
    // 输入表单，触发的onchange事件，改变input的值

  }, {
    key: "userInputChange",
    value: function userInputChange(type, eventObj) {
      var newValue = eventObj.target.value;

      if (type === 'username') {// this.setState({
        //     username: newValue
        // });
      } else if (type === 'Identity') {
        this.setState({
          Identity: newValue
        });
      } else if (type === 'Bio') {
        this.setState({
          Bio: newValue
        });
      } else if (type === 'Website') {
        this.setState({
          Website: newValue
        });
      } else if (type === 'Position') {
        this.setState({
          Position: newValue
        });
      } else if (type === 'Institution') {
        this.setState({
          Institution: newValue
        });
      }
    } // 点击头像，触发点击上传文件的表单

  }, {
    key: "changeImageAction",
    value: function changeImageAction() {
      this.refs.inputfile.click();
    } // 根据 state.isEdit 的值，显示不同的内容

  }, {
    key: "getUserInfoHtml",
    value: function getUserInfoHtml() {
      var _this$state = this.state,
          isEdit = _this$state.isEdit,
          username = _this$state.username,
          Identity = _this$state.Identity,
          Bio = _this$state.Bio,
          Position = _this$state.Position,
          Institution = _this$state.Institution,
          Website = _this$state.Website;

      if (isEdit) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-form'],
          style: {
            marginTop: '7px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: username,
          value: username,
          onChange: this.userInputChange.bind(this, 'username'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "user",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Username"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: Bio,
          value: Bio,
          onChange: this.userInputChange.bind(this, 'Bio'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "apartment",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Bio"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: Identity,
          value: Identity,
          onChange: this.userInputChange.bind(this, 'Identity'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "environment",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Identity"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: Position,
          value: Position,
          onChange: this.userInputChange.bind(this, 'Position'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "global",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Position"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: Institution,
          value: Institution,
          onChange: this.userInputChange.bind(this, 'Institution'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "global",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Institution"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['form-input']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          defaultValue: Website,
          value: Website,
          onChange: this.userInputChange.bind(this, 'Website'),
          prefix: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            type: "global",
            style: {
              color: 'rgba(0,0,0,.25)'
            }
          }),
          placeholder: "Website"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          style: {
            textAlign: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-btn-container']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-btn'],
          onClick: this.cancelInputAction.bind(this)
        }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-btn-container']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-btn'],
          onClick: this.saveUserInfoAction.bind(this)
        }, "Save"))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.username
        }, username), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.info
        }, Bio), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.info
        }, Identity), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.info
        }, Position), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.info
        }, Institution), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.info
        }, Website));
      }
    }
  }, {
    key: "saveUserInfoAction",
    value: function saveUserInfoAction() {
      var _this$state2 = this.state,
          username = _this$state2.username,
          Position = _this$state2.Position,
          Institution = _this$state2.Institution,
          Bio = _this$state2.Bio,
          Identity = _this$state2.Identity,
          Website = _this$state2.Website,
          isEdit = _this$state2.isEdit;
      isEdit = false;
      var userInfoStr = window.localStorage.getItem("userinfo");
      var userInfo = JSON.parse(userInfoStr);
      userInfo.profession = Position;
      userInfo.userName = username;
      userInfo.institution = Institution;
      userInfo.bio = Bio;
      userInfo.occupation = Identity;
      userInfo.personalWebsite = Website;
      var tokenStr = userInfo.token;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/users/editprofile?userName=" + username + "&Identity=" + Identity + "&Bio=" + Bio + "&Position=" + Position + "&Institution=" + Institution + "&Website=" + Website, {}, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + tokenStr
        }
      }).then(function (res) {
        console.log(res);
        var userInfoStr = JSON.stringify(userInfo);
        window.localStorage.setItem("userinfo", userInfoStr); // debugger
      }).catch(function (err) {
        console.log(err);
      });
    } // 页面跳转到首页

  }, {
    key: "goHomePage",
    value: function goHomePage() {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/profile');
    } // 收藏

  }, {
    key: "collectAction",
    value: function collectAction(messageObj, eventObj) {
      var messageList = this.state.messageList; // 循环遍历 state中的 数组对象

      var newListData = messageList.map(function (item, idx) {
        if (item.id === messageObj.id) {
          // 改变值
          return _objectSpread({}, item, {
            isCollect: !messageObj.isCollect
          });
        } else {
          return item;
        }
      }); // 变化之后的 JSON数组，重新赋值

      this.setState({
        messageList: newListData
      });
    } // 点赞

  }, {
    key: "complimentAction",
    value: function complimentAction(messageObj, index, eventObj) {
      var messageList = this.state.messageList;
      messageList[index]['isCompliment'] = !messageList[index]['isCompliment']; // let newListData = JSON.parse(JSON.stringify(messageList));

      var newListData = messageList;
      this.setState({
        messageList: newListData
      });
    } // 获取用户的评论列表

  }, {
    key: "getMessageListHtml",
    value: function getMessageListHtml() {
      var that = this;
      var messageList = this.state.messageList; // 因为 messageList 是异步加载进来的，所以最开始，是undefined

      if (!messageList) {
        messageList = [];
      }

      return messageList.map(function (messageObj, index) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['message-container'],
          key: messageObj.id
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.portrait
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: "../static/logo.png",
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.image
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['info-container']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.author
        }, messageObj.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.theme
        }, messageObj.message), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.time
        }, messageObj.date, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['tool-bar']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['bar-btn']
        }, messageObj.isCompliment ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
          className: "mdi mdi-heart",
          onClick: that.complimentAction.bind(that, messageObj, index)
        }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
          className: "mdi mdi-heart-outline",
          onClick: that.complimentAction.bind(that, messageObj, index)
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['bar-btn']
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
          className: "mdi mdi-comment-outline",
          onClick: that.collectAction.bind(that, messageObj)
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['bar-btn']
        }, messageObj.isCollect ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
          className: "mdi mdi-bookmark",
          onClick: that.collectAction.bind(that, messageObj),
          style: {
            color: '#FEC603'
          }
        }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
          className: "mdi mdi-bookmark-outline",
          onClick: that.collectAction.bind(that, messageObj)
        }))))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      // 得到的是用户的信息 HTML
      var userInfoHtml = this.getUserInfoHtml();
      var messageListHtml = this.getMessageListHtml();
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['userinfo-page']
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.header
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['top-placement']
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        alt: "logo",
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
        src: _static_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        onClick: this.goHomePage.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['list-info']
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['item-info']
      }, "1 post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['item-info']
      }, "1 Following"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['item-info']
      }, "1 Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['item-info']
      }, "1 Views"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          'clear': 'both'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "../static/logo.png",
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        onClick: this.changeImageAction.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "file",
        ref: "inputfile",
        style: {
          display: 'none'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['main-container']
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['main-left']
      }, userInfoHtml), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['main-center']
      }, messageListHtml), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['main-right']
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        className: _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default.a['edit-btn'],
        onClick: this.editAction.bind(this)
      }, "Edit profile"))));
    }
  }]);

  return UserInfo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class);


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

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/userinfo.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/userinfo.tsx */"./pages/userinfo.tsx");


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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=userinfo.js.map