const numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
const mySet = new Set(numberArray);
let uniqueArray = [];
for (let val of mySet) {
    uniqueArray.push(val);
}
uniqueArray.sort((a, b) => a - b);
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };