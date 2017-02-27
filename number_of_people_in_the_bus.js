/*
Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.

Your task is to return number of people in the bus after the last bus station. Take a look on the test cases :)

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
*/


const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

/////////////////////////

var number = function(busStops){
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}