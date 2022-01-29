const palindromes = function (myString) {
    
    // Change the initial string to array
    var arrayOriginal = myString.toLowerCase();
    arrayOriginal = arrayOriginal.replace(/\W|_/g, "");
    console.log(arrayOriginal);
    arrayOriginal = arrayOriginal.split("");
    
    // Change the initial string to array and reverse it
    var myStringRev = myString.toLowerCase();
    myStringRev = myStringRev.replace(/\W|_/g, "");
    myStringRev = myStringRev.split("");
    myStringRev = myStringRev.reverse();
    myStringRev = myStringRev.join("");
    var arrayReversed = myStringRev.split("");
    
    //console.log("Original array: " + arrayOriginal);
    //console.log("Reversed array: " + arrayReversed);

    for (var i = 0; i < arrayOriginal.length; i++) {
        indexRev = arrayReversed.length;
        var isPali = true;
        //console.log("original: " + arrayOriginal[i]);
        //console.log("reversed: " + arrayReversed[i]);
        if (arrayOriginal[i] === arrayReversed[i]){
            isPali = true;
            indexRev--;
            
        } else {isPali = false; break;}
    }
    
    return isPali;
};

test1 = palindromes("Racecar!");
console.log(test1);
// Do not edit below this line
module.exports = palindromes;
