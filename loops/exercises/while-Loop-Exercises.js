//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuel;
let astronautsAboard;
let altitude;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
startingFuel = input.question("What is the starting fuel? ")

while (startingFuel < 5000 || startingFuel > 30000) {
  startingFuel = input.question("Invalid fuel level. Please input a number between 5,000 and 30,000: ")
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronautsAboard = input.question("How many astronauts are going aboard? ")

while (astronautsAboard <= 0 || astronautsAboard > 7) {
  if (astronautsAboard <= 0) {
    astronautsAboard = input.question("Too few astronauts! The shuttle needs at least 1 astonaut. How many astronuats are going aboard? ")
  } else {
    astronautsAboard = input.question("Too many astronauts! The shuttle can hold 7 at most. How many astronuats are going aboard? ")
  }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
altitude = 0;
while (startingFuel > 0) {
  startingFuel = startingFuel - (100 * astronautsAboard);
  altitude += 50
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (altitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${altitude} km.\nOrbit achieved!`)
} else {
  console.log(`The shuttle gained an altitude of ${altitude} km.\nFailed to reach orbit.`)
}
