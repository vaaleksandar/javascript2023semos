//SALLARY
// Write a switch statement to set the average salary of a person 
// based on their type of completed education. 
// The salary would be a variable. 
// The higher the value of the variable (salary), 
// the higher the diploma/degree.
// no high school diploma
// a high school diploma
// an Associate's degree
// a Bachelor's degree
// a Master's degree
// a Professional degree
// a Doctoral degree


let sallary = prompt("Enter your sallary in EUR/per year");

if (parseInt(sallary) <= 5000) {
    console.log("no high school diploma");
} else if (parseInt(sallary)>= 5001 && parseInt(sallary) <= 8000) {
    console.log("a high school diploma");
} else if (parseInt(sallary) >= 8001 && parseInt(sallary) <= 10000) {
    console.log("an Associate's degree");
} else if (parseInt(sallary) >= 10001 && parseInt(sallary) <= 12000) {
    console.log("Bachelor's degree");
} else if (parseInt(sallary) >= 12001 && parseInt(sallary) <= 14000) {
    console.log("Master's degree");
} else if (parseInt(sallary) >= 14001 && parseInt(sallary) <= 16000) {
    console.log("Proffesional degree");
} else {
    console.log("Doctoral degree");
}











// var sallary =prompt("Enter youre sallary");

// switch(parseInt(sallary)){
//     case "january":
//     console.log("January has 31 days");
//     break;
//     case "february":
//     console.log("Every 4 years February has 28 days");
//     break;
//     case "march":
//     console.log("March has 31 days");
//     break;
//     case "april":
//     console.log("april has 31 days");
//     break;
//     case "may":
//     console.log("may has 31 days");
//     break;
//     case "june":
//     console.log("june has 30 days");
//     break;
//     case "july":
//     console.log("july has 31 days");
//     break;
//     case "august":
//     console.log("August has 31 days");
//     break;
//     case "september":
//         console.log("september has 30 days");
//         break;
//         case "october":
//     console.log("october has 31 days");
//     break;
//     case "november":
//     console.log("november has 30 days");
//     break;
//     case "december":
//     console.log("april has 31 days");
//     break;
// }




