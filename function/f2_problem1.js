let elements = ['Fire', 'Air', 'Water'];
function array_join(elements,add){
  let bag="";
  for(let i=0;i<elements.length;i++){
    bag+=elements[i]+add
  }
  return bag
}

console.log(array_join(elements,"-"))