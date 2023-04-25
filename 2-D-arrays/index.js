let arr = [
  ["a","b","c"],
  ["d","e","f"],
  ["g","h","i"]
]
let r=3;
let c=3
let bag="";
for(let i=0;i<r;i++){
  for(let j=c-1;c>=0;j--){
    bag+=arr[i][j]
  }
}
console.log(bag)