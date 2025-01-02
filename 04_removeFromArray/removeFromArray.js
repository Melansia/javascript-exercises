const removeFromArray = function(arr, ...arg) {
    const filterVals = arr.filter((arr) => {return !arg.includes(arr)})
    return filterVals
};

// Do not edit below this line
module.exports = removeFromArray;
