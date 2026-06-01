const items = document.getElementsByTagName("li");
for(item of items){
    item.addEventListener("click",(e)=>{
        e.target.classList.add("selected_item")
    })
}

const move_button = document.getElementsByClassName("move_button")[0]
const back_button = document.getElementsByClassName("back_button")[0]
const right_ul = document.getElementsByClassName("right_ul")[0]
const left_ul = document.getElementsByClassName("left_ul")[0]
move_button.addEventListener("click",()=>{
    const left_items = document.querySelectorAll(".left_ul li")
    for(item of left_items){
        let elm;
        if(item.classList.contains("selected_item")){
            item.classList.remove("selected_item")
            elm = item.cloneNode(true)
            elm.addEventListener("click",(e)=>{
        e.target.classList.add("selected_item")
    })
            right_ul.appendChild(elm)
            item.remove()
        }
    }
})
back_button.addEventListener("click",()=>{
    const right_items = document.querySelectorAll(".right_ul li")
    for(item of right_items){
        let elm;
        if(item.classList.contains("selected_item")){
            item.classList.remove("selected_item")
            elm = item.cloneNode(true)
            elm.addEventListener("click",(e)=>{
        e.target.classList.add("selected_item")
    })
            left_ul.appendChild(elm)
            item.remove()
        }
    }
})