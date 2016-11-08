/**
 * Created by melton on 11.10.2016.
 */
"use strict";
/*
 //первое задание
 function min(a,b) {
 if (a<b) return a; else return b;
 }
 console.log(min(0, 10)); // → 0
 console.log(min(0, -10)); // → -10
 */

/*
// второое задание countBs
function countBs(slovo) {
    var n = 0;
    for (var i = 0; i <= (slovo.length - 1); i++) {
        if (slovo.charAt(i) == 'в') {
            n++;
        }
    }
    return n;
}
console.log(countBs('вовав'));
*/


// второое задание countChar
function countChar(slovo,symbol) {
    var n = 0;
    for (var i = 0; i < slovo.length ; i++) {
        if (slovo.charAt(i) == symbol) {
            n++;
        }
    }
    return n+ ' ' +symbol;
}
console.log(countChar('вовав','а'));
