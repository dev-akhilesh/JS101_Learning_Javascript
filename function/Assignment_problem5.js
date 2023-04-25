function tolower(char)
{
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<upper.length;i++){
      if(char==upper[i]){
        return lower[i]
      }
    }
    return char
}
// console.log(tolower("A"))

function wordlower(word){
  let bag="";
  for(let i=0;i<word.length;i++){
    let con = tolower(word[i]);
    bag+=con;
  }
  return bag
}
// console.log(wordlower("AKHILESH TAKAWALE"))

let arr=["MA", "SA", "I", "SCH", "OOL"]
function arrlower(arr){
  let lower_arr=[];
  for(let i=0;i<arr.length;i++){
    lower_arr.push((wordlower(arr[i])))
  }
  return lower_arr
}

console.log(arrlower(arr))