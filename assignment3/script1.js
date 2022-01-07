//console the ‘this’ variable at global level

console.log(this);

//console the ‘this’ variable: create a function and inside a function again check the value of ‘this’.

function fun1() {
    console.log(this);
}

fun1();