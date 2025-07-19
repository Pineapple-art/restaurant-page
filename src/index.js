
import "./styles.css"
import { homeModule } from "./home"
import { menuModule } from "./menu"

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
  menuModule(content)
})

// const about = document.querySelector("#about")
// home.addEventListener("click", () => aboutModule())

function clean() {
  content.innerHTML = ""
}


class Tabs {
  // static 
}