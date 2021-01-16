import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");

function drawAllShapes(obj: shape.IShape) {
    obj.draw(); 
}

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle()); 