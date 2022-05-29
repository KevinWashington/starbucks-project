let abreMenu = document.querySelector(".abreMenu")
let fechaMenu = document.querySelector(".fecharMenu")
let menu = document.querySelector(".menu")


abreMenu.addEventListener("click", () => {
    menu.classList.add('menu-expanded')
})

fechaMenu.addEventListener("click", () =>{
    menu.classList.remove('menu-expanded')
})