let selected_products = []
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
            <input class="product_counter" type="number" placeholder="Count">
            <button class="cart_button">Add To Cart</button>
            `)
        container.appendChild(card);
    });
    const cart_buttons = document.getElementsByClassName("cart_button");
    for(let btn of cart_buttons)
        btn.addEventListener("click",(e)=>{
            let product_name = e.target.parentNode.children[1].innerText;
            let product_count = e.target.parentNode.children[2].value;
            for(let prod of json_response){
                if(prod.title === product_name.trim()){
                    let new_element = {...prod,"product_count":parseInt(product_count)};
                    console.log(new_element)
                    selected_products.push(new_element)
                    console.log(selected_products);
                    console.log(localStorage)
                }
            }
            console.log(selected_products)
            // window.location.href= "http://127.0.0.1:5500/Day9/Javascript%20Tasks6/Pages/Cart.html"
        })
    
    
    }
    
    getProducts();
    console.log(selected_products)
localStorage.setItem('selected_products',JSON.stringify(selected_products))
