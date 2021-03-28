let myArr = [];

function* multiplication(x) {
    for (var i = 0; i < x; i++) {
        yield x *= 2;
        myArr.push(x);
    }
}
var num = multiplication(3);
for (var i = 0; i < 3; i++) {
    console.log(num.next().value);
}
module.exports = multiplication