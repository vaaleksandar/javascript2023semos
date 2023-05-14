// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsTemp = 32;
var farenhTemp = 90;

var celsTofaren =celsTemp*(9/5)+32;
var farentocels =(farenhTemp-32)*(5/9);




console.log(` ${celsTemp} °C e ednakvo na ${celsTofaren.toFixed(2)} °F`);

console.log(` ${farenhTemp} °F e ednakvo na ${farentocels.toFixed(2)} °C`);


