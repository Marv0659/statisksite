// https://kea-alt-del.dk/t7/api/products
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

document.querySelector("h2").textContent = cat;
// 1 hente data
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  // 2 loope gennem data
  data.forEach(showProduct);
}

getData();

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#smallProductTemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("span").textContent = product.price;
  copy.querySelector("div h4 span").textContent = product.discount;
  copy.querySelector("a").href = "product.html?id=" + product.id;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    productNewPrice = (product.discount / 100) * product.price;
    productDiscountedPrice = product.price - productNewPrice;
    copy.querySelector("article div p span").textContent = Math.round(productDiscountedPrice);
  }

  document.querySelector("main").appendChild(copy);
}

// 3 for hver
// 4 fange template
// 5 clone
// 7 appende
