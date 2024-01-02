const btn = document.querySelector(".btn")
const firstname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")
const email = document.querySelector(".email")
const title = document.querySelector(".title-name")


function setTitle() {

    title.innerText = firstname.value

    localStorage.setItem("firstname", firstname.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("lastname", lastname.value)

}
function loadLocalStorage() {

    title.innerText = localStorage.getItem("firstname")
}

loadLocalStorage()
btn.addEventListener("click", setTitle)
