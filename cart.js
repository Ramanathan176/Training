let label = document.getElementById("label");

let shoppingCart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartQuantity");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
};

calculation();
console.log("Hi");
let generateCartItems = () => {
    if (basket.length !== 0) {
    } else{
        shoppingCart.innerHTML= ``;
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="homebtn">Back to home</button>
        </a> `;
    }
};

generateCartItems();