const sumAll = function(first,second) {
    if (typeof first !== 'number' || typeof second !== 'number' || first < 0 || second < 0) {
        return "ERROR";
    }
    let small =0
    let large =0
    if(first < second){
        small = first
        large = second
    }
    else{
        large = first
        small = second
    }
    let result=0
    for(let i = small; i<=large; i++){
        result+=i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
