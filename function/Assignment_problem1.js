function addNumbers(num1,num2){
  sum = num1+num2;
  return sum; 
}

// let a = addNumbers(5,5);
// console.log(a)

let n1=2, n2=3, n3=5;
let sum1= addNumbers(n1,n2);
let final_result=addNumbers(sum1,n3)
console.log("The sum of three numbers is",final_result)