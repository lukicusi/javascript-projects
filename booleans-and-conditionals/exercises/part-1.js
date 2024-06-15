// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitOn && shuttleCabinReady;
let computerStarterCode = 200
let shuttleSpeed = 15000

let fuelLevel = 20100
let engineTemperature = 2500

let commandOverride = true;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
if (crewStatus === true) {
      console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}
if (computerStarterCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStarterCode === 400) {
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline.");
}
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else { 
   console.log("Stable speed");
} 
// Monitor fuel status here Lucas //
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel < 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
} else {
   console.log("Fuel and engine status pending...");
}

// Command override function -L
if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true){
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed!");
}