const bestProductsWrapper = document.querySelector(".best-prod-wrapper");
const newProductsWrapper = document.querySelector(".new-prod-wrapper");

//Api
const APIURL = "products.json";
let imageUrlList = [
  "https://img.dok.ua/images/org/product/0520/26/28050975_1.jpg",
  "https://yii.dbroker.com.ua/img/zap_orig_01/301/03010388603255.jpg",
  "https://img.dok.ua/images/card/product/0520/05/27779716_1.jpeg",
  "https://img.dok.ua/images/card/product/0320/30/153128_1.jpg",
  "https://img.dok.ua/images/resource/mann/10/7/226942_1_532x532.jpg",
  "https://img.dok.ua/images/card/product/0820/12/27465_01.jpg",
  "https://img.dok.ua/images/card/product/1120/04/471043_01.jpg",
  "https://img.dok.ua/images/card/product/0220/07/21995879_1.jpg",
  "https://img.dok.ua/images/card/product/0320/30/137588_1.jpg",
  "https://img.dok.ua/images/card/product/0320/19/65078_1.jpg",
  "https://img.dok.ua/images/card/product/0720/03/27454873_1.jpg",
];

//Products
let productList = [];


async function getProducts() {
  try {
    let result = await fetch(APIURL);
    let data = await result.json();
    let products = data;
    productList = products;
    return products;
  } catch (error) {
    console.log(error);
  }
}

function getUpdatedProducts(products, images) {
  return products.map((product, index) => {
    if (images[index]) {
      product.imageUrl = images[index];
    }
    return product;
  });
}

function displayProducts(products, wrapperName) {
  let result = "";
  products.forEach((product) => {
    result += `<div class="product">
                    <div class="image-wrapper"> <img class="product__main-img" src="${product.imageUrl}" alt="${product.alt}"></div>
                    <p class="product__title">${product.brand_name}</p>
                    <p class="product__description">${product.product_title}</p>
                    <div class="price-container">
                        <div class="price__details">
                             <div class="price__values">
                                 <span class="price__amount">${product.price}</span>
                                 <span class="price__sign">грн</span>
                             </div>
                             <span class="price__availability">
                             Есть в наличии ${product.available}
                             </span>
                        </div>
                        <a class="buy-btn">Купить</a>
                    </div>
                    <img class="product__like" src="assets/img/like-btn.png" alt="">
                    </div>
          `;
    wrapperName.innerHTML = result;
  });
}

function initiateSlider() {
  $(document).ready(function () {
    $(bestProductsWrapper).slick({
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      focusOnSelect: false,
      swipe: false,
      responsive: [{
        breakpoint: 855,
        settings: {
          slidesToShow: 3,
        }
      }]
    });

    $(newProductsWrapper).slick({
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      focusOnSelect: false,
      swipe: false,
      responsive: [{
        breakpoint: 855,
        settings: {
          slidesToShow: 3,
        }
      }]

    });
  });
}

function shuffleNewProducts() {
  for (var i = newProductsWrapper.children.length; i >= 0; i--) {
    newProductsWrapper.appendChild(
      newProductsWrapper.children[(Math.random() * i) | 0]
    );
  }
}

window.onload = function () {
  getProducts().then((products) => {
    getUpdatedProducts(products, imageUrlList);
    displayProducts(products, bestProductsWrapper);
    displayProducts(products, newProductsWrapper);
    shuffleNewProducts();
    initiateSlider();

    console.log(productList);
  });
};


