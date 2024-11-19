"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Repeat;
function Repeat(_ref) {
  var times = _ref.times,
    render = _ref.render;
  return Array.from({
    length: times
  }, function (_, index) {
    return render(index);
  });
}