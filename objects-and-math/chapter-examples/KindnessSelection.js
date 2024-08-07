function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 

 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}
  

 //b) Have the code randomly pick one array, and then print 2 random items from it.
 
 let arrays = [[happiness], [words]];
 for (i=0; i < 1; i++){
  let chosen = (randomSelection(arrays));
  console.log(chosen);
    for (i=0; i < 2; i++){
      console.log(randomSelection(chosen[0]));
    }
 }


 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 let newArray= []
 for (i=0; i<1; i++) {
  console.log(newArray.push(randomSelection(happiness)));
  console.log(newArray.push(randomSelection(words)));
 }
 console.log(newArray);