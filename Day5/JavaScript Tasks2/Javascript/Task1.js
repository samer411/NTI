const arr = [45, 12, 78, 12,67,45,3, 56, 89, 23, 67];

// User Defined Function (#Insertion Sort#)
function My_Asc(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        // console.log(key)
        let j=i-1;
        // console.log(j)
        while(j>=0&&arr[j]>key){
            // console.log(arr[j+1])
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=key;
        // console.log(arr[j+1])
    }
    return arr;
}
console.log(My_Asc(arr))
// User Defined Function (#Insertion Sort#)
function My_Desc(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        // console.log(key)
        let j=i-1;
        // console.log(j)
        while(j>=0&&arr[j]<key){
            // console.log(arr[j+1])
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=key;
        // console.log(arr[j+1])
    }
    return arr;
}
console.log(My_Desc(arr))
// Sorting using sort callback function (Ascending)
console.log(arr.sort((a,b)=>a-b))
// Sorting using sort callback function (Ascending)
console.log(arr.sort((a,b)=>b-a))
// ******************************************************************************************
// ******************************************************************************************
// User Defined Function (#Filterring Values More than 50)
function My_Filter(arr){
    let new_arr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>50) new_arr.push(arr[i])
    }
    return new_arr;
}
console.log(My_Filter(arr))
// Filtering using filter callback function
console.log(arr.filter((a)=>a>50))
// ******************************************************************************************
// ******************************************************************************************

// First Way of Getting Min and Max 
console.log(arr.sort((a,b)=>a-b)[0])
console.log(arr.sort((a,b)=>a-b)[arr.length-1])

// Second Way of Getting Min and Max 
let Min=arr[0];
let Max =arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>Max) Max=arr[i];
    else if(arr[i]<Max) Min=arr[i];
}
console.log("Max is "+Max+"  "+"Min is "+Min)

// Third Way of Getting Min and Max
console.log(Math.min(...arr))
console.log(Math.max(...arr))

// Fourth Way of Getting Min and Max
console.log(arr.reduce((a,b)=>{return a>b?a:b}))
console.log(arr.reduce((a,b)=>{return a<b?a:b}))

// Fifth Way of Getting Min and Max
let min =Infinity;
let max = -Infinity;
arr.forEach(num=>{
    if(num<min) min=num;
    else if (num>max) max =num
})
console.log(`Min is ${min} and Max is ${max}`)

// ******************************************************************************************
// ******************************************************************************************

function Remove_Duplicates(arr){
    let new_arr=[]; 
    for(let i=0;i<arr.length;i++){
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i])
        }
    }
    return new_arr;
}
console.log(Remove_Duplicates(arr))

