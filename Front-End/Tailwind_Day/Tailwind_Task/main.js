const barIcon = document.querySelector(".bar");
const ul = document.querySelector("ul");
const closeIcon = document.querySelector(".close")
const darkModeToggle = document.querySelector(".dark_mode")
const icons = document.querySelector(".dark_mode i")


if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark")
    icons.classList.toggle("fa-moon")
    icons.classList.toggle("fa-sun")
}
barIcon.addEventListener("click",()=>{
    ul.classList.remove("hidden")
    ul.classList.add("flex")
})
closeIcon.addEventListener("click",()=>{
    ul.classList.add("hidden")
    ul.classList.remove("flex")
})
darkModeToggle.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")
    }
    icons.classList.toggle("fa-moon")
    icons.classList.toggle("fa-sun")
})