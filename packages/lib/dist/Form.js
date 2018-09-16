"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Consumer = exports.Provider = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _React$createContext = _react.default.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = _this.props.value || {}, _this.nodes = [], _temp));
  }

  _createClass(Form, [{
    key: "register",
    value: function register(name) {
      var _this2 = this;

      return function (node) {
        if (node === null) {
          _this2.nodes = _this2.nodes.filter(function (n) {
            return n.name === name;
          });
        } else {
          _this2.nodes = _this2.nodes.concat({
            name: name,
            node: node
          });
        }
      };
    }
  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return function () {
        return _this3.state[name];
      };
    }
  }, {
    key: "update",
    value: function update(name) {
      var _this4 = this;

      return function (text) {
        _this4.setState(function (prevState) {
          var onChange = _this4.props.onChange;
          var v = onChange && onChange(name, text, prevState, _this4);

          if (_typeof(v) === 'object') {
            return _objectSpread(_defineProperty({}, name, text), v);
          }

          return _defineProperty({}, name, text);
        });

        _this4.nodes.filter(function (n) {
          return n.name === name;
        }).forEach(function (n) {
          return n.node.validate(text);
        });
      };
    }
  }, {
    key: "next",
    value: function next(name) {
      var _this5 = this;

      return function () {
        var idx = _this5.nodes.findIndex(function (n) {
          return n.name === name;
        }) + 1;

        if (idx < _this5.nodes.length) {
          _this5.nodes[idx].node.focus();
        }
      };
    }
  }, {
    key: "submit",
    value: function submit() {
      var state = this.state,
          props = this.props;
      this.nodes.forEach(function (iNode) {
        var node = iNode.node;
        node.validate(node.props.value);
      });
      props.onSubmit(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          onChange = _this$props.onChange,
          value = _this$props.value,
          other = _objectWithoutProperties(_this$props, ["onSubmit", "onChange", "value"]);

      this.register = this.register.bind(this);
      this.get = this.get.bind(this);
      this.next = this.next.bind(this);
      this.update = this.update.bind(this);
      this.submit = this.submit.bind(this);
      return _react.default.createElement(Provider, _extends({
        value: {
          form: this,
          state: this.state
        }
      }, other));
    }
  }]);

  return Form;
}(_react.Component);

var _default = Form;
exports.default = _default;