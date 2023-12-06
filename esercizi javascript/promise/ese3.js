//Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
// -Utilizzare setTimeout per simulare un'operazione asincrona.


function ritardoPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Ope. completata dopo 2 secondi');
        }, 2000);
    });
}

ritardoPromise()
    .then(ritardoPromise => console.log(ritardoPromise))
    .catch(err => console.log(err))
