let data=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

function calculate_marks(arr_marks){
  let sum=0;
  for(let i=0;i<arr_marks.length;i++){
    sum+=arr_marks[i];
  }
  return sum
}

function calculate_highest(info){
  let grade=info.grade;
  let highest_marks= -Infinity;
  let name;
  for(let i=0;i<info.students.length;i++){
    let arr_marks=info.students[i].marks;
    let total_marks=calculate_marks(arr_marks);
    if(total_marks>highest_marks){
      highest_marks=total_marks;
      name = info.students[i].name;
    }  
  }
  console.log(grade +"-"+ name+ "-"+highest_marks)
}

for(let i=0;i<data.length;i++){
  calculate_highest(data[i])
}
// calculate_highest(data[0])