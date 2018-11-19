'use strict';
//auxiliary methods
// should I make this methods private? What way?
//formula y=-x . If x>=0 but y<=0 . Area below
function isPointInAreaBottomRight(p1, p2) {
    return (p1 >= 0 && p2 <= 0 && p2 <= -p1);
}
//formula y=x . If x and y <=0. Area below
function isPointInAreaBottomLeft(p1, p2) {
    return (p1 <= 0 && p2 <= 0 && p2 <= p1);
}
//formula y=-x .If x<=0 but y>=0 Area above
function isPointInAreaTopLeft(p1, p2) {
    return (p1 <= 0 && p2 >= 0 && p2 >= -p1);
}
//formula y=x.If x and y >=0. Area above
function isPointInAreaTopRight(p1, p2) {
    return (p1 >= 0 && p2 >= 0 && p2 >= p1);
}
//------------------------------
//Chart2
function isPointInTheScopeChart2(p1, p2) {
    return (Math.abs(p1) <= 1 && Math.abs(p2) <= 1) && (isPointInAreaBottomRight(p1, p2)
        || isPointInAreaBottomLeft(p1, p2) || isPointInAreaTopLeft(p1, p2)
        || isPointInAreaTopRight(p1, p2));
}

function evaluateChart2(x, y) {
    let msg;
    if (isNaN(x) || isNaN(y)) {
        msg = errorMsg;
    } else {
        if (isPointInTheScopeChart2(x, y)) {
            msg = intoTheScope;
        } else {
            msg = outTheScope;
        }
    }
    console.log(msg);
}

evaluateChart2(x, y);