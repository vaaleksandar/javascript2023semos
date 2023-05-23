// 4.Output the Mario tower in the console with five hashtags (#)
// Result of exercise number 4 should look like this:
// #
// ##
// ###
// ####
// #####

// Bonus: Create a chess board with black and white squares (black: ■) 
// and (white □)  --> hint: you should use nested loops (edited) 

for (let i=1; i<=5; i++){
    let line = '#'.repeat(i);
    console.log(line);
}

//Bonus

let chessBoard = "";

for (let i = 0; i <= 8; i++) {
  for (let j = 0; j <= 8; j++) {
    if ((i + j) % 2 == 0) {
      chessBoard += "■ ";
    } else {
      chessBoard += "□ ";
    }
  } chessBoard += "\n";

}
 console.log(chessBoard);