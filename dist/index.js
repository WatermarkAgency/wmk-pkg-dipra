function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactBootstrap = require('react-bootstrap');
var styled = _interopDefault(require('styled-components'));

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

var _templateObject, _templateObject2;
var PDFImage = styled.img(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin-bottom: -20px;\n  margin-top: 8px;\n"])));
var JoomlaPdfIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  background: url(\"https://www.dipra.org/media/com_phocadownload/images/mime/16/icon-pdf.png\")\n    0 center no-repeat;\n"])));

var DipraPdf = function DipraPdf(_ref) {
  var image = _ref.image,
      title = _ref.title,
      link = _ref.link,
      heading = _ref.heading;
  return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, {
    className: "flex-column"
  }, heading ? /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(H4, null, heading)) : null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_self"
  }, /*#__PURE__*/React.createElement(PDFImage, {
    src: image,
    alt: "PDF Download of " + title
  }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", {
    className: "pd-filename phocadownloadfile phoca-dl-file-box-mod"
  }, /*#__PURE__*/React.createElement(JoomlaPdfIcon, {
    className: "pd-document16"
  }, /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_self"
  }, title))))))));
};

var PdfDownload = DipraPdf;

exports.H4 = H4;
exports.PdfDownload = PdfDownload;
//# sourceMappingURL=index.js.map
