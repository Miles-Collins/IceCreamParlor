let iceCream = [
  {
    name: "Cookie Dough",
    image:
      "https://i2.wp.com/lmld.org/wp-content/uploads/2022/07/Cookie-Dough-Ice-Cream-9.jpg",
    price: 1,
    quantity: null,
  },
  {
    name: "Vanilla",
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2022/02/No-Churn-Vanilla-Ice-Cream-12-hero.jpg",
    price: 1,
    quantity: null,
  },
  {
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
    quantity: null,
  },
  {
    name: "Chocolate",
    image:
      "https://i0.wp.com/lmld.org/wp-content/uploads/2012/07/Chocolate-Ice-Cream-3.jpg",
    price: 2,
    quantity: null,
  },
];

let vessels = [
  {
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
    quantity: null,
  },
  {
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
    quantity: null,
  },
];

let toppings = [
  {
    name: "Sprinkles",
    image:
      "https://thumbs.dreamstime.com/b/sweet-sprinkles-ice-cream-topping-colorful-sugary-92688447.jpg",
    price: 1,
    quantity: null,
  },
  {
    name: "Chocolate Chips",
    image: "https://m.media-amazon.com/images/I/61gfR8JxInL.jpg",
    price: 2,
    quantity: null,
  },
  {
    name: "Whipped Cream",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2019/12/best-homemade-whipped-cream-recipe-square.jpg",
    price: 2,
    quantity: null,
  },
];

let total = 0;
let everything = [];

function drawToppings() {
  let template = "";
  toppings.forEach(
    (t) =>
      (template += `
  <div onclick="buy('${t.name}', ${t.price}, ${t.quantity})" class="card col-3 mx-2 mt-2 text-center">
  <img class="flavors card-img-top pt-3" src="${t.image}" alt="" srcset="">
  <span class="imgCard">${t.name} $${t.price}</span>
</div>
  `)
  );
  // @ts-ignore
  document.getElementById("toppings").innerHTML = template;
}

drawToppings();

function drawBases() {
  let template = "";
  vessels.forEach(
    (v) =>
      (template += `
  <div onclick="buy('${v.name}', ${v.price}, ${v.quantity})" class="card col-3 mx-2 text-center">
  <img class="flavors card-img-top pt-3" src="${v.image}" alt="" srcset="">
  <span class="imgCard">${v.name} $${v.price}</span>
</div>
  `)
  );
  // @ts-ignore
  document.getElementById("bases").innerHTML = template;
}

drawBases();

function drawFlavors() {
  let template = "";
  iceCream.forEach(
    (i) =>
      (template += `
  <div onclick="buy('${i.name}', ${i.price}, ${i.quantity})" class="card col-3 mx-2 mt-2 text-center">
  <img class="flavors card-img-top img-fluid pt-3" src="${i.image}" alt="" srcset="">
  <span class="imgCard img-fluid">${i.name} $${i.price}</span>
</div>
  `)
  );
  // @ts-ignore
  document.getElementById("flavors").innerHTML = template;
}

drawFlavors();

function buy(itemName, itemPrice, itemQuant) {
  let topping = toppings.find((t) => t.name == itemName);
  console.log("Topping:", topping);
  let flavor = iceCream.find((i) => i.name == itemName);
  console.log("Flavor", flavor);
  let base = vessels.find((v) => v.name == itemName);
  console.log("Base:", base);

  // SECTION FLAVORS \\
  if (flavor) {
    resetFlavors();
    // @ts-ignore
    flavor.quantity += 1;
    let template = "";
    // @ts-ignore
    let iceCreams = iceCream.filter((i) => i.quantity > 0);
    console.log(iceCreams);
    iceCreams.forEach(
      (i) =>
        (template += `
    <div class="col-6">
    <p>${i.name}</p>
  </div>
  <div class="col-2">${i?.quantity}</div>
  <div class="col-2">$${i?.price}</div>
  <div class="col-2 text-end">$${total}</div>
    `)
    );
    // @ts-ignore
    document.getElementById("receiptFlavors").innerHTML += template;
  }

  // SECTION TOPPINGS \\
  if (topping) {
    // @ts-ignore
    console.log(topping);
    resetToppings();
    // @ts-ignore
    topping.quantity += 1;
    let template = "";
    // @ts-ignore
    let newTopping = toppings.filter((i) => i.quantity > 0);
    console.log(topping);
    newTopping.forEach(
      (i) =>
        (template += `
    <div class="col-6">
    <p>${i.name}</p>
  </div>
  <div class="col-2">${i?.quantity}</div>
  <div class="col-2">$${i?.price}</div>
  <div class="col-2 text-end">$${total}</div>
    `)
    );
    // @ts-ignore
    document.getElementById("receiptToppings").innerHTML += template;
  }

  // SECTION BASES \\
  if (base) {
    // @ts-ignore
    console.log(base);
    resetBases();
    // @ts-ignore
    base.quantity += 1;
    let template = "";
    // @ts-ignore
    let newBase = vessels.filter((i) => i.quantity > 0);
    console.log(base);
    newBase.forEach(
      (i) =>
        (template += `
    <div class="col-6">
    <p>${i.name}</p>
  </div>
  <div class="col-2">${i?.quantity}</div>
  <div class="col-2">$${i?.price}</div>
  <div class="col-2 text-end">$${total}</div>
    `)
    );
    // @ts-ignore
    document.getElementById("receiptBases").innerHTML += template;
  }
  total = itemQuant * itemPrice;
}

function save() {
  window.localStorage.setItem("iceCream", JSON.stringify(iceCream));
  window.localStorage.setItem("vessels", JSON.stringify(vessels));
  window.localStorage.setItem("toppings", JSON.stringify(toppings));
}

function load() {
  let iceData = window.localStorage.getItem("iceCream");
  console.log(iceData);
  if (iceData) {
    iceCream = JSON.parse(iceData);
  }
  let baseData = window.localStorage.getItem("vessels");
  console.log(baseData);
  if (baseData) {
    vessels = JSON.parse(baseData);
  }
  let toppingsData = window.localStorage.getItem("toppings");
  console.log(toppingsData);
  if (toppingsData) {
    toppings = JSON.parse(toppingsData);
  }
}

function resetFlavors() {
  let template = "";
  // @ts-ignore
  document.getElementById("receiptFlavors").innerHTML = template;
}
function resetToppings() {
  let template = "";
  // @ts-ignore
  document.getElementById("receiptToppings").innerHTML = template;
}
function resetBases() {
  let template = "";
  // @ts-ignore
  document.getElementById("receiptBases").innerHTML = template;
}
