class Pet {
    constructor(name, age) {
        console.log('In Dog Constructor');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('In Cat Constructor')
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meooow!!';
    }
}
class Dog extends Pet {

    bark() {
        return 'woof!!';
    }
}


const monty = new Cat('monty', 9);
const mike = new Dog('mike', 9);
console.log(mike)
console.log(mike.eat())
console.log(monty)
console.log(monty.eat())
console.log(monty.meow())