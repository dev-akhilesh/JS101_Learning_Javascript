let arr1=["Rice", "Dal", "Salt"];
let arr2=[2, 3, 1];
let arr3=[60, 50, 20];

let arr_data=[];
for(let i=0;i<arr1.length;i++){
  let obj={};
  obj.name=arr1[i];
  obj.quantity=arr2[i];
  obj.price=arr3[i];
  arr_data.push(obj);
}
// console.log(arr_data)
let obj={
  data:arr_data,
  total:function(){
    let sum=0;
    for(let i=0;i<this.data.length;i++){
      sum+=this.data[i].price*this.data[i]["quantity"];
    }
    console.log(sum)
  }
}
obj.total()
