// for(starting point , run while true , do this after every run) {

// }

// for(let counter=0; counter < 100; counter++) {
//   console.log(counter);
// }

// for(let i=0; i<100; i++) {
//   console.log(i);
// }

// for(let i=0; true; i++) {
//   console.log(i);
// }

// let counter = 0;
// while(counter < 10) {
//   console.log(counter);
//   counter++;
// }

/*  0 1 2 3 4
 0  X X X X X
 1  X X X X X
 2  X X X X X
 3  X X X X X
 4  X X X X X
*/


// let groceryList = [[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]];

// console.log(groceryList[2][4]); // gives 4

// let groceryList = ['bananas', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis', 'apples', 'kiwis'];

// console.log(groceryList.length);

// for(let i=0; i<groceryList.length; i++) {
//   // console.log(groceryList[i] + ' - organic only');
//   groceryList[i] = groceryList[i] + ' - organic only';
// }

// console.log(groceryList);

// let mathProblems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i=0; i<mathProblems.length; i++) {
//   // 5x + 25 = ? 
//   mathProblems[i] = mathProblems[i] * 5 + 25;
// }

// console.log(mathProblems);


// let fastFoodChains = ["Mcdonalds", "Carls Jr.", "Jack in the box", "Wendys"];
// //This is going to loop 3 times because that's how long the array is
// for(let i = 0; i < fastFoodChains.length; i++) {
//   console.log("i is: " + i);
//   console.log("fastFoodChains[i] is: " + fastFoodChains[i]);
//   if(fastFoodChains[i]== "Mcdonalds") {
//     console.log("fastFoodChains[i] is Mcdonalds and first if statement succeeded");
//     fastFoodChains[i] = fastFoodChains[i] + " - Big Mac";
//   } else if(fastFoodChains[i]== "Jack in the box") {
//     console.log("fastFoodChains[i] is Jack in the box and if else statement succeeded");
//     fastFoodChains[i] = fastFoodChains[i] + " - Curly Fries";
//   } else if(fastFoodChains[i]== "Wendys") {
//     console.log("fastFoodChains[i] is Wendys and if else statement succeeded");
//     fastFoodChains[i] = fastFoodChains[i] + " - Ghost Pepper Fries";
//   } else {
//     console.log("fastFoodChains[i] is Carls Jr. and else statement succeeded");
//     fastFoodChains[i] = fastFoodChains[i] + " - Shakes";
//   }
// }
// console.log(fastFoodChains);

console.log( 12 % 4 ); // returns 0
console.log( 6 % 4 ); // returns 2
console.log( 5 % 4 ); // returns 1

// Even or odd
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 == 1) {
    console.log(numbers[i] + " is odd");
  } else {
    console.log(numbers[i] + " is even");
  }
}

