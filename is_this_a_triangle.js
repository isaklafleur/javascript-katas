/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/


//It can be triangle only if sum of any two sides is larger than the third one.

// SOLUTION

function isTriangle(a, b, c) {
    let max = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - max > max;
}

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}