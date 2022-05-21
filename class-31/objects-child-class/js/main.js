//Create an a class and extend it - Can be anything you would like it to be!
class Animal{
    constructor(name) {
        this.name =  name
    }

    swim() {
        console.log(`${this.name} is a great swimmer!`)
    }
}

class Mammal extends Animal{
    constructor(name, type) {
        super(name)
        this.type = type
    }
}

let simba = new Mammal("Simba", "Lion")

console.log(simba)
