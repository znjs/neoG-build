//NUMBERS
//1
const sumOfTwoNumbers = (num1, num2) => num1 + num2;
// console.log(sumOfTwoNumbers(2, 3));

//2
const simpleInterest = (principle, interest, time) =>
  (principle * interest * time) / 100;
// console.log(simpleInterest(100, 6, 2));

//3
const kineticEnergy = (mass, vol) => 0.5 * mass * Math.pow(vol, 2);
// console.log(kineticEnergy(10, 10));

//4
const fahrenheitToCelcius = (temp) => (((temp - 32) * 5) / 9).toFixed(5);
// console.log(fahrenheitToCelcius(56));

//5
const calculateEverythingOfCube = (side) => {
  console.log(`Area: ${side * side}`);
  console.log(`Perimeter: ${4 * side}`);
  console.log(`Surface Area: ${6 * side * side}`);
  console.log(`Volume: ${side * side * side}`);
};
// calculateEverythingOfCube(4);

//6
const profitOrLoss = (cp, sp) =>
  cp > sp ? `${cp - sp} Loss` : `${sp - cp} Profit`;
// console.log(profitOrLoss(1500, 2000));
// console.log(profitOrLoss(3125, 1125));

//7
const sumOfNumbers = (num) => (num === 1 ? 1 : num + sumOfNumbers(num - 1));
// console.log(sumOfNumbers(100));

//8
const decendingOddNumbers = (num) => {
  let i = 1;
  let arr = [];
  while (num--) {
    arr.push(i);
    i += 2;
  }
  arr.reverse().map((ele) => console.log(ele));
};
// decendingOddNumbers(4);

//9
const sumOfDigits = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
// console.log(sumOfDigits(1234));

//10
const reverseANumber = (num) =>
  Number(String(num).split("").reverse().join(""));
// console.log(reverseANumber(32243));

//11
const cyclicRotate = (arr, num) => {
  arr = String(arr).split("");
  while (num--) {
    arr.push(arr.shift());
  }
  return Number(arr.join(""));
};
// console.log(cyclicRotate(1234, 2));

//12
const decimalToBinary = (num) => {};

console.log(decimalToBinary(5));
