
export { homeModule }

const homeModule = function(content) {
  const homeHeading = document.createElement("h2")
  homeHeading.textContent = "Awesome Pineapple Restaurant"

  const anotherHeading = document.createElement("h3")
  anotherHeading.textContent = "This is a homepage"

  const textContainer = document.createElement("div")
  textContainer.classList.add("text-container")

  const homeText = document.createElement("p")
  homeText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci omnis aliquid magni nemo consectetur, veniam aperiam, vitae nulla rerum vel nesciunt tempore accusamus autem provident inventore. Et amet necessitatibus ipsum!"

  const imgMain = document.createElement("img")
  imgMain.classList.add("pineapple")

  textContainer.appendChild(imgMain)
  textContainer.appendChild(homeText)

  content.appendChild(homeHeading)
  content.appendChild(anotherHeading)
  content.appendChild(textContainer)

}

