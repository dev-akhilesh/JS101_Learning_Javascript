let arr = [3,4,5,6,7];
// Output ==> 3 - 5 - 7
let bag="";
arr.forEach(function(element,index){
  if(element%2!=0){
    bag += element;
  }
  else{
   bag+= " "+"-"+" ";
  }
  
})
console.log(bag);
