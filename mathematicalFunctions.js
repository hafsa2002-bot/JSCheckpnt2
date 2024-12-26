function factorial(num){
    if(num < 0){
        return "it's a negative number";
    }else if (num  == 0){
        return 1;
    }
    else{
        let result = 1;
        for(let i = num; i >= 2; i--){
            console.log("i = ", i);
            console.log("result : ", result);
            result *= i;
        }
        return result;
    }
}
let result  = factorial(-7);
console.log(result);

/* --------------------------- */
function primeNumber(num){
    for(let i = 2; i < num; i++){
        if( num % i == 0) return false;
    }
    return true;
}
let res = primeNumber(6);
if(res){
    console.log("it's a prime number");
}
else{
    console.log("it's not a prime number");
}

/* ---------- */
function Fibonacci(num){
    let res;
    if(num == 0){
        return 0;
    }else if(num == 1){
        return 1;
    }else if(num > 1){
        res = Fibonacci(num-1) + Fibonacci(num-2);
        return res;
    }
}
let f = Fibonacci(10);
console.log(f);