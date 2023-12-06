//Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
//La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
const obj = {
  name: "John",
  age: 30
}

function fetchDataFromAPI(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj === "object") {
      setTimeout(() => {
        resolve(obj)
      }, 2000)
    } else {

      setTimeout(() => {
        reject("errore obj")
      }, 2000)
    }

  })

}

fetchDataFromAPI(obj)
  .then(data => {
    console.log(data, "then")
  })
  .catch(err => {
    console.log(err, "catch")
  })
