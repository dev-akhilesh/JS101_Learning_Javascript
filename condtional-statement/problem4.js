let stored_user= "xyz@gmail.com";
let stored_pass= "xyz123";
let input_user = "xyzgmail.com";
let input_pass= "xyz123";

if(stored_user==input_user){
  if(stored_pass==input_pass){
    console.log("You are logged in")
  } else{
    console.log("Wrong Password")
  }
} else{
  console.log("Wrong Username")
}

