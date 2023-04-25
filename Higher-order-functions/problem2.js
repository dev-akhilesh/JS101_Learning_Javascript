Input = [2, 3, 4, 6, 7];
// Output = [32, 243, 1024, 7776, 16807]

let Output = Input.map(function(element,index){
  return element**5;
})
console.log(Output);