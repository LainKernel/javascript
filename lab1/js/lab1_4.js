const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
};

document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const n = parseInt(document.getElementById('maxNumber').value, 10);
    const resultDiv = document.getElementById('result');

    let primes = [];


    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    if (primes.length === 0) {
        resultDiv.innerText = "В этом интервале нет простых чисел.";
    } else {
        resultDiv.innerText = `Простые числа от 2 до ${n}: ${primes.join(', ')}`;
    }
});
