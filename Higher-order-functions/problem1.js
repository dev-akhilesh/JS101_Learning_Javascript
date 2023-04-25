let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let new_arr = arr.filter(function(element,index){
  if(index%2!=0){
    return element;
  }
})

// let sum=0;
// for(let i=0;i<x.length;i++){
//   sum+=x[i];
// }
// let avg = sum/x.length;
// console.log(avg);

let sum = 0;
new_arr.forEach(function(element, index) {
  sum += element;
});
console.log(sum/new_arr.length);