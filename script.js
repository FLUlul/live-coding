
let containerBikes = document.getElementById("container");

/* 
Jsnack #1:
Creare un array di 7 oggetti:
Ogni oggetto descriverà una bici  con le seguenti proprietà:
nome, peso e brand.
log in console dell’oggetto
*/
let bikes = [
    {
        "nome": "ultrabike",
        "peso": 12,
        "brand": "yamaha"
    },

    {
        "nome": "megabike",
        "peso": 15,
        "brand": "camaro"
    },

    {
        "nome": "mountain",
        "peso": 17,
        "brand": "ferrari"
    },

    {
        "nome": "deca",
        "peso": 10,
        "brand": "decatlon"
    },

    {
        "nome": "magnifica",
        "peso": 17.5,
        "brand": "lamborghini"
    },

    {
        "nome": "gigachad",
        "peso": 25,
        "brand": "chad inc."
    },

    {
        "nome": "minibike",
        "peso": 7,
        "brand": "child e co."
    }
]

console.log(bikes);

/* 
Jsnack #2:
Creare un nuovo oggetto,
crearne una copia con la proprietà “numeroMarce” aggiunta
pushare il nuovo oggetto copia nell’array di oggetti
log in console dell’oggetto originale + log in console dell’oggeto copia
log in console dell’array di oggetti
*/
let newBike = 
{
    "nome": "peepo",
    "peso": 5,
    "brand": "pepethefrog"
}

let newBikeCopy = {...newBike, "numeroMarce": 12}

bikes.push(newBikeCopy);

/* for(let key in newBike){
    console.log(key, newBike[key]);
} */
/* for(let key in newBikeCopy){
    console.log(key, newBikeCopy[key]);
} */
console.log(newBike, newBikeCopy);

console.log(bikes);

/* 
Jsnack #3:
stampare a schermo l’elenco delle bici con tutte le info, principali (numero delle marce no);
[html super base senza o con css super grezzo, l’importante che si capisca dove finisce un blocco bc e dove inizia l’altro, solo quello (quindi bastan dei margini grossolani)]
*/

for(let i=0; i<bikes.length; i++){
    let indexBikes = bikes[i];

    const {nome, peso, brand} = indexBikes;

    stampaHtml(nome, peso, brand);
}

function stampaHtml(nomeBici, pesoBici, brandBici){
    containerBikes.innerHTML += `
    <div class="card">
        <div class="nome-bici">${nomeBici}</div>
        <div class="peso-bici">${pesoBici} kg</div>
        <div class="brand-bici">${brandBici}</div>    
    </div>
  `
}