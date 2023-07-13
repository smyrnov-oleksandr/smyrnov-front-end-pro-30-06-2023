let mathFunc = prompt(
  'How do you want to calculate (write "add","sub","mult or "div":'
);
let num1 = +prompt('Write your num1:');
let num2 = +prompt('Write your num2:');

switch (mathFunc) {
  case 'add':
    alert(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'sub':
    alert(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 'mult':
    alert(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 'div':
    alert(`${num1} / ${num2} = ${num1 / num2}`);
    break;
}
