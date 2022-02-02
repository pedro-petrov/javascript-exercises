const caesar = function(str, num) {
    strArray = [...str];
    strArrayUcode = [];
    for (letter of strArray) {
        // This will be the unicode value with the shift factor added
        shiftCode = (letter.charCodeAt(0) + num);
        // Check if it's UPPER
        if (shiftCode > 65 && shiftCode <= 90) {
            strArrayUcode.push(shiftCode);
        }
        // Check if it's LOWER
        if (shiftCode > 97 && shiftCode <= 122) {
            strArrayUcode.push(shiftCode);
        }
    }

    console.log(strArray);
    console.log(strArrayUcode);
}
test = caesar('Hey', 1);
console.log(test);

/* NOTES
a...z >>> 97...122
A...Z >>> 65...90
*/

// Do not edit below this line
module.exports = caesar;
