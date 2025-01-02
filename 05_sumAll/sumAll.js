const sumAll = function(from, to) {
    if(!Number.isInteger(from) || !Number.isInteger(to)) { return "ERROR"}
    if(from < 0 || to < 0) { return "ERROR"}
    let min = from
    let max = to
    if(from > to) {
        min = to
        max = from
    }

    let sum = 0
    for (let step = min; step <= max; step++) {
        sum += step
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
