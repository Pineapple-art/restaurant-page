
export { menuModule }

const menuModule = function (content) {
  const dishList = document.createElement("div")
  dishList.classList.add("dishList")
  
  const menu = document.createElement("h2")
  menu.textContent = "Awesome Pineapple"
  content.appendChild(menu)

  dishes.forEach((item) => {
    const dish = document.createElement('div')
    dish.textContent = item
    dish.classList.add("dish")
    
    dishList.appendChild(dish)
  })

  content.appendChild(dishList)
}

const dishes = [
  "Fish",
  "Bread",
  "Water",
  "Juice",
  "Sandwich",
]


