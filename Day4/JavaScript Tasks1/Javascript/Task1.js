var text = prompt("Enter Your Text, Please")
var old_words = text.split(" ");
var words=[];
for(var i=0;i<old_words.length;i++){
    // console.log(old_words[i][0]);
    if(typeof(parseInt(old_words[i][0]))!=='number'){
        words.push(old_words[i])
    }
}
console.log(words)
if(isNaN(text)&& text.trim()!==""){
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

