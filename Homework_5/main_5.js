/**
 * Created by melton on 11.10.2016.
 */
"use strict";
/*
 // 1) Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция должна принимать 3 числа
  от 0 до 255 и возвращать строковый хеш:
  */
/*
function get16(num10) {
    var num16 = num10 > 15 ? num10.toString(16) : "0" + num10.toString(16);
    return num16;
}
function getColor16(red, green, blue) {
    var color;
    color = get16(red) + get16(green) + get16(blue);
    if ((red > 255) || (red < 0) || (green > 255) || (green < 0) || (blue > 255) || (blue < 0)) {
        console.log('Введены некорректные значения цвета');
    } else {
        console.log(color);
    }
}
getColor16(251, 255, 250);
*/

// 2) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
// на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например для числа
// 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

/*function createObjectOfNumber(num) {
    var obj = {};
    if (num > 999) {
        console.log('Ошибка. Число больше 999.');
        return obj;
    }
    num = String(num);
    obj = {
        'единицы': +num.charAt(2),
        'десятки': +num.charAt(1),
        'сотни': +num.charAt(0)
    };
    return obj;
}
console.log(createObjectOfNumber(245));*/

// 3) * Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку.
// Примеры работы:
function objectToQueryString(obj) {
    var properties = [], string;
    for (var i in obj) {
        properties.push(i + '=' + obj[i]);
    }
    string = properties.join('&')
    return string;
}
console.log(objectToQueryString({user: 'Dmitry'})); // user=Dmitry
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); // user=Dmitry&password=pass
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id: 1})); // user=Dmitry&password=pass&id=1
