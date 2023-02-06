// https://kea-alt-del.dk/t7/api/products/1529

async function getProduct (){
    
    const response = await fetch("https://kea-alt-del.dk/t7/api/products/1529");
    const data = await response.json();
    console.log(data);
    showProduct(data);
}

getProduct();

function showProduct(product){
    document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
    document.querySelector(".purchaseBox .brand").textContent = product.brandname;
    // `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`
    document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
}

