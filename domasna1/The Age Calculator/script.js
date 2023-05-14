//The Age Calculator
// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

var birthYear = 1977;
var futureYear = 2089;
var result1 = futureYear-birthYear;
var result2 = futureYear-birthYear-1;


console.log(`I will be either ${result1}, or ${result2} in  ${futureYear}`);


