
const reverseString = function(string) {
    let wordSplit = string.split("");
    let wordReverse = wordSplit.reverse("");
    let wordJoin = wordReverse.join("");
    return wordJoin;
};
reverseString('');

// Do not edit below this line
module.exports = reverseString;
