let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);
const arrKey = [];
const arrValue = [];
for (let col of shoppingList.entries()) {
    arrKey.push(col[0]);
}
arrKey.forEach((key) => {
    console.log(`groceries: `, key);
});
for (let col of shoppingList.entries()) {
    arrValue.push(col[1]);
}
arrValue.forEach((value) => {
    console.log(`amount: `, value);
});
for (let col of shoppingList.entries()) {
    console.log(`[ '${col[0]}', ${col[1]} ]`);
}
module.exports = { shoppingList, arrKey, arrValue };