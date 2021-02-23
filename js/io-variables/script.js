var str = 'привет мир';
//alert(str);

var str1 = 'Привет';
var str2 = 'Мир';
document.write('<h3>' + str1 + str2 + '</h3>');



var num = prompt('введите число')
document.write('<p>секунд в' + num + 'часе:' + 60 * 60 * num + '</p><hr>');

var a = 10;
var b = 2;
document.write(`<p>Сумма: 10+2=${ a + b }</p>`)
document.write(`<p>Вычетание: 10-2=${a - b}</p>`)
document.write(`<p>Умножение: 10*2=${a * b}</p>`)
document.write(`<p>Деление: 10/2=${a / b}</p><hr>`)

var c = 15
var d = 2
var result = c + d
document.write(`<p>c+d=${result}</p><hr>`)

var a = 10
var b = 2
var c = 5
document.write(`<p>Сумма: a+b+c=${ a + b + c }</p><hr>`)

var a = 3
var b = 4
document.write(`<p>Теорема Пифагора:a² + b²=${a*a + b*b}</p><hr>`)

var a = 5
var b = 9
var c = 4
document.write(`<p>Среднее значение: (a+b+c)/3=${ (a + b + c)/3 }</p><hr>`)