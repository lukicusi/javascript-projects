//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, nickname){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.nickname = nickname;
   }
}

let fox = new Astronaut('Fox', 7, 12, "Foxy");

console.log(fox);
console.log(fox.age, fox.color, fox.nickname);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

fox.awardNumber = 2;
console.log(fox.awardNumber);