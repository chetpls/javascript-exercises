const reverseString = function(string) {
    let result="";
    let stringlength =string.length
    for(let i= stringlength -1; i>=0;i--){
        result+=string.charAt(i);
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
