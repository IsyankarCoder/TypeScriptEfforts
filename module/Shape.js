"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShapes(obj) {
    obj.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
