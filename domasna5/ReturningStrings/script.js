// 4.Write a function called ReturningStrings
// a.The function takes an object as a parameter
// b.The function should only return (output in the console) 
// the properties which hold strings as their values
// c.BONUS: Add a second parameter to the function which allows 
// you to choose the type of data (string, number, boolean, array, object) 
// you want returned to the console


let car= {
    title: 'Lambourghini',
    speed: 320,
    Color: ['Dark Knight', 'Metalic silver', 'Blue', 'yellow'],
    Hybrid: true
  };
  
  function ReturningStrings(car, returningValues) {
    for (let prop in car) {
      if (typeof car[prop] === 'string' && returningValues === 'string') {
        console.log(`${prop}: ${car[prop]}`);
      } else if (typeof car[prop] === 'number' && returningValues === 'number') {
        console.log(`${prop}: ${car[prop]}`);
      } else if (typeof car[prop] === 'boolean' && returningValues === 'boolean') {
        console.log(`${prop}: ${car[prop]}`);
      } else if (Array.isArray(car[prop]) && returningValues === 'array') {
        console.log(`${prop}: ${car[prop]}`);
      }
    }
  };
  
  ReturningStrings(car, 'string');
  ReturningStrings(car, 'boolean');
  ReturningStrings(car, 'number');
  ReturningStrings(car, 'array');
  