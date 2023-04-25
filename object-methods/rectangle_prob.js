dlet rectangle={
  length : 10,
  width : 20,
  area : function(){
    console.log(area=this.length*this.width);

  },
  perimeter : function(){
    console.log(perimeter=2*(this.length+this.width));
  } 
}

rectangle.area();
rectangle.perimeter();