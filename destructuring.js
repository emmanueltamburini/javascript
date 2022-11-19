const deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    age: 50,
    getName() {
        return `${this.name} ${this.lastName} ${this.power}`
    }
}

/* const name = deadpool.name;
const lastName = deadpool.lastName;
const power = deadpool.power; */

function printHero({name, lastName, power, age = 0}) {
    console.log(name, lastName, power, age);
}

printHero(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */

const [ , , h3] = heroes;
console.log(h3);

