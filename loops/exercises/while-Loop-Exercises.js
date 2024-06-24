//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
//another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel= ""
let numberOfAstronauts = 0
let shuttleAltitudeKm = ""

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  
  const input = require('readline-sync');
  
  startingFuelLevel = input.question("Enter starting fuel level: ");
  startingFuelLevel = Number(startingFuelLevel);

  while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
    startingFuelLevel = input.question("invalid. try again: ");
    startingFuelLevel = Number(startingFuelLevel);
  } 

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numberOfAstronauts = input.question('Please enter number of astronauts: ');
  numberofAstronauts = Number(numberOfAstronauts);

  while (numberOfAstronauts > 7 || numberOfAstronauts < 1) {
    numberOfAstronauts = input.question('Invalid. Please enter astronaut count between 1 and 7: ');
    numberOfAstronauts = Number(numberOfAstronauts);
  }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel-100*numberOfAstronauts >= 0) {
  shuttleAltitudeKm += 50;
  startingFuelLevel -= 100*numberOfAstronauts;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

shuttleAltitudeKm = Number(shuttleAltitudeKm);

console.log(`The shuttle gained an altitude of ${shuttleAltitudeKm} km.`);

if (shuttleAltitudeKm >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failure to reach orbit.");
} 