"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ROOT = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Group = require("./Group");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ROOT = Math.floor(Math.random() * 100 + 1);
exports.ROOT = ROOT;

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
    _this.state = {};
    _this.nodes = [];
    return _this;
  }

  _createClass(Form, [{
    key: "update",
    value: function update(name, text) {
      var _this2 = this;

      var onChange = this.props.onChange;

      if (onChange) {
        onChange(name, text, this.state);
      }

      this.setState(_defineProperty({}, name, text), function () {
        return console.log('State Form: ', _this2.state);
      });
    }
  }, {
    key: "register",
    value: function register(name, node) {
      if (node === null) {
        this.nodes = this.nodes.filter(function (n) {
          return n.name !== name;
        });
      } else {
        this.nodes = this.nodes.concat({
          name: name,
          node: node
        });
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.state[name];
    }
  }, {
    key: "submit",
    value: function submit() {
      var onSubmit = this.props.onSubmit;
      var formState = this.validate();
      onSubmit(formState);
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this3 = this;

      var formState = {};
      this.nodes.forEach(function (iNode) {
        var name = iNode.name,
            node = iNode.node;
        var v = node.validate(_this3.state[name]);

        if (name in _this3.state) {
          formState[name] = v;
        }
      });
      return formState;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onSubmit = _this$props.onSubmit,
          onChange = _this$props.onChange,
          other = _objectWithoutProperties(_this$props, ["value", "onSubmit", "onChange"]);

      return _react.default.createElement(_Group.Provider, _extends({
        value: {
          owner: this,
          state: this.state
        }
      }, other));
    }
  }]);

  return Form;
}(_react.Component);

var _default = Form;
exports.default = _default;