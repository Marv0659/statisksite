// https://kea-alt-del.dk/t7/api/products

// 1 hente data
async function getData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products");
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

    copy.querySelector("h3").textContent = product.productdisplayname;

    if (product.soldout) {
        copy.querySelector("article").classList.add("soldOut");
        
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale");
        
    }

    document.querySelector("main").appendChild(copy);
}


// 3 for hver
// 4 fange template
// 5 clone
// 7 appende