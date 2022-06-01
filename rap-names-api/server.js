const express = require("express")
const app = express()
const PORT = 8000

const rappers = {
    "savage":{
        "age": 29,
        "birthName": "Abraham - Joseph",
        "location": "London, England"
    },
    "chance":{
        "age": 29,
        "birthName": "Chancellor Bennet",
        "location": "Chicago, Illinois"
    },
    "springfield":{
        "age": 29,
        "birthName": "springfield",
        "location": "springfield"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapperName", (request, response) => {
    const rappersName = request.params.rapperName.toLocaleLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers["springfield"])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})