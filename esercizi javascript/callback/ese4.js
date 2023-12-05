//Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
//La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
function runCallbacks(callbacks) {
    callbacks.forEach(callback => callback());
    return callbacks
}
function firstCallback() {
  console.log("primo seconso")
}
function secondCallback() {
  console.log("secondo secondo")
}

function thirdCallback() {
  console.log("terzo secondo")
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);