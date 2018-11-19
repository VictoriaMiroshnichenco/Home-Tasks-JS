'use strict';
const intoTheScope = "Точка попадает в область";
const outTheScope = "Точка НЕ попадает в область";
const errorMsg = "Invalid data";
const typeX = "Type  X ";
const typeY = "Type Y";


//evaluate input X and Y. The values should be a number
let x = prompt(typeX);
x = parseFloat(x);
while (isNaN(x)) {
    alert(errorMsg);
    x = prompt(typeX);
}
let y = prompt(typeY);
y = parseFloat(y);
while (isNaN(y)) {
    alert(errorMsg);
    y = prompt(typeY);
}
//-------------------------------------------


