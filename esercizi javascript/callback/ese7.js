//Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
//Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
   const c = a + b;
    return callback(c)
   }
   
   function displayResult(result) {
      if(typeof(result)==="number"){
         console.log(result)
      }else{
         console.log("errore")
      }
   }
   
   performOperation(5, 3, displayResult);