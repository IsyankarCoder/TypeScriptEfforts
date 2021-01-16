
 
      /// <reference path = "IShape.ts" />   
      /// <reference path = "Circle.ts" /> 
      /// <reference path = "Triangle.ts" />  
    function drawAllPages(shape:Drawing.IShape) {
        shape.draw();
    }

    drawAllPages(new  Drawing.Circle());
    drawAllPages(new  Drawing.Triangle());
 