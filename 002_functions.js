//EASY
//1
const power = (num1, num2) =>
  num2 === 1 ? num1 : num1 * power(num1, num2 - 1);
// console.log(power(2, 5));

//2
//area of hexagon when side is given:
//3*sqrt(3)*a^2/2
const hexagonArea = (side) =>
  ((3 * Math.sqrt(3) * power(side, 2)) / 2).toFixed(2);
// console.log(hexagonArea(10));

//3
const countWords = (line) => line.split(" ").length;
// console.log(countWords("We are neoGrammers"));

//4
const minOf = (...nums) => nums.sort((a, b) => a - b)[0];
// console.log(minOf(2, 5, 20, 43, 42, 11));

//5
const maxOf = (...nums) => nums.sort((a, b) => a - b).pop();
// console.log(maxOf(1, 24, 31, 64, 5, 6, 7));

//6
const typeOfTriangle = (a1, a2, a3) =>
  a1 === 90 || a2 === 90 || a3 === 90
    ? "Right Angled"
    : a1 === a2 && a2 === a3
    ? "Equilateral"
    : a1 === a2 || a2 === a3 || a1 === a3
    ? "Isoceles"
    : "Scalene";

// console.log(typeOfTriangle(30, 60, 90));
// console.log(typeOfTriangle(30, 30, 120));
// console.log(typeOfTriangle(60, 60, 60));

//MEDIUM
//1
const arrayLength = (arr) => arr.length;
// console.log(arrayLength([1, 5, 3, 7, 8]));

//2
const indexOf = (arr, ele) => arr.indexOf(ele);
// console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

//3
const replace = (arr, oldEle, newEle) =>
  arr.map((ele) => (ele === oldEle ? newEle : ele));
// console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

//4
const mergeArray = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArray([1, 3, 5], [2, 4, 6]));

//5
const charAt = (str, index) => str[index];
// console.log(charAt("neoGcamp", 4));

//6
const minDate = (date1, date2) =>
  date1.split("/").reverse().join("") > date2.split("/").reverse().join("")
    ? date2
    : date1;
// console.log(minDate("02/05/2021", "24/01/2021"));

//ADVANCED
//1
const encodeString = (str, offset) => {
  strNum = str.split("").map((ele) => ele.charCodeAt(0));
  strNum = strNum.map((ele) => ele + offset);
  strNum = strNum.map((ele) => String.fromCharCode(ele));
  strNum = strNum.join("");
  return strNum;
};
// console.log(encodeString("neogcamp", 2));

const encodeStringV2 = (str, offset) =>
  str
    .split("")
    .map((ele) => ele.charCodeAt(0))
    .map((ele) => ele + offset)
    .map((ele) => String.fromCharCode(ele))
    .join("");
// console.log(encodeStringV2("neogcamp", 2));

//2
const toSentenceCase = (line) =>
  line
    .split(" ")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .join(" ");
// console.log(toSentenceCase("we are neoGrammers"));

//3
const sortArray = (arr) => arr.sort((a, b) => a - b);
// console.log(sortArray([100, 83, 32, 9, 45, 61]));

//4
const reverseCharactersOfWord = (line) =>
  line
    .split(" ")
    .map((ele) => ele.split("").reverse().join(""))
    .join(" ");
// console.log(reverseCharactersOfWord("we are neoGrammers"));
