// 2.Write a function called LandscapeOrPortrait
// a.The function should take two arguments: 
// width and height (both to be numbers)
// b.If the width is greater than the height, 
// then the output should be that the dimensions are for a Landscape
// c.If it's the opposite, then the dimensions are for a Portrait

function Land_Portrait(width,height){
 if (width>height){
  return 'dimenziite se za Landscape.';
 }else{
  return 'Dimenziite se Portrait';
 }
}



console.log(Land_Portrait(600,400));

