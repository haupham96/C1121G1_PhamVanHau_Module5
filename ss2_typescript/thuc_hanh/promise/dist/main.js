let money = 10000;
let buyACar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy" + car);
            }
            else {
                reject("not have enough money");
            }
        }, 100);
    });
};
money = 1000001;
const promise = buyACar("vinFast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map