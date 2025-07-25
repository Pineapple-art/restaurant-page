
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

  const imgLink = document.createElement("a")
  imgLink.textContent = "Photo by Pineapple Supply Co. from Pexels"
  const IMG = "https://www.pexels.com/photo/close-up-photo-of-pineapple-with-party-hat-and-a-black-sunglasses-1071878/"
  imgLink.setAttribute("href", IMG)

  const imgMain = document.createElement("img")
  imgMain.classList.add("pineapple")

  textContainer.appendChild(imgMain)
  textContainer.appendChild(homeText)
  textContainer.appendChild(imgLink)

  content.appendChild(homeHeading)
  content.appendChild(anotherHeading)
  content.appendChild(textContainer)

}

