/**
 * Created by melton on 11.10.2016.
 */
"use strict";
/*
1) Напишите цикл, выводит такой треугольник:
#
##
###
####
#####
######
#######
*/

var znak='';
 for (var i=1; i<=7; i++){
     znak=znak+'#';
     console.log(znak);
 }


/*
2) * Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
    На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
    */

var desk = '';
for (var a = 1; a <= 8; a++) {
    for (var b = 1; b <= 8; b++) {
        (a % 2 == 0) ? desk += '# ' : desk += ' #';
    }desk = desk + '\n'; //переход на новую строку
}
console.log(desk);