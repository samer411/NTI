const alert = document.getElementsByClassName("alert")[0];
const login_button = document.getElementsByClassName("login_button")[0]
login_button.addEventListener("click",(e)=>{
    login_button.innerText = "Logged In"
    login_button.classList.remove("btn-primary")
    login_button.classList.add("btn-success")
    alert.style.display="block"
})
console.log(alert,login_button)