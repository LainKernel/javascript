'use strict';

/**
 * Возводит число x в целую степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения в степень.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    return x * pow(x, n - 1);
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * Создано динамически через синтаксис new Function.
 * @type {Function}
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} True, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n с помощью рекурсии.
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n типа BigInt.
 */
function factorial(n) {
    const bigN = BigInt(n);
    if (bigN === 0n || bigN === 1n) return 1n;
    return bigN * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи через быстрый цикл во избежание переполнения стека.
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи типа BigInt.
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let a = 0n;
    let b = 1n;
    
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Принимает число x и возвращает анонимную функцию для сравнения с ним числа y.
 * @param {number} x - Эталонное число для сравнения.
 * @returns {Function} Функция, принимающая y и возвращающая true, false или null.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Вычисляет сумму всех переданных аргументов.
 * @param {...number} args - Произвольное количество чисел.
 * @returns {number} Сумма чисел.
 */
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}

/**
 * Добавляет к объекту символьное свойство blackSpot=true из глобального реестра символов.
 * Поддерживает обратную совместимость со старыми версиями Chai.
 * @param {Object} obj - Исходный объект.
 * @returns {Object} Измененный объект.
 */
function addBlackSpot(obj) {
    const blackSpotSymbol = Symbol.for("blackSpot");
    obj[blackSpotSymbol] = true;
    return obj;
}
export { pow, sumTo, isLeapYear, factorial, fib, compare, sum, addBlackSpot };
