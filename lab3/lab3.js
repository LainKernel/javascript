'use strict';

// Импорт функции fib из лабы 2
import { fib } from '../lab2/lab2.js';

/**
 * Возвращает дробную часть числа.
 * Для отрицательных чисел возвращает дополнение до 1 (например, -1.23 → 0.77).
 * @param {number} num - Исходное число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    const absNum = Math.abs(num);
    const absDecimal = absNum - Math.floor(absNum);
    
    if (num < 0 && absDecimal > 0) {
        return Number((1 - absDecimal).toFixed(10));
    }
    return Number(absDecimal.toFixed(10));
}

/**
 * Нормализует URL, приводя его к виду "https://...".
 * Удаляет существующие протоколы "http://" или "https://" и добавляет "https://".
 * @param {string} url - Исходный адрес сайта.
 * @returns {string} Нормализованный URL с протоколом https.
 */
export function normalizeUrl(url) {
    const protocol = 'https://';
    if (url.startsWith('https://')) return url;
    if (url.startsWith('http://')) return protocol + url.slice(7);
    return protocol + url;
}

/**
 * Проверяет строку на наличие запрещённых слов ('viagra' или 'xxx').
 * Проверка выполняется без учёта регистра.
 * @param {string} str - Исходная строка для проверки.
 * @returns {boolean} true, если строка содержит спам; false в противном случае.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя символ многоточия в конце.
 * Если длина строки не превышает maxlength, возвращает строку без изменений.
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина результирующей строки (включая многоточие).
 * @returns {string} Усечённая строка с многоточием или исходная строка.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку вида "my-short-string" в camelCase "myShortString".
 * Дефисы удаляются, а следующие за ними символы приводятся к верхнему регистру.
 * @param {string} str - Исходная строка с дефисами.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str.replace(/-+(.)/g, (match, char) => char.toUpperCase());
}

/**
 * Возвращает массив чисел Фибоначчи от 0-го до (n-1)-го включительно.
 * Использует импортированную функцию fib() для вычисления каждого элемента.
 * @param {number} n - Количество элементов в массиве (натуральное число).
 * @returns {bigint[]} Массив, содержащий первые n чисел Фибоначчи типа BigInt.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * Исходный массив не изменяется (создаётся копия).
 * @param {number[]} arr - Исходный массив чисел.
 * @returns {number[]} Новый массив, отсортированный от большего к меньшему.
 */
export function arrReverseSorted(arr) {
    const copy = [...arr];
    return copy.sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений из исходного массива.
 * Использует объект Set для фильтрации дубликатов.
 * @param {Array} arr - Исходный массив с возможными повторениями.
 * @returns {Array} Массив, содержащий только уникальные значения.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}