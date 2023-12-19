const input = document.querySelector("input")
const add = document.querySelector("#add")
const ul = document.querySelector("ul")

const addProduct = () => {
  const li = document.createElement("li")
  const checkBox = document.createElement("input")
  checkBox.setAttribute("type", "checkbox")
  ul.appendChild(li)
  li.innerText = input.value
  li.appendChild(checkBox)
  li.classList.add("list-item")
  checkBox.classList.add("check")
  console.log(input.value);
  input.value = ""
};