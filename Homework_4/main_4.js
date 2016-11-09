/**
 * Created by melton on 11.10.2016.
 */
"use strict";
/*
 // 1) Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них:

 function min(a,b) {
    if (a<b) return a; else return b;
 }
 console.log(min(0, 10)); // → 0
 console.log(min(0, -10)); // → -10
 */

/*
 // 2) Символ номер N строки можно получить, добавив к ней .charAt(N) (“строчка”.charAt(5) ) – схожим образом
 с  получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа
 (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет
 string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
 Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”,
 содержащихся в строке. Затем напишите функцию countChar, которая работает примерно как countBs, только принимает
 второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов
 “B”). Для этого переделайте функцию countBs:

 //countBs
 function countBs(word) {
    var n = 0;
        for (var i = 0; i <= (word.length - 1); i++) {
            if (word.charAt(i) == 'в') {
                n++;
            }
        }
    return n;
 }
 console.log(countBs('вовав'));


// countChar
function countChar(word, symbol) {
    var n = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == symbol) {
            n++;
        }
    }
    return n + ' ' + symbol;
}
console.log(countChar('вовав', 'в'));
 */

/*
// 3) * Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную
 функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте
её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?*/

function isEven(number) {
    if (number == 0)
        return true;
    if (number == 1)
        return false;
    if (number < 0)
        return isEven(-number);
    else
        return isEven(number - 2);
}
console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false