'use strict';
//Chart1
function isPointInTheScopeChart1(p1, p2) {
    return ((Math.abs(p1) <= 4 && p2 <= 4)) && (p2 >= 0 && (((p1 <= 0) && (p2 <= 4 + p1)) || ((p1 >= 0) && (p2 <= 4 - p1))));
}
function evaluateChart1(x,y) {
    let msg;
    if (isNaN(x) || isNaN(y)) {
        msg = errorMsg;
    } else {
        if (isPointInTheScopeChart1(x, y)) {
            msg = intoTheScope;
        } else {
            msg = outTheScope;
        }
    }
    console.log(msg);
}
evaluateChart1(x,y);