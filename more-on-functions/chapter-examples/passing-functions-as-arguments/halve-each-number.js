let nums = [3.14, 42, 4811];
let takeHalf = function (n) {
    return n/2;
};

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(takeHalf);

console.log(halved);
