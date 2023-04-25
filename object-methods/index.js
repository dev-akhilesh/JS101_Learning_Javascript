let details = {
  name:"Ram",
  age:39,
  hobbies:["coding","reading","biking"],
  print: function(){
    console.log("Name - ",this.name);
    console.log("Age",this.age);
    console.log("My hobbies are ",this.hobbies.join())
  }
}
details.print()