let arr=[1,2,3,4,5,6,7,8,9,10];
function sum(arr){
  let sum=0;
  
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
return sum;
}

let average = sum(arr)/arr.length
if(arr.length==0){
    average=0;
  }

console.log(average)