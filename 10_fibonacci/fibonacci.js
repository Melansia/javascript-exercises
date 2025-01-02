const fibonacci = function(f) {
    let numb
    if (typeof f === "number" ) {
        numb = f
    } else {
        numb = Number.parseInt(f)
    }
    if (numb < 0 ) return "OOPS"
    if (f === 0 ) return 0
    if (f === 1 ) return 1
    
    let numbers = [0, 1]
    for (let i = 1; i <= numb; i++){
        numbers.push(numbers[i-1] + numbers[i])
        console.log(numbers[i])
    }
    return numbers[numb]
};

// Do not edit below this line
module.exports = fibonacci;
