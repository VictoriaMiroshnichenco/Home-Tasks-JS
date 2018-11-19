'use strict';
let radius = 1;
//auxiliary methods
//formula : radius^2=x^2+y^2
function isPointInTheCircle(x, y) {
    return ((Math.abs(x) <= radius && Math.abs(y) <= radius) &&( (Math.pow(x,2) + Math.pow(y,2)) <= Math.pow(radius,2)));
}
//formula : y=-2-x
function isPointInTriangleAreaBottomLeft(x, y) {
    return (Math.abs(x) <= 2 && y <= 2) && (x <= 0 && y <= 0 && y <= -2 - x);
}

function isPointInTheScopeChart3(x,y){
    return(isPointInTheCircle(x,y)||isPointInTriangleAreaBottomLeft(x,y));
}
function evaluateChart3(x, y) {
    let msg;
    if (isNaN(x) || isNaN(y)) {
        msg = errorMsg;
    } else {
        if (isPointInTheScopeChart3(x, y)) {
            msg = intoTheScope;
        } else {
            msg = outTheScope;
        }
    }
    console.log(msg);
}
evaluateChart3(x,y);