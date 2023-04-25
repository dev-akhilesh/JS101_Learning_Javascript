let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
function slice(start,end){
  let bag = [];
  for(let i=start;i<animals.length;i++){
    if(i==end){
      break;
    }
    bag.push(animals[i]);
  }
  return bag
}
console.log(slice(1,5))