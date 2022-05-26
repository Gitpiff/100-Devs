// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }

    //"getter" for the name
    getName(){
        return this._name
    }
    //"getter" for the role
    getRole(){
        return this._role
    }

    sayHola(){
        console.log(`Hola me llamo ${this._name} y mi departamento es ${this._role}`)
    }
}

class BackEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }

    //"getter" for tech
    getTech(){
        return this._tech
    }

    sayHola(){
        console.log(`Hola me llamo ${this._name} , mi departamento es ${this._role} y utilizo ${this._tech}`)
    }
}

class FrontEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }

    //"getter" for tech
    getTech(){
        return this._tech
    }

    sayHola(){
        console.log(`Hola me llamo ${this._name} , mi departamento es ${this._role} y utilizo ${this._tech}`)
    }
}

let whale = new Contractor("Gian", "Front-End")
let chachi = new FrontEnd("Chachi", "Front-End", "React")
let chacho = new BackEnd("Chachi", "Back-End", "Node")

let agency = [whale, chachi, chacho]

for (person of agency){
    person.sayHola()
}
