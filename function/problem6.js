// function evenodd(num){
//   if(num%2==0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// let count=0;
// for (i=0;i<=15;i++){
//   let ans = evenodd(i);
//   if(ans==true){
//     count++;
//   }
// }
// console.log(count)

function evenodd(num){
  if(num%2!=0){
    return true
  }
  else{
    return false;
  }
}

for (i=1;i<=15;i++){
  let ans = evenodd(i);
  if(ans==true){
    console.log(i);
  }
}
