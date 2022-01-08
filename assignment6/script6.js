function getSum(x){
    let sum = x;
    function result_function(y){
        sum += y;
        return result_function;
    }
    result_function.valueOf = function(){
        return sum;
    };
    return result_function;
}

// using valueOf() to get the answer.
console.log("getSum(4)(5)(6) -> " + getSum(4)(5)(6).valueOf());
