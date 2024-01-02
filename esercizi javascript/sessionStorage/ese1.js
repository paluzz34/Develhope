const btn = document.querySelector(".btn")
const firstname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")
const email = document.querySelector(".email")
const title = document.querySelector(".title-name")


function setTitle() {

    title.innerText = firstname.value

    sessionStorage.setItem("firstname", firstname.value)
    sessionStorage.setItem("email", email.value)
    sessionStorage.setItem("lastname", lastname.value)

}

function loadSessionStorage() {

    title.innerText = sessionStorage.getItem("firstname")
}

loadSessionStorage()
btn.addEventListener("click", setTitle)
