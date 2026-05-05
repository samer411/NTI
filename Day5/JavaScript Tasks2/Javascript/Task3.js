const arr = [45, 12, 78, 12,67,45,3, 56, 89, 23, 67];

let array_of_arrays=[];
function My_Chunk(my_arr,num_of_arrays){
    let small_array = [];
    let num_of_elements = Math.ceil(my_arr.length/num_of_arrays);
    for(let i=0;i<my_arr.length; i+=num_of_elements){
        console.log(i)
        if(i+num_of_elements>arr.length){
            array_of_arrays.push(my_arr.slice(i,arr.length))   
        }
        else{
            array_of_arrays.push(my_arr.slice(i,i+num_of_elements))
        }
       
    }
    return array_of_arrays;

}

console.log(My_Chunk(arr,3))
// for(let i=0;i<arr.length;i+num_of_elements){
//     // console.log(i)
//     for(let j=i;j<i+num_of_elements;j++){
//         // console.log(j)
//         small_array.push(arr[j])
//     }
//     // console.log(small_array)
//     array_of_arrays.push(small_array)
//     small_array=[]
// }
// return array_of_arrays;