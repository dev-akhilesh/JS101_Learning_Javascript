// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30

let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
let obj = {};

for(let i=0;i<name.length;i++){
  obj[name[i]]=age[i];
}
// console.log(obj)
for(let j in obj){
  if(obj[j]>30){
    console.log(j)
  }
}
