// 3.The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise 
// by logging every value from 60 to 100: your log should show "For 88, you got a B. 
// For 89, you got a
// For 90, you got an A. For 91, you got an A.", etc., 
// logging each grade point in the range.

for (let result = 60; result<=100; result ++){
// let grade;
if(result >= 89){
    grade = 'A';
} else if (result >= 79){
    grade='B';
} else if (result >= 69){
    grade ='C';
}else if (result >= 60){
    grade ='D';
} else {
    grade ='F';
}
console.log(`For test score ${result} you got GRADE ASSIGN "${grade}"`);
}


