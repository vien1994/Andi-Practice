// ----------- Methods -------------- 

// let array = [1,2,3];
// array = array.reverse();

// console.log(array);

// let example = {
//   sayHi: () => {
//     console.log('Hi');
//   },
//   sayParam: (x) => {
//     console.log(x)
//   }
// }

// example.sayHi();
// example.sayParam('sdfhjskjdhfkjdshf');
// example.sayParam('Something else');

// ------------------ Big O -----------------
// Big O describes the rate of increase in runtime for your code

// In this scenario, we want to print out every number in the array
// How long will this take in terms of Big(O)
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// This runs in O(n) 

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i = 0; i < numbers.length + 5; i++) {
//   console.log(numbers[i]);
// }

// This runs in O(n)

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i = 0; i < numbers.length; i += 2) {
//   console.log(numbers[i]);
// }

// This runs in O(n)

// In this example, for every index in numbers, also print out the alphabet one at a time. 
// EX: 1A, 1B, 1C, 2A...
// let alphabet = ['A', 'B', 'C', 'D', 'E']; // n
// let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
// for(let i = 0; i < numbers.length; i++) {
//   for(let j = 0; j < alphabet.length; j++) {
//     console.log(numbers[i] + alphabet[j]);
//   }
// }
// n * n 
// This is O(n^2)

// Algorithm is a formula/series of steps that is used to solve something


// Lets say we wanted to find a specific number in a sorted array. We can use a regular O(n) search or O(log(n)). There's more options but this is our example.
// What index is it at?
// let numbers = [1,2,3,4,5];

// 14
// numbers.length / 2
// let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

// const oNSearch = (numList, numberToFind) => {
//   for(let i = 0; i < numList.length; i++) {
//     console.log('We are currently at index ' + i);
//     if(numList[i] == numberToFind) {
//       console.log('Index of the number is: ' + i);
//       return i;
//     }
//   }
// };

// const binarySearch = (numList, numberToFind) => {

// }

// oNSearch(numbers, 40);

// O(log(n))

// modern syntax (ES6) for writing a function
// const sayStuff = (wordsToSay, numTimesToSay) => {
//   for(let i = 0; i < numTimesToSay; i++) {
//     console.log(wordsToSay);
//   }
// }

// // Call/Execute the function
// sayStuff('whats up', 5);


let numbers = [0,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// numbers.forEach((indexValue) => console.log(indexValue));
numbers.sort((a,b) => a - b);
console.log(numbers);
