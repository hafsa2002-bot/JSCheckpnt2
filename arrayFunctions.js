function maxMinOfArray(Arr){
    if(Arr!= null){
        let min = Arr[0];
        let max = Arr[0];
        for(let i = 0; i < Arr.length; i++){
            if(min > Arr[i]){
                min = Arr[i];
            }
            if(max < Arr[i]){
                max = Arr[i];
            }
        }
        return [min, max];
    }
    return 0;
}


let [min, max] = maxMinOfArray([0, -5, 13, 7, 98, 8]);
console.log("min value", min);
console.log("max value", max);

/* ----------------------- */
function sumArray(Arr){
    let sum = 0;
    for(let i = 0; i < Arr.length; i++){
        sum += Arr[i];
    }
    return sum;
}
let sum = sumArray([1, 2, 3]);
console.log("sum of array elements", sum);

/* ------------------------------ */
function filterArray(arr, cond){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(cond(arr[i])){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
function pair(elmnt){
    if(elmnt % 2 == 0){
        return true;
    }
}
function impair(elmnt){
    if(elmnt % 2 != 0){
        return true;
    }
}

let res = filterArray([1, 2, 3], impair);
console.log(res);



