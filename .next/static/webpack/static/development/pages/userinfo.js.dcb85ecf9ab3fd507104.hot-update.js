webpackHotUpdate("static/development/pages/userinfo.js",{

/***/ "./pages/userinfo.tsx":
/*!****************************!*\
  !*** ./pages/userinfo.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _userinfo_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userinfo.less */ "./pages/userinfo.less");
/* harmony import */ var _userinfo_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_userinfo_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/logo.svg */ "./static/logo.svg");
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store */ "./src/store.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
        var serverData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    var tempServerData = {
                      username: 'Yijun Liu',
                      Identity: 'I am a/an Engineer',
                      Bio: 'This is Bio',
                      Position: 'I am a/an Student',
                      Institution: 'University of California, Irvine',
                      Website: 'www.Ureka.com' // "messageList": [
                      //     {
                      //         id: 1,
                      //         title: 'title',
                      //         message: 'Just setting up my Twitter.111111',
                      //         date: '2019-5-18 11:33:56'
                      //     }
                      // ]

                    };
                    resolve(tempServerData);
                  }, 2000);
                });

              case 2:
                serverData = _context.sent;
                return _context.abrupt("return", serverData);

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
    }() // 构造函数， 我是 second

  }]);

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
        "Institution": userInfo.institution
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
          Institution = _this$state2.Institution;
      var userInfoStr = window.localStorage.getItem("userinfo");
      var userInfo = JSON.parse(userInfoStr);
      userInfo.profession = Position;
      userInfo.fullName = username;
      userInfo.institution = Institution;
      var tokenStr = userInfo.token;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/users/editprofile?userName=" + username + "&Position=" + Position + "&Institution=" + Institution, {}, {
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

    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/userinfo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=userinfo.js.dcb85ecf9ab3fd507104.hot-update.js.map