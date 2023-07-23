"use strict";
exports.__esModule = true;
function getLastElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}
exports["default"] = getLastElement;
