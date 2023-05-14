//DRIVING LICENCE
// Get the user's input using a prompt which asks “Enter your age". 
// If the user is 18 or older , give feedback: 'You are old enough to drive' 
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. 
// Parse the input of the user from a string, into a number using parseInt().

var yourAge = prompt("Enter your age");
if(parseInt(yourAge) >=18){
    console.log("You are old enough to drive");
} else{
    console.log(`You must wait ${18-yourAge} year to drive`);
}




