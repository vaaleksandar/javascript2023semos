//The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var curAge = 46;
var maxAge = 90;
var estAmountday =80;
var ripeOldAge =maxAge-curAge;
var totalEat= (maxAge-curAge)*365*estAmountday;
var totalEatkg = totalEat/1000;



console.log(`You will need ${totalEatkg} ton kikiriki, to last you until the ripe old age of ${maxAge}}`);


