function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
      console.log(integer, (integer-1));
      return integer + (decreasingSum(integer-1)); 
   }
}

console.log(decreasingSum(5));
