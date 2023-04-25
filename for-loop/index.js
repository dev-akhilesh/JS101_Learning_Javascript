let sum=0;
let count=0;

for(let i=1;i<=50;i++){
  if(i%2==0){
    sum = sum + i;
    count = count+1;
  }
}
console.log(sum/count)