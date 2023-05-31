// const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });

const div = (a, b) => a / b

test('dividir dois valores', () => {
  expect(div(6, 2)).toEqual(3);
})

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});