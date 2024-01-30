let student = {math: 90, english: 85, science: 95};
for (let subject in student) {
  console.log(subject + ': ' + student[subject]);
}
