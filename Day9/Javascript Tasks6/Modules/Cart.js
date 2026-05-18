let selected_products = JSON.parse(localStorage.getItem("arr"))
const container = document.getElementsByTagName("main")[0]
function SetSelectedProducts(){
    
    selected_products.forEach(element => {
        console.log(element)

        let card = document.createElement("div");
        card.classList+="card";
        console.log(element.image)
        card.innerHTML=(`
            <img src="${element.image}" alt="">
            <p>${element.name}</p>
            <p class="price">Price: ${element.price} $</p>
            <p class="count">Count: ${element.count} </p>
            <p class="total">Total Cost = ${element.count*element.price}</p>
            <button class='remove'>Remove Element</button>
            <button class='purchase'>Purchase</button>
            `)
        console.log(card)
        container.appendChild(card);
    });
}
SetSelectedProducts()
const purchase_button = document.getElementsByClassName("purchase")[0];
const remove_button = document.getElementsByClassName("remove")[0];
const return_button = document.getElementsByClassName("return_home")[0];
purchase_button.addEventListener("click",()=>{
    alert("Cart Purchased")
})
remove_button.addEventListener("click",()=>{
    remove_button.parentNode.remove()
    return_button.style.display = "block";
})
return_button.addEventListener("click",()=>{
     window.location.href="http://127.0.0.1:5500/Day9/Javascript%20Tasks6/index.html"
})