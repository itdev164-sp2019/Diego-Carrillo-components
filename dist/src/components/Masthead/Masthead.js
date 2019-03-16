"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Masthead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rebass = require("rebass");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    width: 100%;\n    background-color: rebeccapurple;\n    margin-bottom: 1.45rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Outer = (0, _styledComponents.default)(_rebass.Box)(_templateObject(), function (props) {
  return props.height;
});

var Masthead = function Masthead(_ref) {
  var height = _ref.height,
      siteTitle = _ref.siteTitle;
  return _react.default.createElement(Outer, {
    height: height
  }, _react.default.createElement(_rebass.Link, {
    href: "/",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, siteTitle));
};

exports.Masthead = Masthead;
Masthead.PropTypes = {
  height: _propTypes.default.string.isRequired,
  siteTitle: _propTypes.default.string
};

//# sourceMappingURL=Masthead.js.map