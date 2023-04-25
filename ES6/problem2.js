// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// Do this Problem using Arrow Function

let arr = [2, 3, 4, 6, 7, 8, 1, 2];
let avg =0;;

let sum=0;
arr.forEach((element,index)=>{
  sum+=element;
  return sum
})

if(arr.length==0){
  console.log("Average is",avg);
}
else{
  avg=sum/arr.length;
  console.log("Average is",avg);
}
