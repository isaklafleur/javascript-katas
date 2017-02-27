/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Implement the method stray which accepts such array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3
*/

function stray(numbers) {
  for (var index in numbers) {
    if (numbers.indexOf(numbers[index]) === numbers.lastIndexOf(numbers[index])) {
      return numbers[index];
      }
  }
}

///////////////////////

function stray(numbers) {
    var sort = numbers.sort();
    console.log(sort);
    if (sort[0] === sort[1]) {
        return sort[sort.length-1]
    }  else {
        return sort[0]
    }
}