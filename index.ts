// watching live = tsc --init | tsc -w

// Variables
let num1 = 24;
let num2: string;
let numOrString: number | string;

// Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau1: string[] = [];
let tableau: (number | boolean)[] = [];

// Les objets
interface Player {
  id: number;
  name: string;
  jersey?: number;
}
let zidane: Player = {
  id: 0,
  name: "Zidane",
};

// Les classes
class Singer {
  id: number;
  name: string;
  alive?: boolean;

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive;
  }
}

const prince = new Singer(0, "Prince");

// Les fonctions
const sayMyName = (name?: string) => {
  console.log(`Bonjour ${name}`);
};

const ageDuCapitaine = (age: number | string, size?: number): void => {
  if (size) {
    console.log(
      `La taille du capitaine est de ${size} cm et il est âgé de : ${age} ans`
    );
  } else {
    console.log(`le capitaine est âgé de ${age} ans`);
  }
};

ageDuCapitaine(16, 185);

// Enum & Tuple
enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}

interface User {
  name: string;
  attributes: [number | boolean, string];
  role: Role;
}

const user1: User = {
  name: "Dorian",
  attributes: [false, "author"],
  role: 1,
};
