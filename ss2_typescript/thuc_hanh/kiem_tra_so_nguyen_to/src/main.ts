function isPrime(num: number): boolean {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else if (num > 2) {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let arr: Array<number> = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum: number = 0;

for (let ele of arr) {
    if (isPrime(ele)) {
        sum += ele;
    }
}
console.log(`Total of prime numbers of arr : ${sum}`);
