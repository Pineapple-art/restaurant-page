
export { Menu, mainDishes }

class Menu {

  static #addDish(dish, dishCard) {

    const name = document.createElement("p")
    const price = document.createElement("p")
    const ingredients = document.createElement("p")

    name.textContent = dish.name
    price.textContent = dish.price
    ingredients.textContent = dish.ingredients

    name.classList.add("dish-name")
    ingredients.classList.add("ingredients")

    dishCard.appendChild(name)
    dishCard.appendChild(price)
    dishCard.appendChild(ingredients)

    // content.appendChild(dishCard)

  }

  static addDishCard(dish, div) {
    const dishCard = document.createElement("section")
    dishCard.classList.add("dish-card")

    this.#addDish(dish, dishCard)

    div.appendChild(dishCard)
  }

  static addHeading(div) {
    const menu = document.createElement("h2")
    menu.textContent = "Awesome Pineapple"
    div.appendChild(menu)
  }

}


const mainDishes = [
  {
    name: "Margherita Pizza",
    price: "$10.99",
    ingredients: "Tomato sauce, mozzarella, fresh basil, olive oil",
  },
  {
    name: "Spaghetti Carbonara",
    price: "$13.49",
    ingredients: "Spaghetti, eggs, pancetta, pecorino, black pepper",
  },
  {
    name: "Grilled Chicken Salad",
    price: "$11.25",
    ingredients: "Mixed greens, grilled chicken, cherry tomatoes, vinaigrette",
  },
  {
    name: "Mushroom Risotto",
    price: "$12.75",
    ingredients: "Arborio rice, mushrooms, parmesan, garlic, onion",
  },
  {
    name: "Classic Cheeseburger",
    price: "$9.95",
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, onion, bun",
  },
  {
    name: "Veggie Wrap",
    price: "$8.50",
    ingredients: "Tortilla, hummus, cucumber, lettuce, bell pepper, avocado",
  },
];



