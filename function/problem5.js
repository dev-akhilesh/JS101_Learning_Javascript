
function space_replace(str){
// let str="I am Batman";
let bag=""
for(let i=0;i<str.length;i++){

  if(str[i]==" "){
    bag+="-";
  }
  else(
    bag+=str[i]
  )
}
console.log(bag);
}

space_replace("I am Batman")
space_replace("I am Vengeance")
space_replace("I am human")