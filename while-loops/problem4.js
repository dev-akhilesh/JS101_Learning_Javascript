let x = 1;
let sum =0;
let count = 0;
while(x<=100){
  if(x%2==0){
    sum = sum + x;
    count = count + 1;
  }
  x++;
}

console.log(sum/count);