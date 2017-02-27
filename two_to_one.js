/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/



function longest(s1, s2) {
    var s1Clean = s1.split('').filter(function(item, i, ar) { return ar.indexOf(item) === i; }).sort().join('');
    var s2Clean = s2.split('').filter(function(item, i, ar) { return ar.indexOf(item) === i; }).sort().join('');
}
return (s1Clean.length > s2Clean.length) ? s1Clean : s2Clean


function longest(s1, s2) {
  s3 = s1 + s2;
  newArray = s3.split("");
  newArray = newArray.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return newArray.join("");
}