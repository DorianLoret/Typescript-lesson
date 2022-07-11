"use strict";
// watching live = tsc --init | tsc -w
// Variables
let num1 = 24;
let num2;
let numOrString;
// Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau1 = [];
let tableau = [];
let zidane = {
    id: 0,
    name: "Zidane",
};
// Les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, "Prince");
// Les fonctions
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size} cm et il est âgé de : ${age} ans`);
    }
    else {
        console.log(`le capitaine est âgé de ${age} ans`);
    }
};
ageDuCapitaine(16, 185);
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "Dorian",
    attributes: [false, "author"],
    role: 1,
};
