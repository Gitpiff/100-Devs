//Array question
//Add something to the beginning&ending of an array
//solution 1
let myArray = ['a','b','c','d','e']

//myArray.push("end") //the method .push appends the passed argument(s) to the end of the array
//myArray.unshift("start") //the method .unshift() inserts the passed argument(s) to the beginning of the array


//Solution 2 -use this one- ES6 Syntax we use the spread operator [...]
myArray = ["start",...myArray,"end"]


console.log(myArray)
