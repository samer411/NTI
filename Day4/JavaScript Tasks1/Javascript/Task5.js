var word = prompt("Enter Your Text, Please")

if(word.trim()!==""){
    var new_word = "";
    for(var i=0;i<word.length;i++){
        console.log(word[i].charCodeAt(0))
        if(
            (word[i].charCodeAt(0)<123 && word[i].charCodeAt(0)>96)||// Lowercase 
            (word[i].charCodeAt(0)<91 && word[i].charCodeAt(0)>64)|| // Uppercase
            (word[i].charCodeAt(0)<58 && word[i].charCodeAt(0)>47)   // Numbers
        ){
            new_word+=word[i];
        }
    }
    alert("The New Word is: "+new_word)
}
else{
    alert("Enter A Valid Text")
}
