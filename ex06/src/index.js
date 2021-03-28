let rockStar = new Map([
    ['artist', 'The Rolling Stones'],
    ['song', "Angie"],
    ['album', 'Goats Head Soup'],
    ['singer', 'Mick Jagger']
]);

let newRock = new Map();
for (let [key, value] of rockStar.entries()) {
    if (key.charAt(0) > 'a') {
        newRock.set(key, value);
    }
}
console.log(newRock);
module.exports = { rockStar, newRock };