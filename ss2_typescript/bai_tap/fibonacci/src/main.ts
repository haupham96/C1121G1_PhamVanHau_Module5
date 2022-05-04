function sumFibonacci(n1: number, n2: number, count: number): number {
    let total: number = 0;
    let sum: number = 0;
    for (let i = 0; i < count; i++) {

        total = n1 + n2;
        n1 = n2;
        n2 = sum;
        sum += n1;

    }
    return sum;
}

console.log("total : " + sumFibonacci(0, 1, 10));

function fibonacci(num: number): number {

    if (num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(10));
