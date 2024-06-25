let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetFood = food.split(",");
console.log(cabinetFood);
let cabinetEquipment = equipment.split(",");
console.log(cabinetEquipment);
let cabinetPets = pets.split(",");
console.log(cabinetPets);
let cabinetSleepAids = sleepAids.split(",");
console.log(cabinetSleepAids);
console.log(cabinetFood.sort());
cabinetFood = cabinetFood.sort();
console.log(cabinetFood);
cabinetEquipment = cabinetEquipment.sort();
console.log(cabinetEquipment);
cabinetPets = cabinetPets.sort();
console.log(cabinetPets);
cabinetSleepAids = cabinetSleepAids.sort();
console.log(cabinetSleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(cabinetFood, cabinetEquipment, cabinetPets, cabinetSleepAids);
console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let chosenCabinet = input.question("Select a cabinet 1-4: ");


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (chosenCabinet === "1") {
    console.log(`The contents are- ${cargoHold[0]}`);
} else if (chosenCabinet === "2") {
    console.log(`The contents are- ${cargoHold[1]}`);
} else if (chosenCabinet === "3") {
    console.log(`The contents are- ${cargoHold[2]}`);
} else if (chosenCabinet === "4") {
    console.log(c`The contents are- ${cargoHold[3]}`);
} else {
    console.log(`Your answer "${chosenCabinet}" is invalid.`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
chosenCabinet = input.question("Select another cabinet 1-4: ");

if (chosenCabinet === "1") {
    let firstItem = input.question("Select an item: ");
    if (firstItem.includes("water bottles")) {
        console.log(`Now dispensing ${firstItem} . . . please wait`)
    } else if (firstItem.includes("meal packs")) {
        console.log(`Now dispensing ${firstItem} . . . please wait`)

    } else if (firstItem.includes("snacks")) {
        console.log(`Now dispensing ${firstItem} . . . please wait`)
    } else if (firstItem.includes("chocolate")) {
        console.log(`Now dispensing ${firstItem} . . . please wait`)
    } else {
        console.log(`Cabinet does not contain ${firstItem}.`)
    }
} 

if (chosenCabinet === "2") {
    let secondItem = input.question("Select an item: from 2");
    if (secondItem.includes("jet packs")) {
        console.log(`Now preparing ${cargoHold[1][0]} . . . please wait`)
    } else if (secondItem.includes("space suits")) {
        console.log(`Now preparing ${secondItem} . . . please wait`)
        
    } else if (secondItem.includes("thermal detonators")) {
        console.log(`Now preparing ${secondItem} . . . please wait`)
    } else if (secondItem.includes("tool belts")) {
        console.log(`Now preparing ${secondItem} . . . please wait`)
    } else {
        console.log(`Cabinet does not contain ${secondItem}.`)
    }
} 
