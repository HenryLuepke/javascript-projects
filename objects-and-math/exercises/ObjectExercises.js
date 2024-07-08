let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

// Print out the relevant information about each animal.

let crewReports = function(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
};

for (let i = 0; i < crew.length; i++) {
   console.log(crewReports(crew[i]))
};

// Start an animal race!
let turns = [];
let fitnessTest = function(arr) {

   for (let i = 0; i < arr.length; i++) {
      let distance = 0;
      let turn = 0;
      while (distance <= 20) {
         distance += arr[i].move();
         turn++;
      }
      turns.push(`${arr[i].name} took ${turn} turns to take 20 steps.`);
   }

   return turns;
}

fitnessTest(crew)

for (let i = 0; i < turns.length; i++) {
   console.log(turns[i])
}