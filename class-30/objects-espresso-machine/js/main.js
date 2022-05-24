//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(price, size, color, model) {

        this.price = price;
        this.size = size;
        this.color = color;
        this.model = model
    }

    turnOn() {
        console.log("On!")
    }
    steam() {
        console.log("Steaming!")
    }
    brew() {
        console.log("Good stuff coming your way")
    }

}


let gaggia = new EspressoMachine(5000, "large", "black", "Classic Pro")

console.log(gaggia)
