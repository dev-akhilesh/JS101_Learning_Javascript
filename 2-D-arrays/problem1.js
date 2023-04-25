let arr = [
  [3, 4, 5, 6],
  [6, 6, 2, 0],
  [9, 4, 6, 8],
  [0, 9, 2, 5]
];
let r = 4;
let c = 4;

// for (let i = 0; i < r; i++) {
//   console.log(arr[i][c - i - 1])

// }

// diagonal1
for (let i = 0; i < r; i++) {
  console.log(arr[i][i])

}
// diagonal1
for (let i = 0; i < r; i++) {
  console.log(arr[i][c-i-1])

}