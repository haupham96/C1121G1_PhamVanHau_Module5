var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrinme = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j < Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrinme = false;
            break;
        }
    }
    if (!isPrinme) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
