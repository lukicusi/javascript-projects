//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = []
console.log(table.push(element1, element2, element26));
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);
//LUCAS- index[1] returns the whole table array while [1][1] returns position of array 1 item 1 (positions starting at 0)

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table);
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let array3dAttempt = []
let firstArray = [ ["red", "orange"], ["yellow", "green"], ["blue", "violet"] ] ;
console.log(firstArray);
let secondArray = [ ["fork", "spoon"], ["knife", "spork"], ["chopstick", "spatula"] ] ;
console.log(secondArray);
let thirdArray = [ ["robin", "sparrow"], ["owl", "cardinal"], ["hawk", "dove"] ];
console.log(thirdArray);

console.log(array3dAttempt.push(firstArray, secondArray, thirdArray));
console.log(array3dAttempt);

console.log(array3dAttempt[0][0][1]);
console.log(array3dAttempt[1][2][0]);
console.log(array3dAttempt[2][1][0]);