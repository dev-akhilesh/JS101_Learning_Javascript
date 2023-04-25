let arr = [1, 2, 3];
function include(num){
  flag=false
  for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
      flag=true;
      break;
    }
  }
  return flag
}
console.log(include(5))