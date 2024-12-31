// 1 -  movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3 - selecionando elemento por id
const title = document.getElementById("title")

console.log(title)

// 4 - selecionando por classe
const products = document.getElementsByClassName("produts")

console.log(products)

// 5 - selecionando os elementos por CSS
const productsQuery = documents.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

// 6 -  insertBefore
const p = document.createElement("p")

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo!"

header.replaceChild(h2, title);

// 9 - CreateTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")

console.log(myText);

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// 10 - getAttribute e setAttribute
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "blank")

// 11 - offsetWidth e offsetHeight
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 12 - getClientBoundingRect
const product1 = products[0]

console.log(product1.getBoundingClientRect())

// 13 - Estilos com javaScript
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333"

// 14 - alternado estilos de vários elementos
for(const li of listItens){
    li.style.backgroundColor = "red"
}
