// function sumFibonacci(n1: number, n2: number): number {
//     let total: number = 0;
//     let sum: number = 0;
//     for (let i = 0; i < 10; i++) {
//
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//         total += n1;
//
//     }
//     return total;
// }
//
// console.log("total : " + sumFibonacci(0, 1));

function fibonacci(num: number): number {

    if (num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));
