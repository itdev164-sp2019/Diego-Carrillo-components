"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rebass = require("rebass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//15.3K (gzipped: 4.7k)
var BaseContainer = function BaseContainer(_ref) {
  var children = _ref.children,
      flex = _ref.flex,
      props = _objectWithoutProperties(_ref, ["children", "flex"]);

  if (flex) {
    return _react.default.createElement(_rebass.Flex, _extends({}, props, {
      className: props.className
    }), children);
  } else {
    return _react.default.createElement("box", _extends({}, props, {
      className: props.className
    }), children);
  }
};

exports.BaseContainer = BaseContainer;
BaseContainer.PropTypes = {
  flex: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};

//# sourceMappingURL=BaseContainer.js.map