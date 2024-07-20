let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];
let takeFirstI = function (names) {
return (names[0][0]);
};
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(takeFirstI);

console.log(firstInitials);
