function Return_If_The_First_Character_Vowel(text:string){
    let arr:string[] = text.split(" ");
    let vowels:string = "aeiou"
    for( let word of arr){

        // if(!vowels.includes(word.charAt(0).toLowerCase())){
        if(!vowels.includes(word[0]!.toLowerCase())){
            console.log(word)
        }
    }
    
}
let str:string = "Apple Banana Cat"
Return_If_The_First_Character_Vowel(str)