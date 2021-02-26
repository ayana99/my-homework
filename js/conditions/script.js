let number = prompt('Введите цифру пальца')

if (number == 1) {
    document.write('<p>Большой палец</p>')
}

if (number == 2) {
    document.write('<p>Указательный палец</p>')
}

if (number == 3) {
    document.write('<p>Средний палец</p>')
}

if (number == 4) {
    document.write('<p>Безымянный палец</p>')
}

if (number == 5) {
    document.write('<p>Мизинец</p>')
}

if (number > 5) {
    document.write('<p>Ошибка</p>')
}



let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)

document.write(`<h3>Rondom number 1: ${num1}</h3>`)
document.write(`<h3>Rondom number 2: ${num2}</h3>`)

if (num1 % num2 == 0) {
    document.write(`<h3>${num1} divided to ${num2}</h3>`)
} else {
    document.write(`<h3>${num1} not divided to ${num2}</h3><hr>`)
}




var numb1 = prompt('Введите любую цифру')
var numb2 = prompt('Введите любую цифру')

document.write(`<h3>Цифра 1: ${numb1}</h3>`)
document.write(`<h3>Цифра 2: ${numb2}</h3>`)


if (numb1 + numb2 > 0) {
    document.write(`<h3>${numb1 + numb2}</h3>`)
} else {
    document.write(`<h3>условия не выполняются</h3><hr>`)
}



var numeral1 = prompt('Введите цифру *')
var numeral2 = prompt('Введите цифру *')
var numeral3 = prompt('Введите цифру *')

document.write(`<h3>Цифра 1: ${numeral1}</h3>`)
document.write(`<h3>Цифра 2: ${numeral2}</h3>`)
document.write(`<h3>Цифра 3: ${numeral3}</h3>`)

if (numeral1 % 5 == 0) {
    document.write(`<h3>${numeral1} - делится на 5</h3>`)
} else {
    document.write(`<h3>условия не выполняются</h3>`)
}

if (numeral2 % 5 == 0) {
    document.write(`<h3>${numeral2} - делится на 5</h3>`)
} else {
    document.write(`<h3>условия не выполняются</h3>`)
}

if (numeral3 % 5 == 0) {
    document.write(`<h3>${numeral3}- делится на 5</h3>`)
} else {
    document.write(`<h3>условия не выполняются</h3>`)
}




var digit1 = prompt('Введите цифру')
var digit2 = prompt('Введите цифру')
var digit3 = prompt('Введите цифру')
var digit4 = prompt('Введите цифру')

document.write(`<h3>Cумма: ${digit1 + digit2 + digit3 + digit4}</h3>`)


if (digit % 2 == 0) {
    document.write(`<h3>Четное число: ${digit1 + digit2 + digit3 + digit4}</h3>`)
} else {
    document.write(`<h3>Нечетное число: ${digit1 + digit2 + digit3 + digit4}</h3>`)
}

//var year = 365
//var yaer2 = 366

//if (year / 4 == 0) {
//  document.write(`<h3>Год высококосный</h3>`)
//} else {
//    document.write(`<h3>Год обычный</h3>`)
//}

//if (year2 / 4 == 0) {
//  document.write(`<h3>Год высококосный</h3>`)
//} else {
//    document.write(`<h3>Год обычный</h3>`)
//}


//if (year / 100 == 0) {
//  document.write(`<h3>Год высококосный</h3>`)
//} else {
//document.write(`<h3>Год обычный</h3>`)