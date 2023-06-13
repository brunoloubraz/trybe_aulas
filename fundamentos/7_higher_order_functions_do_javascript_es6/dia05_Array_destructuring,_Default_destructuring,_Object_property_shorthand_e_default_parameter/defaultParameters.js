const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome pessoa usuária!

// ------

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));