//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.



function sum (...numbers){  
    return numbers.reduce((a,numbers)=> a+numbers,0);
}
const mysum=sum(10,15,20,25,30,35)
console.log(mysum)