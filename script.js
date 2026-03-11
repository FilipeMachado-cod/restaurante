
// mensagem ao clicar no cardápio

const pratos = document.querySelectorAll(".card")

pratos.forEach(prato => {

prato.addEventListener("click", () => {

alert("Clique no WhatsApp para fazer seu pedido!")

})

})


// animação de scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar")

if(window.scrollY > 50){

navbar.classList.add("shadow")

}else{

navbar.classList.remove("shadow")

}

})