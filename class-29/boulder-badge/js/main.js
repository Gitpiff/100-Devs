// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.
let bulbasaurNxtLvl = 16 - 5
let caterpieNxtLvl = 7 - 1
let weedleNxtLvl = 7 - 1

let totalCandies = bulbasaurNxtLvl + caterpieNxtLvl + weedleNxtLvl

console.log(totalCandies)
//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you whether or not charmander can battle
let celciusToFarenheit = (celcius => celcius * 1.8 + 32)


//console.log(celciusToFarenheit(50))

function canCharBattle(currentTemp) {
   let converted = celciusToFarenheit(currentTemp)

   return (converted > 0) ?  console.log("Battle") : console.log("Too Cold")

}

canCharBattle(-50)

//Loops
//You have joined an underground pokemon league. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
function league(partySize) {

    for( let i = 1; i <= partySize; i ++){
        console.log("Pikachu I choose you")
    }

}

league(7)
