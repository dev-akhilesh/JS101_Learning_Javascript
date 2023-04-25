// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function.

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let input = ["MA", "SA", "I", "SCH", "OOL"]
let output = [];

let tolowercase = (word) => {
  let str = "";
  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < upper.length; k++) {
      if (word[j] == upper[k]) {
        str += lower[k]
      }
    }
  }
  return str;
}


for (let i = 0; i < input.length; i++) {
  let answer = tolowercase(input[i]);
  output.push(answer);
}
console.log(output)
