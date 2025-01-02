const reverseString = function(str) {
    let reversed = ""
    console.log(str.length)
    for (i = str.length; i > 0 ; i--){
        reversed += str[i - 1]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
