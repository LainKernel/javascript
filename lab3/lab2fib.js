'use strict';

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Порядковый номер.
 * @returns {bigint} Число Фибоначчи.
 */
export function fib(n) {
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
