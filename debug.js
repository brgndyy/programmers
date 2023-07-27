function factorial(num) {
  if (num === 0) {
    return 1;
  }
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(7));

let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1));
