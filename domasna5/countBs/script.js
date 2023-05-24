// 1.Write a function called CountBs
// a.The function takes a string as a parameter
// b.The function should return 
// how many times the letter 'B' appears in the string
// c.BONUS: Add a second parameter to the function 
// which is the letter that you want to check, 
// so the output is not always connected to the letter 'B'


function countBs(sentence){
    let count =0;
    for(let i=0; i<sentence.length; i++){
        if(sentence[i].toUpperCase() ==="B"){
            count ++;
        }
    }
    return count;
}

let sentence = 'Bobi SakaSe da zeme Baloni.Balobite Bea izdisani.Sase gi zema Site'
let result=countBs(sentence)

console.log(`Bukvata 'B' se pojavuva ${result} pati vo recenicata`)

console.log(sentence.length);

//Bonus

function countLetter(sentence, AnyLet) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i].toUpperCase() === AnyLet) {
        count++;
      }
    }
    return count;
  }
  
  let AnyLet = 'S';
  let result2 = countLetter(sentence, AnyLet);
  console.log(`Bukvata '${AnyLet}' se pojavuva ${result2} pati vo recenicata.`);