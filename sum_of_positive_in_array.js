/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

function positiveSum(arr) {
    return arr.reduce(function(a,b) {
        a + (b > 0 ? b : 0),0;
    });
}
///////////////////////

function positiveSum(arr) {
  if (arr.length > 0) {
      var sum = 0;

      arr.forEach(function(num) {
          if (num > 0) {
              sum += num;
          }
      });
      return sum;
  } else {
      return 0;
  }
}
 
