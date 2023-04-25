function isOdd(num)
{
  if(num%2!=0){
    return true
  }
  else{
    return false
  }
  // console.log(flag)
}

// ISOdd(5)

for(let i=0;i<=100;i++){
  if(isOdd(i)){
    console.log(i,"is odd")
  }
  else{
    console.log(i,"is even")
  }
}
