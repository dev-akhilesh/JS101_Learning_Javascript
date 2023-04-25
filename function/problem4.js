function check_char(char){
let lower="abcdefghijklmnopqrstuvwxyz";

for(let i=0;i<lower.length;i++){
  if(char===lower[i]){
    console.log(char,"is smallcase");
    break;
  }

}
}
check_char("z")
check_char("T")
check_char("t")
check_char("b")




// trying using else

// check if the char is a small case or not.
// If smallcase print "small case"
// if not smallcase print "not small case"


// function check_char(char){
// let lower="abcdefghijklmnopqrstuvwxyz";

// for(let i=0;i<lower.length;i++){
//   if(char===lower[i]){
//     console.log(char,"is smallcase");
//     break;
//   }
//   else{
//     console.log(char,"is not smallcase");
//     break;
//   }
// }
// }
// check_char("z")
// check_char("T")
// check_char("t")
// check_char("b")