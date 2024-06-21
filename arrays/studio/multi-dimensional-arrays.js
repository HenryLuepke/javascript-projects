let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArr = food.split(",").sort()
let equipmentArr = equipment.split(",").sort()
let petsArr = pets.split(",").sort()
let sleepAidsArr = sleepAids.split(",").sort()

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(foodArr, equipmentArr, petsArr, sleepAidsArr)
console.log(cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userInput = input.question("Select a cargo hold cabinet from 0 - 3: ")

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userInput <= 3 && userInput >= 0) {
    console.log(`Cabinet ${userInput} contains: ${cargoHold[userInput]}`)
} else {
    console.log("That cabinet does not exist")
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userCabinetInput = input.question("Select a cargo hold cabinet from 0 - 3: ")
let userItemInput = input.question("Select a cargo hold item: ")

if (userCabinetInput > 3 || userCabinetInput < 0) {
    console.log("That cabinet does not exist")
} else if (cargoHold[userCabinetInput].includes(userItemInput)) {
    console.log(`Cabinet ${userCabinetInput} DOES contain ${userItemInput}.`)
} else {
    console.log(`Cabinet ${userCabinetInput} DOES NOT contain ${userItemInput}.`)
}
