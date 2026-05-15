let selected_products = []

let total_number_of_selected_items = 0;
async function getProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    let json_response = await response.json()
    const container = document.getElementsByTagName("main")[0]
    json_response.forEach(element => {
        let card = document.createElement("div");
        card.classList+="card";
        card.innerHTML=(`
            <img src="${element.image}" alt="">
            <p>${element.title}</p>
            <p class="price">${element.price} $</p>
            <input class="product_counter" type="number" min="1" value="1" placeholder="Count">
            <button class="cart_button">Add To Cart</button>
            `)
        container.appendChild(card);
    });
}
getProducts();
const body= document.getElementsByTagName("body")[0];
body.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cart_button")){
        console.log(e.target.parentNode)
        AddToCart(e.target)
    }
})

function AddToCart(elm) {
            let product_name  = elm.parentNode.children[1].innerText;
            let product_price = parseInt(elm.parentNode.children[2].innerText.slice(0,-2));
            let product_count = parseInt(elm.parentNode.children[3].value);
            let product_image =  elm.parentNode.children[0].getAttribute('src');
            console.log(product_image)
            if(selected_products.every((p)=>{
                return p.name!==product_name
            }))
                {
                    let new_obj = {
                        "name":product_name,
                        "count":product_count,
                        "price":product_price,
                        "image":product_image,
                        }
                    console.log(new_obj)
                    selected_products.push(new_obj)
            }
            else{
                console.log("yes")
                    for(let selected_product of selected_products){
                        if(selected_product.name === product_name){
                            selected_product.count = product_count;
                        }
                    }
                }
                console.log(selected_products)
                localStorage.setItem('arr',JSON.stringify(selected_products))
                window.location.href="http://127.0.0.1:5500/Day9/Javascript%20Tasks6/Pages/Cart.html"
}


