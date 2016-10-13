/**
 * Created by melton on 11.10.2016.
 */
"use strict";
var z='';
 for (var x=1; x<=7; ++x){
 z=z+'#';
 console.log(z);
 }

var z = '';
for (var a = 1; a <= 8; a++) {
    for (var b = 1; b <= 8; b++) {
        (a % 2 == 0) ? z += '# ' : z += ' #';
    }z = z + '\n';
}
console.log(z);