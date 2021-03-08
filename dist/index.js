function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactBootstrap = require('react-bootstrap');
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

var Heading4 = function Heading4(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("h4", null, children);
};

var H4 = Heading4;

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var PDFImage = styled.img(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([""])));
var JoomlaPdfIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  background: url(\"", "\") 0 center no-repeat;\n  background-attachment: scroll;\n  background-clip: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  background-image: url(", ");\n  background-origin: padding-box;\n  background-position-x: 0px;\n  background-position-y: 50%;\n  background-size: auto;\n  color: rgb(31, 62, 79);\n  display: block;\n  font-size: 16px;\n  height: 16px;\n  line-height: 16px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-top: 0px;\n  text-size-adjust: 100%;\n"])), function (_ref) {
  var icon = _ref.icon;
  return icon;
}, function (_ref2) {
  var icon = _ref2.icon;
  return icon;
});
var JoomlaPdfLink = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-family: Montserrat, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  height: 16px;\n  line-height: 25.6px;\n  margin-bottom: 5px;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-top: 5px;\n  padding-bottom: 3px;\n  padding-left: 0px;\n  padding-right: 5px;\n  padding-top: 3px;\n  text-size-adjust: 100%;\n"])));
var JoomlaAnchor = styled.a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: rgb(56, 181, 230);\n  cursor: pointer;\n  display: inline;\n  font-family: Montserrat, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  height: auto;\n  line-height: 16px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 0px;\n  text-decoration-color: rgb(56, 181, 230);\n  text-decoration-line: underline;\n  text-decoration-style: solid;\n  text-decoration-thickness: auto;\n  text-size-adjust: 100%;\n  transition: all 0.3s ease;\n  :hover {\n    color: rgb(132, 196, 71);\n    text-decoration-color: rgb(132, 196, 71);\n  }\n"])));

var DipraPdf = function DipraPdf(_ref3) {
  var image = _ref3.image,
      title = _ref3.title,
      link = _ref3.link,
      heading = _ref3.heading,
      icon = _ref3.icon;
  return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, {
    className: "flex-column"
  }, heading ? /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(H4, null, heading)) : null, image ? /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_self"
  }, /*#__PURE__*/React.createElement(PDFImage, {
    src: image,
    alt: "PDF Download of " + title
  }))) : null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(JoomlaPdfLink, null, /*#__PURE__*/React.createElement(JoomlaPdfIcon, {
    icon: icon
  }, /*#__PURE__*/React.createElement(JoomlaAnchor, {
    href: link,
    target: "_self"
  }, title))))))));
};
DipraPdf.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  heading: PropTypes.string,
  icon: PropTypes.string
};
DipraPdf.defaultProps = {
  icon: "https://dipra.org/media/com_phocadownload/images/mime/16/icon-pdf.png"
};

var PdfDownload = DipraPdf;

exports.H4 = H4;
exports.PdfDownload = PdfDownload;
//# sourceMappingURL=index.js.map
