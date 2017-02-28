/*
Vampire Numbers

Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
*/
var vampire_test = function(a, b){
  var a = a.toString();
  var b = b.toString();
  var product = (a * b).toString().split('').sort().join('');
  console.log(product);
  var fangs = (a + b).split('').sort().join('');
  console.log(fangs);

  return fangs === product ? true : false; 
}
vampire_test(10,10);

// 1. multiplicera a * b 
// 2. convertera det till en sträng
// 3. sortera strängen
// 4. slå ihop a + b till en sträng
// 5. sortera den strängen också
// 6. använd regex och se om båda är lika