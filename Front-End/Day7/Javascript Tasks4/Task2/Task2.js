const copy_buttons = document.getElementsByClassName("copy_button");
for(btn of copy_buttons){
    btn.addEventListener("click",(e)=>{
        navigator.clipboard.writeText(e.target.parentNode.parentNode.children[1].innerText); 
        e.target.innerText="Copied ✔"       
    })    
}



const textarea = document.getElementsByTagName("textarea")[0];
const preview_box = document.getElementsByClassName("preview-box")[0];
textarea.addEventListener("input",()=>{
    const style = document.createElement('style')
    style.textContent=`${textarea.value}`
    document.head.appendChild(style)
})