let arr = prompt('Enter the element of array with comma:').split(','); //Просимо користувача ввести елементи масиву
alert(`Array is: ${arr}
Array length is: ${arr.length}`);
let num = [];
let str = [];
for (let i = 0; i < arr.length; i++) {
  // Якщо елемент масиву число-додаєм в масив чиселбякщо ні-в масив рядків
  if (!+arr[i]) {
    str.push(arr[i]);
  } else {
    num.push(arr[i]);
  }
}

// Перевіряємо чи не пусті масиви
if (num.lenght == 0) {
  let sortStr = str.sort();
  alert(`Sorted array is : ${sortStr}`);
  let spliceSortStr = sortStr.splice(2, 3);
  // Виводимо результат
  alert(
    `Array after deleting elements from index 2 to 4(including) : ${sortStr}`
  );
} else if (str.length == 0) {
  let sortNum = num.sort((a, b) => a - b);
  alert(`Sorted array is : ${sortNum}`);
  let spliceSortNum = sortNum.splice(2, 3);
  // Виводимо результат
  alert(
    `Array after deleting elements from index 2 to 4(including) : ${sortNum}`
  );
} else {
  let sortStr = str.sort();
  let sortNum = num.sort((a, b) => a - b);
  let sortArr = [...sortStr, ...sortNum];
  alert(`Sorted array is : ${sortArr}`);
  let spliceArr = sortArr.splice(2, 3);
  // Виводимо результат
  alert(
    `Array after deleting elements from index 2 to 4(including) : ${sortArr}`
  );
}
