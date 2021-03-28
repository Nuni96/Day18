function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (var i = 1; i < 6; i++) {
        var x = i;
        yield x;
    }
}

function* insideGenerator2() {
    for (var i = 10; i < 16; i++) {
        var x = i;
        yield x;
    }
}

function* insideGenerator3() {
    for (var i = 6; i < 10; i++) {
        var x = i;
        yield x;
    }
}

const fifteenArray = [];
var iterator = myGenerator();
for (let i = 0; i < 16; i++) {
    let iter = iterator.next();
    fifteenArray[i] = iter.value + (iter.done ? "!" : "#");
}
console.log(fifteenArray.join(', '));
module.exports = { fifteenArray, myGenerator };