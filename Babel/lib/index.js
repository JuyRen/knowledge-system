"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var arr = [1, 2, 3];
arr.map(function (item) {
  console.log(item);
});
Promise.resolve().finally();

var Person = /*#__PURE__*/function () {
  function Person(name, gender) {
    (0, _classCallCheck2.default)(this, Person);
    this.name = name;
    this.gender = gender;
  }

  (0, _createClass2.default)(Person, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }], [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }]);
  return Person;
}();

function fn() {
  return _fn.apply(this, arguments);
}

function _fn() {
  _fn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var time;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve("你好");

          case 2:
            time = _context.sent;
            console.log(time);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fn.apply(this, arguments);
}