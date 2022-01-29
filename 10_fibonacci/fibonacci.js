const fibonacci = function(num) {
    fibo = [1, 1];
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            fibo.push(fibo[i] + fibo[i - 1]);
            //console.log("i = " + i);
            //console.log("fibo = " + fibo[i]);
        }
    return fibo[num-1];
    } else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
