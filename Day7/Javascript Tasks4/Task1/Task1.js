const add_button = document.getElementById("add_button")
const table = document.getElementsByTagName("table")[0]
const name_input = document.getElementById("username")
const age_input = document.getElementById("age")
const city_input = document.getElementById("city")
let id_counter = 0;
add_button
add_button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(
        name_input.value===""||
        age_input.value===""||
        city_input.value===""
    ){
        alert("Please Enter Valid Values in the Form")
    }
    
    
})