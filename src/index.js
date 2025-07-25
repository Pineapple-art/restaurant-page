
import "./styles.css"
import { homeModule } from "./home"
import { Menu, mainDishes } from "./menu"
import { About } from "./about"

const content = document.querySelector("#content")

homeModule(content)

const home = document.querySelector("#home")
home.addEventListener("click", () => {
  clean()
  homeModule(content)
})

const menu = document.querySelector("#menu")
menu.addEventListener("click", () => {
  clean()
  Menu.addHeading(content)
  Menu.addMenuSection(mainDishes, content)
})

const about = document.querySelector("#about")
about.addEventListener("click", () => {
  clean()
  About.addAbout(content)
})

function clean() {
  content.innerHTML = ""
}

