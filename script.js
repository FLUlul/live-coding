
let container = document.getElementById("container");


let peoples = [
    {
        "name": "Mario",
        "lastName": "Rossi",
        "age": 18
    },

    {
        "name": "Giuseppe",
        "lastName": "Franceschi",
        "age": 15
    },

    {
        "name": "Luigi",
        "lastName": "Meroli",
        "age": 17
    }
]

console.log(peoples);

const canDrive = peoples.map((people) => {
    if(people.age >= 18){
        return console.log(people.name, "can drive cuz his age is:", people.age);
    }
});

