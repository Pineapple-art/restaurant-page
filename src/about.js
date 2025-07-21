
export { About }

class About {
  static #addHeading(div) {
    const aboutHeading = document.createElement("h2")
    aboutHeading.textContent = "About Us"
    div.appendChild(aboutHeading)
  }

  static #addText(container) {
    const aboutText = document.createElement("p")
    aboutText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor, aut, dicta eaque eveniet necessitatibus ipsam quam excepturi consectetur et tempora asperiores. Sequi et blanditiis eligendi exercitationem recusandae quas sed."

    container.appendChild(aboutText)
  }

  static #addContacts(container) {
    const heading = document.createElement("h3")
    heading.textContent = "Contact us:"
    container.appendChild(heading)

    const adress = document.createElement("p")
    adress.textContent = "Adress: 123 This street JS-City"
    container.appendChild(adress)

    const phone = document.createElement("p")
    phone.textContent = "Phone: (123) 456-789"
    container.appendChild(phone)

    const email = document.createElement("p")
    email.textContent = "Email: contact@pineapple.com"
    container.appendChild(email)

    const hours = document.createElement("p")
    hours.textContent = "Hours: 11am - 9pm"
    container.appendChild(hours)

  }

  static addAbout(content) {
    const container = document.createElement("div")

    this.#addText(container)
    this.#addContacts(container)

    this.#addHeading(content)
    content.appendChild(container)

  }

}