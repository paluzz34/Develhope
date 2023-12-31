//Crea una Promise che simula il recupero dei dati da un'API.
// A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.
// -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 -La chiamata avrà successo con il messaggio Data retrieved successfully 
//se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      const success = Math.random() < 0.5;
  
      setTimeout(() => {
        if (success) {
          resolve("Data retrieved successfully");
        } else {
          reject(new Error("Error"));
        }
      }, 1000); 
    });
  }
  
  fetchDataFromAPI()
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });