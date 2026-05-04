var word = prompt("Enter Your Text, Please")
if(isNaN(word) && word.trim()!==""){
    var new_word = "";
    for(var i=0;i<word.length;i++){
        if(new_word.lastIndexOf(word[i] )=== -1){
            new_word+=word[i];
        }
    }
    alert(new_word)}
else{
    alert("Enter A Valid Text")
}
