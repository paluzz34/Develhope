const firstName = document.querySelector("#firstName")
     const lastName = document.querySelector("#lastName")
     const age = document.querySelector("#age")

     const person = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
     }
     let dataPerson = JSON.stringify(person)
     const form = document.querySelector("form")
     form.setAttribute("name", dataPerson)
     console.log(form);
     console.log(dataPerson);
