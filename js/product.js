// https://kea-alt-del.dk/t7/api/products/1529

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

async function getProduct() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

getProduct();

function showProduct(product) {
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .type").textContent = product.variantname;
  // `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

  document.querySelector(".modelName").textContent = product.brandname;
  document.querySelector(".modelDeskripton").textContent = product.brandbio;
  document.querySelector(".color").textContent = product.basecolour;
  document.querySelector(".ivID").textContent = product.id;
  document.querySelector(".categoryType").textContent = product.articletype;
  
}
