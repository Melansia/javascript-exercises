const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = string.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("")
    const reversedString = cleanString.split("").reverse().join("")

    return cleanString == reversedString

};

// Do not edit below this line
module.exports = palindromes;
