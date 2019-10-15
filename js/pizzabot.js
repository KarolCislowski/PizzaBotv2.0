"use strict"

/***** Old code from Technigo *****/
// const vegetarian = "Vegetarian Pizza"
// const hawaiian = "Hawaiian Pizza"
// const pepperoni = "Pepperoni Pizza"

// const pizzaPrice = 80

//Put your Javscript code here

/* Menu as Array of object */
const menu = [
  {
    name: "Vegetarian",
    toppings: ["Spinach", "Broccoli", "Jalapeno"],
    price: 75,
    quantity: 0,
  },
  {
    name: "Hawaiian",
    toppings: ["Pinapple", "Ham"],
    price: 90,
    quantity: 0,
  },
  {
    name: "Pepperoni",
    toppings: ["Pepperoni"],
    price: 90,
    quantity: 0,
  },
  {
    name: "Capricciosa",
    toppings: ["Ham", "Mushroom", "Artichoke"],
    price: 80,
    quantity: 0,
  }
]

/* Public Variables */

let totalCost = 0
let totalQuantity = 0
let prepTime = 0
let timeLeft = 0
let minutes = 0
let seconds = 0

/* Functions */

// Adding quantity of chosen pizza and changing total quantity and cost 
function addQuantity(index) {
  let pizza = menu[index]
  pizza.quantity++
  totalQuantity ++
  totalCost += pizza.price
  startAndRefresh()
}

// Subtracting quantity of chosen pizza and changing total quantity and cost 
function subQuantity(index) {
  let pizza = menu[index]
  pizza.quantity--
  totalQuantity --
  totalCost -= pizza.price
  startAndRefresh()
}

// Calculating prep time 
function prepTimeCalculation( amountOfPizzas ) {
  if (amountOfPizzas>=6) {
    return prepTime = 20
  } else if (amountOfPizzas>=3) {
    return prepTime = 15
  } else if (amountOfPizzas>=1) {
    return prepTime = 10
  }
}

// Converting prep time from minutes to seconds  
function order() {
  timeLeft = prepTime * 60 // minutes to seconds   
  timer
}

// Seting timer 
let timer = setInterval( countDown , 1000)

// Extracting 1second from prep time and display the timer
function countDown() { 
  if(timeLeft >= 1) {  
    timeLeft --
    minutes = Math.floor(timeLeft / 60)
    seconds = timeLeft % 60 
    document.getElementById("order").innerHTML = `Time left to epic feast: ${minutes > 0 ? `${minutes} minutes` : ""}  ${seconds} seconds`
  } 
}

// Template for every menu item
function printMenu(pizza, index) {
  return `
    <div class="menu-item">
      <span class="pizza-name">
        <h4>${pizza.name}</h4>
        <p>(${pizza.toppings.map(topping => `${topping}`).join(", ")})</p>
      </span>
      <p class="price">${pizza.price}SEK 
      <span class="quantity ${pizza.quantity<=0 ? "hide" : ""}"  onclick="subQuantity(${index})">-</span>
      ${pizza.quantity}
      <span class="quantity" onclick="addQuantity(${index})">+</span></p>
    </div>
  `
}

// Rendering menu section
function startAndRefresh () {
  document.getElementById("menu").innerHTML = `${menu.map(printMenu).join("")} 
  <h1>Total: ${totalCost} SEK </h1>
  <h3>Total Quantity: ${totalQuantity}
    <span class="${totalQuantity<=0 ? "hide" : ""}" > - Preparation time: ${prepTimeCalculation(totalQuantity)} minutes</span> 
  </h3>
  <h1 id="order" onclick="order()">ORDER</h1>
  `
}

startAndRefresh()