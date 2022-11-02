const iceCream = [
  {
    name: "Cookie Dough",
    image:
      "https://i2.wp.com/lmld.org/wp-content/uploads/2022/07/Cookie-Dough-Ice-Cream-9.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Vanilla",
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2022/02/No-Churn-Vanilla-Ice-Cream-12-hero.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
    quantity: 0,
  },
  {
    name: "Chocolate",
    image:
      "https://i0.wp.com/lmld.org/wp-content/uploads/2012/07/Chocolate-Ice-Cream-3.jpg",
    price: 2,
    quantity: 0,
  },
];

const vessels = [
  {
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
    quantity: 0,
  },
  {
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
    quantity: 0,
  },
];

const toppings = [
  {
    name: "Sprinkles",
    image:
      "https://thumbs.dreamstime.com/b/sweet-sprinkles-ice-cream-topping-colorful-sugary-92688447.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Chocolate Chips",
    image: "https://m.media-amazon.com/images/I/61gfR8JxInL.jpg",
    price: 2,
    quantity: 0,
  },
  {
    name: "Whipped Cream",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2019/12/best-homemade-whipped-cream-recipe-square.jpg",
    price: 2,
    quantity: 0,
  },
];

let total = 0;

function drawToppings() {
  let template = "";
  toppings.forEach(
    (t) =>
      (template += `
  <div onclick="buy('${t.name}', ${t.price}, ${t.quantity})" class="col-3 text-center">
  <img class="img-fluid" src="${t.image}" alt="" srcset="">
  <h6>${t.name} $${t.price}</h6>
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
  <div onclick="buy('${v.name}', ${v.price}, ${v.quantity})" class="col-3 text-center">
  <img class="img-fluid" src="${v.image}" alt="" srcset="">
  <h6>${v.name} $${v.price}</h6>
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
  <div onclick="buy('${i.name}', ${i.price}, ${i.quantity})" class="col-3 text-center">
  <img class="img-fluid" src="${i.image}" alt="" srcset="">
  <h6>${i.name} $${i.price}</h6>
</div>
  `)
  );
  // @ts-ignore
  document.getElementById("flavors").innerHTML = template;
}

drawFlavors();

function buy(itemName, itemPrice, itemQuant) {
  let flavor = iceCream.find((i) => i.name == itemName);
  let topping = toppings.find((t) => t.name == itemName);
  let base = vessels.find((v) => v.name == itemName);
  if (flavor) {
    flavor.quantity++;
    itemQuant += flavor.quantity;
  }
  if (topping) {
    topping.quantity++;
    itemQuant += topping.quantity;
  }
  if (base) {
    base.quantity++;
    itemQuant += base.quantity;
  }
  total = itemQuant * itemPrice;
  let template = "";
  template += `
  <div class="col-6">
              <p>${itemName}</p>
            </div>
            <div class="col-2">${itemQuant}</div>
            <div class="col-2">$${itemPrice}</div>
            <div class="col-2">$${total}</div>
  `;
  // @ts-ignore
  document.getElementById("receipt").innerHTML += template;
}
