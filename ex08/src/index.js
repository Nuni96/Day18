let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

let unionSet = new Set(union(one, two));
console.log(unionSet);
let intersectionSet = new Set([...one].filter(x => two.has(x)));
console.log(intersectionSet);
let differenceSet = new Set([...one].filter(x => !two.has(x)));
console.log(differenceSet);
module.exports = { unionSet, intersectionSet, differenceSet };