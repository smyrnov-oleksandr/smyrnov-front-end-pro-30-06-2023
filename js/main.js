// task 1: Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

arrayOfTypes = [
  22,
  'hello',
  true,
  { name: 'Olek' },
  [1, 2, 3, 4, 5, 6, 7],
  48,
  0,
  -33,
  null,
  undefined,
  10,
  300,
];

function arithmeticMean(arr) {
  let arrayOfNumbers = arr.filter((item) => typeof item === 'number');
  let sumOfArrayNumbers = arrayOfNumbers.reduce((acc, item) => (acc += item));

  return +(sumOfArrayNumbers / arrayOfNumbers.length).toFixed(2);
}

console.log(arithmeticMean(arrayOfTypes));

// task 2: Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  x = +prompt('task 2: enter a number:');
  y = +prompt('task 2: enter a number:');
  znak = prompt('task 2: enter operator:');

  switch (znak) {
    case '+':
      return alert(x + y);
    case '-':
      return alert(x - y);
    case '*':
      return alert(x * y);
    case '/':
      return alert(x / y);
    case '%':
      return alert(x % y);
    case '^':
      return alert(x ** y);
  }
  return alert('Error');
}

doMath();

// task 3: Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// function nestedArrays(rows, columns, element) {
//   rows = +prompt('task 3: enter length:');
//   columns = +prompt('task 3: enter length');
//   element = prompt('task 3: enter element of array:');
//   let array = Array(rows)
//     .fill()
//     .map(() => Array(columns).fill(element));
//   console.log(array);
//   return array;
// }

// nestedArrays();

function nestedArrays() {
  const array = [];
  const rows = +prompt('task 3: Enter length of 1-st array:');

  for (let i = 0; i < rows; i++) {
    const nestedArr = [];
    const columns = +prompt(`task 3: Enter length of nested array №${i + 1}:`);

    for (let k = 0; k < columns; k++) {
      const elements = prompt(
        `task 3: Enter element №${k + 1} of array №${i + 1}:`
      );
      nestedArr.push(elements);
    }

    array.push(nestedArr);
  }

  return array;
}

const arr = nestedArrays();

console.log(arr);

// task 4 : Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const str = 'hello hello hello world world world';
const delElem = ['l', 'd', 'w'];

function removeElem(str, delElem) {
  for (let i = 0; i < delElem.length; i++) {
    str = str.split(delElem[i]).join('');
  }
  return str;
}

const result = removeElem(str, delElem);
console.log(result);
