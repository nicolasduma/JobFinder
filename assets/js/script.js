const menu = document.getElementsByClassName("conteiner-menu")[0]
menu.classList.add("menu-display-none")
let statusMenu = "hide"

const btnResponsiveMenu = document.getElementById("btn-responsive-menu")

btnResponsiveMenu.addEventListener("click", function () {
    showAndHideMenu()
})

function showAndHideMenu () {
    if (statusMenu === "hide") {
        menu.classList.remove("menu-display-none")
        statusMenu = "show"
    } else if (statusMenu === "show") {
        menu.classList.add("menu-display-none")
        statusMenu = "hide"
    }
}
