let students = [
  {name: 'Alice', grade: 90},
  {name: 'Bob', grade: 85},
  {name: 'Charlie', grade: 95}
];
let total = 0;
students.forEach(function(student) {
  total += student.grade;
});
let average = total / students.length;
console.log(average);  // Output: 90
