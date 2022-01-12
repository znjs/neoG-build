/**
 * EASY
 */

//1
const addNums = (nums) => {
  if (nums.length == undefined) return nums;
  else {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
};
// console.log(addNums([1, 2, 3, 4]));
// console.log(addNums(3));

//2
const oddEven = (num) => (num % 2 == 0 ? "Even" : "Odd");
// console.log(oddEven(2));
// console.log(oddEven(3));

//3
const greater = (num1, num2) => (num1 > num2 ? num1 : num2);
// console.log(greater(2, 3));
// console.log(greater(21, 19));

//4
const greaterOfThree = (num1, num2, num3) =>
  num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
// console.log(greaterOfThree(1, 2, 3));
// console.log(greaterOfThree(4, 2, 3));
// console.log(greaterOfThree(1, 6, 3));

//5
const minOfThree = (num1, num2, num3) =>
  num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
// console.log(minOfThree(1, 2, 3));
// console.log(minOfThree(4, 2, 3));
// console.log(minOfThree(1, 6, 3));

//6
const numberOfDays = (month) => {
  if (month < 1 || month > 12) return "Month number out of bound";
  else {
    if (month % 2 === 1) {
      return 31;
    } else if (month === 2) {
      return "Depends if this is a leap year might be 28 or 29";
    } else return 30;
  }
};
// console.log(numberOfDays(3));
// console.log(numberOfDays(6));
// console.log(numberOfDays(2));
// console.log(numberOfDays(22));

//INTERMIDIATE
// 1
const fizzBuzz = () => {
  const out = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) out.push("FizzBuzz");
    else if (i % 5 == 0) out.push("Buzz");
    else if (i % 3 == 0) out.push("Fizz");
    else out.push(i);
  }
  console.log(out.join(","));
};
// fizzBuzz();

//2
//Takes number of lines as input
const starPattern = (num) => {
  let i = 0;
  str = "*";
  while (i < num) {
    console.log(str);
    str += "*";
    i++;
  }
};
// starPattern(5);

//3
const mutiplicationTable12 = (num) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num}x${i}=${num * i}`);
  }
};
// mutiplicationTable12(4);

//4
const fibonachi = (num) => {
  let prev = 1;
  let current = 0;
  while (num--) {
    console.log(current);
    let tmp = current;
    current += prev;
    prev = tmp;
  }
};
// fibonachi(8);
const fibonachiV2 = (num, start = 0, next = 1) => {
  if (!num) return "";
  return `${start}, ` + fibonachiV2(num - 1, next, start + next);
};
// console.log(fibonachiV2(8));

const fibonachiV3 = (num, start = 0, next = 1) =>
  num ? `${start}, ` + fibonachiV3(num - 1, next, start + next) : "";
// console.log(fibonachiV3(8));

//5
const factorial = (num) => {
  if (num == 1) return 1;
  else return num * factorial(num - 1);
};
// console.log(factorial(5));

const factorialV2 = (num) => (num === 1 ? 1 : num * factorial(num - 1));
// console.log(factorialV2(5));

//6
const checkPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return "Not Prime";
  }
  return "Is a Prime";
};
// console.log(checkPrime(40));
// console.log(checkPrime(41));

//7
//0-Sunday,1-Monday,2-Tuesday,....,6-Saturday
const checkDayOfWeek = (day) =>
  day === 0 || day === 6 ? "Weekend" : "Weekday";
// console.log(checkDayOfWeek(0));
// console.log(checkDayOfWeek(4));
