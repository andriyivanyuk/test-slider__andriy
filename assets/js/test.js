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

let secondArr = [
    {
        product_id: "28050975",
        product_title: "Бита Toptul FSBA0802 PH 2",
        product_image_alt: "Бита Toptul FSBA0802 PH 2",
        brand_name: "Toptul",
        price: "6.00",
        available: "1",
        url_direct: "/art-bita-toptul-fsba0802-ph-2-28050975",
        rating: null,
        rating_count: null,
    },
    {
        product_id: "2059556",
        product_title: "Уплотняющее кольцо вала",
        product_image_alt: "",
        brand_name: "Topran",
        price: "26.00",
        available: "0",
        url_direct: "/art-201281-topran-2059556",
        rating: "0",
        rating_count: "0",
    },
    {
        product_id: "27779716",
        product_title: "Клещи торцевые Sigma 4354211 160 мм",
        product_image_alt: "Клещи торцевые Sigma 4354211 160 мм",
        brand_name: "Sigma",
        price: "65.00",
        available: "1",
        url_direct: "/art-kleschi-torcevye-sigma-160-mm-27779716",
        rating: null,
        rating_count: null,
    },
    {
        product_id: "153128",
        product_title: "Воздушный фильтр",
        product_image_alt: "",
        brand_name: "Wix Filters",
        price: "123.00",
        available: "1",
        url_direct: "/art-wa6214-wix-filters-153128",
        rating: "4",
        rating_count: "95",
    },
    {
        product_id: "226942",
        product_title: "Масляный фильтр",
        product_image_alt: "",
        brand_name: "Mann",
        price: "131.00",
        available: "1",
        url_direct: "/art-w81180-mann-226942",
        rating: "4",
        rating_count: "356",
    },
    {
        product_id: "27465",
        product_title: "Фильтр салона",
        product_image_alt: "",
        brand_name: "Wix Filters",
        price: "135.00",
        available: "1",
        url_direct: "/art-wp6812-wix-filters-27465",
        rating: "4",
        rating_count: "49",
    },
    {
        product_id: "471043",
        product_title: "Свеча накала",
        product_image_alt: "",
        brand_name: "Meyle",
        price: "142.00",
        available: "1",
        url_direct: "/art-0140201039-471043",
        rating: "4",
        rating_count: "14",
    },
    {
        product_id: "21995879",
        product_title: "Моторное масло Ford Formula F 5W-30 синтетическое",
        product_image_alt: "Моторное масло Ford Formula F 5W-30 синтетическое",
        brand_name: "Ford",
        price: "154.00",
        available: "1",
        url_direct:
            "/art-motornoe-maslo-ford-formula-f-5w-30-sinteticheskoe-21995879/21995879",
        rating: "4",
        rating_count: "612",
    },
    {
        product_id: "137588",
        product_title: "Ремень ГРМ",
        product_image_alt: "",
        brand_name: "Contitech",
        price: "195.00",
        available: "1",
        url_direct: "/art-ct637-contitech-137588",
        rating: "4",
        rating_count: "21",
    },
    {
        product_id: "65078",
        product_title: "Тормозной барабан",
        product_image_alt: "",
        brand_name: "Abe",
        price: "431.00",
        available: "1",
        url_direct: "/art-c6s004abe-abe-65078",
        rating: "4",
        rating_count: "11",
    },
    {
        product_id: "27454873",
        product_title: "Автохолодильник Ranger Cool RA8847 20 л.",
        product_image_alt: "Автохолодильник Ranger Cool RA8847 20 л.",
        brand_name: "Ranger",
        price: "1499.00",
        available: "1",
        url_direct: "/art-avtoholodilnik-ranger-cool-20-l-1136818180-27454873",
        rating: "0",
        rating_count: "0",
    },
];

function addImageUrl(products, images) {
    return products.map((product, index) => {
        if (images[index]) {
            product.imageUrl = images[index];
        }
        return product;
    })
}


console.log(addImageUrl(secondArr, imageUrlList));


