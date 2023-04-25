let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

function lastIndex(arr,search){
  let index=-1;
  for(let i=0;i<animals.length;i++){
    if(animals[i]==search){
      index=i
    }
  }
  return index
}
console.log(lastIndex(animals,'Dodo'))