
export { aboutModule }

const aboutModule = function(content) {

  const aboutHeading = document.createElement("h2")
  aboutHeading.textContent = "About Us"

  const aboutText = document.createElement("p")
  aboutText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor, aut, dicta eaque eveniet necessitatibus ipsam quam excepturi consectetur et tempora asperiores. Sequi et blanditiis eligendi exercitationem recusandae quas sed."
  aboutText.classList.add("text-container")

  content.appendChild(aboutHeading)
  content.appendChild(aboutText)

}