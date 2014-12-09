require("jquery");
require("angular");
require("angular-ui-router");
require("angular-sanitize");
require("angular-aria");
require("angular-moment");
require("angular-scroll");
require("./ui-bootstrap");

require("ux-angularjs-datagrid");

window._ = require("lodash");
window.phoneParser = require("phone-parser");
window.moment = require("moment");


window.onerror = function (errorMsg, url, lineNumber, columnNumber, errorObject) {
  var errMsg;
  //check the errorObject as IE and FF don't pass it through (yet)
  if (errorObject && errorObject !== undefined) {
    errMsg = errorObject.message;
  }
  else {
    errMsg = errorMsg;
  }
  console.error('Error: ' + errMsg);
};
