// https://kea-alt-del.dk/t7/api/products

let productid;

// 1 hente data
async function getData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products/");
    const data = await response.json();
    console.log(data);
    
    // 2 loope gennem data
    data.forEach(showProduct);

}








getData();

function showProduct(product){
    console.log(product);

    const template = document.querySelector("#smallProductTemplate").content;
    
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector("span").textContent = product.price;
    copy.querySelector("div h4 span").textContent = product.discount;


    if (product.soldout) {
        copy.querySelector("article").classList.add("soldOut");
        
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale");
        productNewPrice = (product.discount/100)*product.price;
        productDiscountedPrice = product.price - productNewPrice ;
        copy.querySelector("article div p span").textContent = Math.round(productDiscountedPrice);

        
    }

   

    document.querySelector("main").appendChild(copy);
}


// 3 for hver
// 4 fange template
// 5 clone
// 7 appende