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