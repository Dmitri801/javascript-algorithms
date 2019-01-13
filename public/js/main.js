// BIG O NOTATION

// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// Most Common
const sumAll = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Mathmatical Solution
const addUpTo = n => {
  return (n * (n + 1)) / 2;
};

// Test Speed of functions
let t1 = performance.now();
// addUpTo(1000000000);
sumAll(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// console.log(addUpTo(3));
// console.log(sumAll(3));
