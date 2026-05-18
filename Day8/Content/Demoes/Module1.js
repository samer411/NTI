 export let fname="ali"
 export let lname="waleed"
 export let arr=[20,5,40,800,47,450] // shared
 export default class Person{
    constructor(_id,_name){
        this.id=_id;
        this.name=_name;

    }
    print(){
     return `${this.id} : ${this.name}`
    }
 }
 
export function sum(a,b){
    console.log(a+b)
}

 export function gettriple(num){
    return num*3
 }

 //export{Person ,gettriple,sum,arr, lname as nnmae}