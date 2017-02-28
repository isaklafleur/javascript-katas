/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES 
tickets([25, 100])    
        // => NO. Vasya will not have enough money to give change to 100 dollars
*/

function tickets(peopleInLine){
  var [n25, n50, n100] = [0, 0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch(peopleInLine[i]) {
      case 25: n25++; break;
      case 50: n50++; n25--; break;
      case 100: n100++; n25--; 
        if (n50) n50--; else n25 -= 2; break;
    }
    if ([n25, n50, n100].some(v => v < 0)) return 'NO';
  }
  return 'YES';
}

tickets([25, 25, 50, 50]);
tickets([25, 100]);



////////////////////////////////////////////////////

// function Clerk(name) {
//   this.name = name;
  
//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0 
//   };
  
//   this.sell = function(element, index, array) {
//     this.money[element]++;

//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     return this.money[25] >= 0;
//   };
// }

// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }