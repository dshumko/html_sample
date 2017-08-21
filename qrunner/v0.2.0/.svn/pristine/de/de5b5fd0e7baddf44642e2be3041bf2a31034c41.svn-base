/*
 * TEST CASE for HTML5 2D Canvas
 *
 * written by STB-Component Browser Part.
 *
 */

/* http://www.w3schools.com/tags/ref_canvas.asp */


window.addEventListener('load', function(){
    // append container as root node of output area
    var container = document.createElement("div");
    container.setAttribute("class", "output_container");
    document.body.appendChild(container);

    // append canvas as a child of container for this
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    container.appendChild(canvas);

});

var CANVAS_DELAY_TIME = 500;

function beginContext() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    return ctx;
}

function endContext(ctx) {
    ctx.restore();
}


module("Colors, Styles, and Shadows");

asyncTest("fillStyle", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle="#FF0000";
    ctx.fillRect(20, 20, 150, 100);
});


asyncTest("strokeStyle", function() {
    setTimeout(function () {
        QUnit.start();
        ok(true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(20, 20, 150, 100)
});

asyncTest("shadowColor", function() {
    setTimeout(function () {
        QUnit.start();
        ok(true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
});

asyncTest("shadowBlur", function() {
    setTimeout(function () {
        QUnit.start();
        ok(true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
});

asyncTest("shadowOffsetX", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
});

asyncTest("shadowOffsetY", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
});

asyncTest("createLinearGradient()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
});

asyncTest("createPattern()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var img = document.createElement("img");
    img.setAttribute("src", "images/lamp.jpg");
    var pat = ctx.createPattern(img, "repeat");
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
});

asyncTest("createRadialGradient()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 100);
});

asyncTest("addColorStop()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var grd = ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
});

module("Line Styles");

asyncTest("lineCap", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();
});

asyncTest("lineJoin", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 50);
    ctx.lineTo(20, 100);
    ctx.stroke();
});

asyncTest("lineWidth", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 80, 100);
});

asyncTest("miterLimit", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.lineWidth = 10;
    ctx.lineJoin = "miter";
    ctx.miterLimit = 5;
    ctx.moveTo(20, 20);
    ctx.lineTo(50, 27);
    ctx.lineTo(20, 34);
    ctx.stroke();
});

module("Rectangles");

asyncTest("rect()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
});

asyncTest("fillRect()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillRect(20, 20, 150, 100);
});

asyncTest("strokeRect()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.strokeRect(20, 20, 150, 100);
});

asyncTest("clearRect()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 150);
    ctx.clearRect(20, 20, 100, 50);
});

module("Paths");

asyncTest("fill()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = "red";
    ctx.fill();
});

asyncTest("stroke()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.strokeStyle = "red";
    ctx.stroke();
});

asyncTest("beginPath()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green"; // Green path
    ctx.moveTo(0, 75);
    ctx.lineTo(250, 75);
    ctx.stroke(); // Draw it
    ctx.beginPath();
    ctx.strokeStyle = "purple"; // Purple path
    ctx.moveTo(50, 0);
    ctx.lineTo(150, 130);
    ctx.stroke(); // Draw it
});

asyncTest("moveTo()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
});

asyncTest("closePath()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.closePath();
    ctx.stroke();
});

asyncTest("lineTo()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
});

asyncTest("clip()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    // Clip a rectangular area
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    ctx.clip();
    // Draw red rectangle after clip()
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 100);
});

asyncTest("quadraticCurveTo()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, 100, 200, 20);
    ctx.stroke();
});

asyncTest("bezierCurveTo()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
});

asyncTest("arc()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2*Math.PI);
    ctx.stroke();
});

asyncTest("arcTo()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.beginPath();
    ctx.moveTo(20, 20);              // Create a starting point
    ctx.lineTo(100, 20);             // Create a horizontal line
    ctx.arcTo(150, 20, 150, 70, 50); // Create an arc
    ctx.lineTo(150, 120);            // Continue with vertical line
    ctx.stroke();                    // Draw it
});

asyncTest("isPointInPath()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.rect(20, 20, 150, 100);
    if (ctx.isPointInPath(20, 50))
    {
        ctx.stroke();
    };
});

module("Transformations");

asyncTest("scale()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(2, 2);
    ctx.strokeRect(5, 5, 25, 15);
});

asyncTest("rotate()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.rotate(20 * Math.PI / 180);
    ctx.fillRect(50, 20, 100, 50);
});

asyncTest("translate()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillRect(10, 10, 100, 50);
    ctx.translate(70, 70);
    ctx.fillRect(10, 10, 100, 50);
});

asyncTest("transform()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
});

asyncTest("setTransform()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
});

module("Image Drawing");

asyncTest("drawImage()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var img = document.createElement("img");
    img.setAttribute("src", "images/scream.jpg");
    ctx.drawImage(img, 10, 10);
});

module("Pixel Manipulation");

asyncTest("width", function() {
    setTimeout( function() {
        QUnit.start();
        ok (imgData.width == width, "Width of imgData is not " + width);
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var width  = 100;
    var height = 100;
    var imgData = ctx.createImageData(width, height);
    for (var i=0; i<imgData.data.length; i+=4)
    {
        imgData.data[i+0] = 255;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
});

asyncTest("height", function() {
    setTimeout( function() {
        QUnit.start();
        ok (imgData.height == height, "Width of imgData is not " + height);
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var width  = 100;
    var height = 100;
    var imgData = ctx.createImageData(width, height);
    for (var i=0; i<imgData.data.length; i+=4)
    {
        imgData.data[i+0] = 0;
        imgData.data[i+1] = 255;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
});

asyncTest("data", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var imgData = ctx.createImageData(100, 100);
    for (var i=0; i<imgData.data.length; i+=4)
    {
        imgData.data[i+0] = 0;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 255;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
});

asyncTest("createImageData()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    var imgData = ctx.createImageData(100, 100);
    for (var i=0; i<imgData.data.length; i+=4)
    {
        imgData.data[i+0] = 255;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
});

asyncTest("getImageData()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
    // copy
    var imgData = ctx.getImageData(10, 10, 50, 50);
    ctx.putImageData(imgData, 10, 70);
});

asyncTest("putImageData()", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 50);
    // copy
    var imgData = ctx.getImageData(10, 10, 50, 50);
    ctx.putImageData(imgData, 10, 70);
});


module("Compositing");

asyncTest("globalAlpha", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    // Turn transparency on
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "green";
    ctx.fillRect(80, 80, 75, 50);
});

asyncTest("globalCompositeOperation", function() {
    setTimeout( function() {
        QUnit.start();
        ok (true, "");
        endContext(ctx);
    }, CANVAS_DELAY_TIME);
    var ctx = beginContext();
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "red";
    ctx.fillRect(150, 20, 75, 50);
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "blue";
    ctx.fillRect(180, 50, 75, 50);
});

