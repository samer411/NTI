async function getProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    console.log(response)

    let json_response = await response.json()

    const container = document.getElementsByTagName("main")[0]
    json_response.forEach(element => {
        console.log(element)
        let card = document.createElement("div");
        card.classList+="card";
        card.innerHTML=(`
            <img src="${element.image}" alt="">
            <p>${element.title}</p>
            <button class="cart_button">Add To Cart</button>`)
        container.appendChild(card);
    });
    cart_buttons = document.getElementsByClassName("cart_button");
    for(btn of cart_buttons)
        btn.addEventListener("click",(e)=>{
            // window.location.href= "http://127.0.0.1:5500/Day9/Javascript%20Tasks6/Pages/Cart.html"
            console.log(e.target.parentNode())
        })
    
    
}
function Redirect_to_cart_page(e){

}
getProducts();
