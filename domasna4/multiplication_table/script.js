// 2.Multiplication Tables
// Write a for loop that will iterate from 0 to 10. 
// For each iteration of the for loop, it will multiply the number by 9 and 
// log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for 
// every multiplier from 1 to 10 (100 results total).

for (let i=0; i<=20; i++) {
    let result = i * 9;
        console.log(`Brojot ${i} * 9 =${result}`)
    } ;

    // Bonus


for(let i =1; i<=10; i++){
    for(j=1; j<=10; j++){
        let proizvod = i * j ;
        // console.log(proizvod);
        console.log(`${i} * ${j} = ${proizvod}`)
    }
};


