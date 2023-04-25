function change_case(char)
{
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<upper.length,lower.length;i++){
    if(char==upper[i]){
      return lower[i]
    }
    else if(char==lower[i]){
      return upper[i]
    }
  }
}

function string_change(str){
  let bag="";
  for(let i=0;i<str.length;i++){
    a=change_case(str[i]);
    bag+=a;
  }
  console.log(bag)
}

string_change("Test")