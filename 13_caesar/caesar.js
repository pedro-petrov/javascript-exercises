const caesar = function(str, num) {
    strArray = [...str];
    finalResult = "";
    letterCode = "";
    
    // Check if the str is only alfanumeric
    for (letter of str) {
        if (letter.match(/[A-Z]/i)) {
            letterCode = letter.charCodeAt(0);
            if (letterCode > 64 && letterCode < 91) {
                letterCode = (((letterCode - 65 + num) % 26) + 26) % 26 + 65;
                finalResult += String.fromCharCode(letterCode);
            }
            if (letterCode > 96 && letterCode < 123) {
                letterCode = (((letterCode - 97 + num) % 26) + 26) % 26 + 97;
                finalResult += String.fromCharCode(letterCode);
            }  
        } else finalResult += letter;
    }
return finalResult;
};

/* test = caesar("abc!", 5);
console.log(test); */

/* 97...122 - abc
65...90 - ABC */

// Do not edit below this line
module.exports = caesar;
