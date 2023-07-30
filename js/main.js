// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [22, 11, 3, 0, 1, 'hi', '33', 0];
console.log(array);

function removeElement(array, elem) {
  let res = array.filter((item) => item !== elem);
  console.log(res);
  return res;
}

removeElement(array, 0);
