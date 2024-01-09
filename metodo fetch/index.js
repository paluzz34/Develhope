const container = document.querySelector(".container")
const select=document.querySelector("select")
async function card (cardId) {
    try {
        const res= await fetch (`https://ringsdb.com/api/public/card/${cardId}.json`)
        const data= await res.json()
        console.log(data)
        const cardContainer=document.createElement("div")
        const cardImg=document.createElement("img")
        const title=document.createElement("h2")
        title.textContent= data.name
        cardImg.setAttribute("src", "https://ringsdb.com"+ data.imagesrc )
      cardContainer.append(title, cardImg )
      container.appendChild(cardContainer)
    } catch (error) {
        console.error(error)
    }
    
}

select.addEventListener("change", (event)=>{
    const select=event.target.options[event.target.selectIndex]
    let id=select.dataset.Id
   /* if(event.target.value==="Aragorn"){
        id="01001"
    }
    if(event.target.value==="Frodo"){
        id="142001"
    }
    if(event.target.value==="Gandalf"){
        id="142002"
    }*/
    container.innerHTML=""
card(id)
console.log(event)
})


