


  
let details = {
  
  arr: [],
  
  add:function(name,phy,math,eng) {
    let obj={};
    obj.name=name;
    obj.phy=phy;
    obj.eng=eng;
    obj.math=math;
    this.arr.push(obj);
    // console.log(this.arr)     
  },
  
  lowest: function(){
    let min = Infinity;
    let min_student;
    for(let i=0;i<this.arr.length;i++){
      let total=this.arr[i].phy+this.arr[i].eng+this.arr[i].math;
      if(total<min){
        min=total;
        min_student=this.arr[i].name
      }
    }
    console.log(min_student,min)
  }, 

  highest: function(){
    let max = -Infinity;
    let max_student;
    for(let i=0;i<this.arr.length;i++){
      let total=this.arr[i].phy+this.arr[i].eng+this.arr[i].math;
      if(total>max){
        max=total;
        max_student=this.arr[i].name
      }
    }
    console.log(max_student,max)
  }
  
}

details.add("Aman", 23, 45, 65);
details.add("Chunnu", 34, 46, 33);
details.add("Munnu", 22, 45, 77);
// console.log(details.arr)
details.lowest()
details.highest()