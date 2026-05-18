var text = prompt("Enter Your Text, Please")
if(isNaN(text) && text.trim()!==""){
    var words = text.split(" ");
    var new_word = "";
    for(var i=0;i<words.length;i++){
        if(words[i].length>new_word.length){
            new_word=words[i];
        }
    }
    alert(new_word)}
else{
    alert("Enter A Valid Text")
}
