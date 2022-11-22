
//       INDEX   0    1    2    3    4
// let alphabet = ['A', 'B', 'C', 'D', 'E'];

// console.log(alphabet.length);

//   Starts at 0, Ends at 4
// for(let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i]);
// }

// Starts at 4, Ends at 0
// for(let i = alphabet.length - 1; i >= 0; i--) {
//   console.log(alphabet[i]);
// }

// i drops from
/*
    4 -> E
    3 -> D
    2 -> C
    1 -> B
    0 -> A
*/

// -------------- Objects -----------------------

// let car = {
//   make: 'honda',
//   year: '2019',
//   color: 'blue'
// };

// console.log(car.year);

// car.isDamaged = false;

// console.log(car);

// ----------- Object Example Scenario ----------

// Imagine you're at a car website looking to buy a car. You need to provide details about the car you want (make, year, if it's damaged, and color).
// The make and year field are mandatory.

// Create the car object and give make and year predefined values.
// If these values do not change, then we know the user did not enter in the information.
// let car = {
//   make: null,
//   year: null
// };

// // Checks if the make & year is filled out and NOT null
// const validateFields = (car) => {
// // Check if the user has filled out the mandatory year and make fields. If the value has not changed from null, then that's how we know.
//   if(car.year == null || car.make == null) {
//     console.log('You need to enter in the make and year before continuing...');
//   } 
//   // The user filled out the fields. Let them know they're fine.
//   else {
//     console.log('Nice! You filled out everything.');
//   }
// }

// // The user enters in information about the car they want.
// car.make = 'Volkswagon';
// car.year = '2020';
// car.isDamaged = false;
// car.color = 'blue';

// let car2 = {
//   make: 'Honda',
//   year: null,
//   isDamaged: false
// }

// validateFields(car);
// validateFields(car2);

// console.log(car);

// let array = [1,2,3];


// // ---- Video Game object example ----

// let character = {
//   gun: 'mp5',
//   skin: 'battle pass tier 80 skin',
//   x: 12,
//   y: '0'
// };

// character.x = character.x + 1;

// character.skin = 'f2p skin';

// console.log(character);


// ------------ Functions -----------------

// let x = 9;
// console.log(9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 );

// const factorial = (myNumberToFactorial) => {
//   console.log(myNumberToFactorial);
//   let result = myNumberToFactorial;
//   for(let i = myNumberToFactorial; i > 1; i--) {
//     result = result * (i - 1);
//   }
//   console.log(result);
// };

// factorial(10);

// const sum = (number1, number2, number3) => {
//   // return number1 + number2 + number3;
//   console.log("Sum function called... the result is: ", )
//   return number1 + number2 + number3;
// };

// const difference = (num1, num2) => {
//   console.log(num1 - num2);
//   // return num1-num2;
// };

// const getDerivative = () => {
//   return; 
// };

// difference(sum(1,2,3), 5); 

// let mySum = sum(3, 4, 5);
// console.log(mySum);
// difference(2, 1);

// difference(sum(3,4,5), 5) * 2;

// let result = sum(3,4,5);
// result = difference(result, 5);
// result++;

// console.log(result);


// const isNewPasswordValid = (pwd) => {
//   if(pwd.length < 5) {
//     console.log(pwd + ' is an invalid password... not long enough');
//   } else {
//     console.log(pwd + ' is a valid password');
//   }
// };

// const myExample = ['example1', 'exaasdasdasd', 'exa', 'example1asdasd', 'exampleasdasd', 'exam1', 'examp1'];
// for(let i = 0; i < myExample.length; i++) {
//   isNewPasswordValid(myExample[i]);
// }