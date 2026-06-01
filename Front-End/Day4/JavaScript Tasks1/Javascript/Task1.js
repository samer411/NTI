var text = prompt("Enter Your Text, Please")
var old_words = text.split(" ");
var words=[];
for(var i=0;i<old_words.length;i++){
    console.log(old_words[i][0]);
    var new_word = "";
    for(var k=0;k<old_words[i].length;k++){
        if(isNaN(parseInt(old_words[i][k]))){
            new_word+=old_words[i][k];
        }
    }
    words.push(new_word)
}
console.log(words)
if(isNaN(text) && text.trim()!==""){
    var new_text = "";
    for(var i=0;i<words.length;i++){
        var new_capital_letter = words[i][0].toUpperCase();
        var new_word = new_capital_letter+words[i].slice(1);
        new_text+=` ${new_word}`;
    }
    alert(new_text)
}
else{
    alert("Enter A Valid Text")
}

