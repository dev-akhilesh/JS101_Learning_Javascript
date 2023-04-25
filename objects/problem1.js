let people=["Ram","Sham","Raju","Ramesh","Ram","Suresh","Raju"];
let unique_people=[];
for(let i=0;i<=people.length-1;i++){
  let key=people[i];
  unique_people[key]=1;
}
console.log(unique_people)