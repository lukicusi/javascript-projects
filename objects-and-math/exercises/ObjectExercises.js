let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let doggy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tinyThing = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpTwo, doggy, tinyThing];
//console.log(crew);

// After you have created the other object literals, add the astronautID property to each one.
/*let animals = [[superChimpOne], [salamander], [superChimpTwo], [doggy], [tinyThing]];
console.log(animals);

for (i=0; i<animals.length; i++){
   let num = Math.random()*10;
   console.log(animals[i].push(`astronautID: ${Math.ceil(num)}`));
}
console.log(animals); */

// Add a move method to each animal object
// Create an array to hold the animal objects. 
// Print out the relevant information about each animal.
function crewReports(obj) {
   console.log(`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`)
   return obj;
};
console.log(crewReports(superChimpOne));

// Start an animal race!
function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
      numSteps = 0;
      turns = 0;

   while(numSteps < 20){
      numSteps += candidates[i].move();
      turns++;
   }

      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }

   return results;
}
console.log(fitnessTest(crew));
