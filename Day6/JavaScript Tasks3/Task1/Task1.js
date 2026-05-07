
let w = window.open("popup.html","popup","width=400,height=400");

let text = "Welcome To JS"
for(let i=0;i<text.length;i++){
    
}
let counter = 0;
let my_interval = setInterval( ()=>{
    w.document.write(`${text[counter]}`)
    counter++;
    if(counter===text.length+1){
        clearInterval(my_interval)
        w.close()
    }
},1000);      
     


