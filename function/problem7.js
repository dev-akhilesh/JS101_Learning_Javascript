let s="naman"
function reverse(str){
  let new_str="";
  for(let i=str.length-1;i>=0;i--){
    new_str+=str[i]    
  }
  console.log(new_str)
  return new_str
}

let ans= reverse(s)
if(s==ans){
  console.log(s,"is Palindrome")
}
else{
  console.log(s,"is Not Palindrome")
}

