//getElementById

const elementId = document.getElementById("document-title");
console.log(elementId);

//getElementsByClassName

const elementClass = document.getElementsByClassName("class_one");
console.log(elementClass);

//getElementsByTagName;

const elementsTagName = document.getElementsByTagName("h1");
console.log(elementsTagName);

//querySelector

const elementQuerySelector = document.querySelector("meta");
console.log(elementQuerySelector);

// querySelectorAll
const elementsSelectorAll = document.querySelectorAll("#document-title");
console.log(elementsSelectorAll);

//textContent

elementId.textContent = "Aoba filhão so nos compuiter"
console.log(elementId);


//innerText

elementId.innerText = "o pae eh bom"
console.log(elementId);

//innerHTML

elementId.innerHTML += "<small> hehehe</small>"

console.log(elementId);

//value

const elementInputValue = document.querySelector("input");
console.log(elementInputValue);
elementInputValue.value = "ahshuashuashua"

//Manipulando atributos
const header = document.querySelector('head')
header.setAttribute("id", "header")
const headerId = document.querySelector("#header")
headerId.getAttribute("id")
headerId.removeAttribute("class");

//Alterando estilos com style
const elementStyle = document.querySelector("body")
elementStyle.style.backgroundColor = "green"
console.log(elementStyle.style.backgroundColor);

//classList
const elementClassList = document.querySelector("body")
elementClassList.classList.add( "active")
console.log(elementClassList.classList)

    
