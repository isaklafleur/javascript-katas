/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/
// SOLUTION


function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(''));
}
squareDigits(9);
// 9*9

squareDigits(99)
// 9*9 9*9 -> 81 81 -> 8181