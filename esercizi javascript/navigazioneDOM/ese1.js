const ul = document.querySelector("ul")
const ulFather = ul.parentElement
const secondChild = ul.children[1]
const netxToSecond = secondChild.nextElementSibling
const pervNetxToSecond = secondChild.previousElementSibling

console.log(ulFather);
console.log(secondChild);
console.log(netxToSecond);
console.log(pervNetxToSecond)