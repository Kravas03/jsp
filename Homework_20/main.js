const number = parseInt(prompt("Введіть ціле число:"));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(`${number} - просте число`);
} else {
    alert(`${number} - не є простим числом`);
}