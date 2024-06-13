// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof marsDistanceKm);
console.log(typeof moonDistanceKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars= marsDistanceKm * milesPerKm;
console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars +  " days to reach Mars");
// Calculate a trip to the moon below
let milesToMoon = moonDistanceKm * milesPerKm;
console.log(milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon);
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
// Print the results of the trip to the moon below
shuttleName = ("Awesome Shuttle");
console.log(shuttleName + " will take " + daysToMoon + " days to reach the moon");