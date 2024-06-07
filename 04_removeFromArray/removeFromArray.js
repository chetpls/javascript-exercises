const removeFromArray = function(array, ...nums) {
    const result = array.filter(element => !nums.includes(element));
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
