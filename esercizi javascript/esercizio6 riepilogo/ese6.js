//In questo esercizio dato un array di studenti:
//Utilizza forEach per stampare i nomi degli studenti.
//Utilizza find per trovare uno studente con un voto superiore a 90.
//Utilizza reduce per calcolare la media dei voti degli studenti.
//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
//Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];
//forEach
studenti.forEach(studente => {
    console.log(studente.nome);
  });

//find
const studenteVotoSuperiore90 = studenti.find(studente => studente.voto > 90);
console.log(studenteVotoSuperiore90);

//reduce
const mediaVoti=studenti.reduce((sum, studente) => sum+studente.voto, 0);                      
const voti = mediaVoti/studenti.length ;
console.log(voti)

//map
const studentinome=studenti.map(studente=>studente.nome.toUpperCase())

console.log(studentinome)

//filter
const studentiVotoSuperiore85 = studenti.filter(studente=>studente.voto>=85)
console.log(studentiVotoSuperiore85)