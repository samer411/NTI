var word = prompt("Enter Your Text, Please")
var vowels ="aeiou";
if(isNaN(word) && word.trim()!==""){
    var new_word = "";
    var counter = 0;
    for(var i=0;i<word.length;i++){
        if(vowels.lastIndexOf(word[i] )!== -1){
            counter++;

        }
    }
    alert("Number of vowels is: "+counter)
}
else{
    alert("Enter A Valid Text")
}
