// task 1 : Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(arr);

let sumOfArray = arr.reduce((acc, item) => (acc += item));
let positiveNumber = arr.filter((item) => item > 0);

console.log(sumOfArray);
console.log(positiveNumber.length);

// task 2 : Знайти мінімальний елемент масиву та його порядковий номер.
let minNumber = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minNumber) minNumber = arr[i];
}

let minNumberIdx = arr.indexOf(minNumber);

console.log(minNumber);
console.log(minNumberIdx);

// task 3 :  Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNumber) maxNumber = arr[i];
}

let maxNumberIdx = arr.indexOf(maxNumber);

console.log(maxNumber);
console.log(maxNumberIdx);

// task 4 :  Визначити кількість негативних елементів.
let negativeNumber = arr.filter((item) => item < 0);
console.log(negativeNumber.length);

// task 5 :  Знайти кількість непарних позитивних елементів.
let oddPositiveNumber = arr.filter((item) => item % 2 !== 0 && item > 0);
console.log(oddPositiveNumber.length);

// task 6 :  Знайти кількість парних позитивних елементів.
let evenPositiveNumber = arr.filter((item) => item % 2 === 0 && item > 0);
console.log(evenPositiveNumber.length);

// task 7 : Знайти суму парних позитивних елементів.
let sumOfEvenPositiveNumber = evenPositiveNumber.reduce(
  (acc, item) => (acc += item)
);
console.log(sumOfEvenPositiveNumber);

// task 8 : Знайти суму непарних позитивних елементів.
let sumOfOddPositiveNumber = oddPositiveNumber.reduce(
  (acc, item) => (acc += item)
);
console.log(sumOfOddPositiveNumber);

// task 9 : Знайти добуток позитивних елементів.
let multOfPositiveNumber = positiveNumber.reduce((acc, item) => (acc *= item));
console.log(multOfPositiveNumber);

// task 10 : Знайти найбільший серед елементів масиву, остальні обнулити.
let arrOfMaxNumber = arr.fill(0, 0, 18).fill(0, 19);
console.log(arrOfMaxNumber);
