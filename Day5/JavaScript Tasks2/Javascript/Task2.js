const arr = [45, 12, 78, 12,67,45,3, 56, 89, 23, 67];

function sumAll(numbersArray) {
    let str = numbersArray.join("+");
    let sum = eval(str);
    return sum;
}
function productAll(numbersArray) {
    let str = numbersArray.join("*");
    let product = eval(str);
    return product;
}

function sumAll2(){
    let str="";
    for(let i=0;i<arguments.length;i++){
        if(i==arguments.length-1){
            str+=arguments[i];
        }
        else{
            str+=arguments[i]+"+";
        }
    }
    return eval(str);
}
function productAll2(){
    let str="";
    for(let i=0;i<arguments.length;i++){
        if(i==arguments.length-1){
            str+=arguments[i];
        }
        else{
            str+=arguments[i]+"*";
        }
    }
    return eval(str);
}
console.log(sumAll(arr));
console.log(productAll(arr));
console.log(sumAll2(1,2,3));
console.log(productAll2(1,2,3,3));

