let numbers = [1, 2, 3, 4, 5];
let max = -Infinity;
for (let number of numbers) {
  if (number > max) {
    max = number;
  }
}
console.log(max);  // Output: 5
