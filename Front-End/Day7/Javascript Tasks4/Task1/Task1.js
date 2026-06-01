const add_button = document.getElementsByClassName("add_button")[0]
const update_button = document.getElementsByClassName("update_button")[0]
const table = document.getElementsByTagName("table")[0]
const name_input = document.getElementById("username")
const age_input = document.getElementById("age")
const city_input = document.getElementById("city")
let id_counter = 0;


// ****************ADD Function****************
add_button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(
        name_input.value===""||
        age_input.value===""||
        city_input.value===""
    ){
        alert("Please Enter Valid Values in the Form")
    }
    else{
        let row = document.createElement("tr");
        table.appendChild(row);
        row.innerHTML=(`
            <td>${++id_counter}</td>
            <td>${name_input.value}</td>
            <td>${age_input.value}</td>
            <td>${city_input.value}</td>
            <td><button class="edit_button">Edit</button></td>
            <td><button class="delete_button">Delete</button></td>
        `) 
    }
    
    
})
//****************Delete Function****************
document.addEventListener("click",(e)=>{
    if(e.target.matches(".delete_button")){
        e.target.parentElement.parentElement.remove();
    }
})
//****************Edit Function****************
document.addEventListener("click",(e)=>{
    if(e.target.matches(".edit_button")){
        let exact_row = e.target.parentNode.parentNode;
        name_input.value = e.target.parentNode.parentNode.children[1].innerText;
        age_input.value = e.target.parentNode.parentNode.children[2].innerText;
        city_input.value = e.target.parentNode.parentNode.children[3].innerText;
        add_button.style.display = "none";
        update_button.style.display = "block";
        update_button.addEventListener("click",(e)=>{
            e.preventDefault();
            exact_row.children[1].innerText=name_input.value;
            exact_row.children[2].innerText=age_input.value;
            exact_row.children[3].innerText=city_input.value;
            update_button.style.display = "none";
            add_button.style.display = "block";
        })
    }
})
