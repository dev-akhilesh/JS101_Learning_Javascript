let str = 'Mozilla';
function substring(start,end){
  let bag = [];
  for(let i=start;i<str.length;i++){
    if(i==end){
      break;
    }
    bag+=str[i];
  }
  return bag
}
console.log(substring(1,3))