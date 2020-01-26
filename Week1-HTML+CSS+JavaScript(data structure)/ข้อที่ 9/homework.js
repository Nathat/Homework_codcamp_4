let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let x of array) {
    if (x % 2 !== 0) result.push(x)
}
console.log(result);