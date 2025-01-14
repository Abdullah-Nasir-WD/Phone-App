const phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
    image: "Assets/S21 ultra.jpg"
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
    image: "Assets/Iphone 13.jpg"
  },
  {
    brand: "OnePlus",
    model: "9",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
    image: "Assets/One Plus.jpg"
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
    image: "Assets/Google.jpg"
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
    image: "Assets/Xiaomi.jpg"
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
    image: "Assets/Sony.jpg"
  },
  {
    brand: "Oppo",
    model: "Find X3 Pro",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
    image: "Assets/Oppo.jpg"
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
    image: "Assets/Vivo.jpg"
  },
  {
    brand: "Nokia",
    model: "G50",
    ram: 4,
    rom: 128,
    camera: "48 megapixel",
    price: 299,
    image: "Assets/Nokia copy.jpg"
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
    image: "Assets/Motrola.jpg"
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
    image: "Assets/Realme.jpg"
  },
  {
    brand: "Asus",
    model: "ROG Phone 5",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image: "Assets/Asus.jpg"
  },
  {
    brand: "HTC",
    model: "Desire 21 Pro",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
    image: "Assets/HTC.jpg"
  },
  {
    brand: "Huawei",
    model: "P40 Pro",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
    image: "Assets/Huawei.jpg"
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
    image: "Assets/LG.jpg"
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
    image: "Assets/ZTE.jpg"
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
    image: "Assets/Black Berry.jpg"
  },
  {
    brand: "Lenovo",
    model: "Legion Phone Duel",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image: "Assets/Lenovo.jpg"
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
    image: "Assets/Alcatel.jpg"
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
    image: "Assets/TCL.jpg"
  },
];


// console.log(phones);






let cardsItems;


const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cards"));

if (checkDataFromLocalStorage === null) {

cardsItems = [];

} else {

cardsItems = [...checkDataFromLocalStorage];

}

console.log("cartitems===>", cardsItems);






const div = document.querySelector ("#container")


const cardItems = [];


phones.map((items, index) => {


  div.innerHTML += `
  <div class="cards border border-white p-5 rounded bg-dark-subtle text- card-width">

        <div class="d-flex p-1">
        <img src="${items.image}" alt="${items.model}" class="phone-image" />
        </div>
        
        <h1 class="border-bottom border-info">Brand : ${items.brand}</h1>
        <h1 class="border-bottom border-info">Model : ${items.model}</h1>
        <h1 class="border-bottom border-info">Ram : ${items.ram} </h1>
        <h1 class="border-bottom border-info">Rom : ${items.rom} </h1>
        <h1 class="border-bottom border-info">Camra : ${items.camera} </h1>
        <h1 class="border-bottom border-info">Price : $ ${items.price} </h1>
  
        <button class="btn btn-primary mt-3" onclick="addToCard(${index})">Add To Card</button>

  </div>
  ` 
})


function addToCard(index) {

const checkIndex = cardItems.indexOf(phones[index]);

if (checkIndex === -1) {
 
  phones[index].quantity = 1;
  cardItems.push(phones[index]);

} else {
  
  cardItems[checkIndex].quantity += 1;
}

console.log(cardItems);

Swal.fire({
  title: "Good job!",
  text: "Item added to cards successfully!",
  icon: "success",
});

}


function checkout() {

console.log("checkout");

const convertArrIntoStr = JSON.stringify(cardItems);
localStorage.setItem("cards", convertArrIntoStr);

window.location = "cart.html";

}

