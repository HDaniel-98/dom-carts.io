const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const cartButton = document.getElementById("button");
const btnStart = document.querySelector(".btn-inicio");
const itemTag = document.getElementsByTagName("h3")[0];
const itemh1 = document.getElementsByTagName("h1")[0];
const fuel = document.querySelector(".fuel");

//Mostrar el primer coche
const productDetails = document.querySelector(".product-details");
const colorsPrice = document.querySelector(".colors-price")
const lema = document.querySelector(".lema");


redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage =
    'url("https://squir.com/media/catalog/product/cache/4709fd52db70e8ed3553f7ffe9d447ff/p/o/porsche_911_gt3_rs_2019_0000.jpg")';
  itemh1.textContent = "Porsche 911 GT3 rs";
  fuel.textContent = "Combustible: 40 Mpg";
});

grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage =
    'url("https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/04/porsche-911-turbo-stinger-gtr-topcar.jpg?tf=3840x")';
  itemh1.textContent = "Porsche 911 GT4";
  fuel.textContent = "Combustible: 35 Mpg";
});

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage =
    'url("https://avatars.mds.yandex.net/get-vertis-journal/4220003/001.jpg_1627655032662/orig")';
  itemh1.textContent = "Porsche 978 Cayman";
  fuel.textContent = "Combustible: 30 Mpg";
});

const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
