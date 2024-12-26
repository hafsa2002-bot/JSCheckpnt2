function reverseString(str){
    let new_str = " ";
    for( let i = str.length-1; i >= 0; i--){
        new_str += str[i];
    }
    return new_str;
}
let str = reverseString("Hafsa");
console.log("Reverse String : ", str);

/* -------------- */

function countCharacters(str){
    let c = 0;
    if(str != null){
        for (let i = 0; i < str.length; i++){
            if(str[i]  != " "){
                c++;
            } 
        }
        return c;
    }
    return 0;
}

let cmpt = countCharacters("hi my name is hafsa");
console.log("characters in this sentence: ", cmpt);

/* -------------- */

function capitalizeWords(str){
    let new_str = " ";

    if(str != null){
        str = str.toLowerCase();
        for(let i = 0; i < str.length; i++){
            if(i == 0 || str[i-2] == "." || str[i-2] == "!" || str[i-2] == "?"){
                new_str += str[i].toUpperCase(); 
            }else{
                new_str += str[i];
            }
        }
        return new_str;
    }
    return 0;
}

let cap = capitalizeWords("hello my NAME is haFsa. and yeeh.");
if(cap != 0){
    console.log(cap);
}else{
    console.log("empty string");
}

