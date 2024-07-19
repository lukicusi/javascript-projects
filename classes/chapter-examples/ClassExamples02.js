// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name="Jonathan", age, mass = 54, nickname){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.nickname = nickname;
   }
}

let tortoise = new Astronaut('Speedy', 120, 82, "Mr.Turtle");

console.log(tortoise.name, tortoise.age, tortoise.mass, tortoise.nickname);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
