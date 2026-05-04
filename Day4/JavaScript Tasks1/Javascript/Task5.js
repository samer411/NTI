var word = prompt("Enter Your Text, Please")

if(word.trim()!==""){
    var new_word = "";
    for(var i=0;i<word.length;i++){
        if(vowels.lastIndexOf(word[i] )=== -1){
            new_word+=word[i];
        }
    }
    if(new_word.length==word.length){
    alert("Success")
}
else{
    alert("Failure")
}
}
else{
    alert("Enter A Valid Text")
}
