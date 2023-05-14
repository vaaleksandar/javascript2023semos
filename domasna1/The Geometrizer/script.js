// The Geometrizer
// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 2;
var pi =Math.PI
var obem = radius*2*pi;
var area = ((radius**2)*pi);

console.log(`Radiusot na krugot e ${radius} m`);
console.log(`Obemot na krugot e ${obem.toFixed(2)} m`);
console.log(`Povrsinata na krugot e ${area.toFixed(2)} m2`);

// console.log(`Obemot na krugot e ${radius*2*pi}`);

// console.log(`Povrsinata na krugot e ${radius**2*pi}`);
