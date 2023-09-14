/**
 * Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:
 * <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>

  <ul>
    <li>1</li>
    <li>2</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
    <li>3</li>
  </ul>
 */
const out = document.querySelector('.out');
let array = [1, 2, [1.1, 1.2, 1.3], 3, [3.1, 3.2, 3.3, 3.4], 4, [4.1, 4.2]];

const generateList = (array) => {
  return (out.innerHTML = `<ul>${array
    .map((elem) => {
      return `<li>${Array.isArray(elem) ? generateList(elem) : elem}</li>`;
    })
    .join('')}</ul>`);
};

generateList(array);
