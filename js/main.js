// task: Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
function createTable() {
  let table = document.createElement('table');
  let num = 1;
  for (let i = 1; i <= 10; i++) {
    let tr = document.createElement('tr');
    for (let k = 1; k <= 10; k++) {
      let td = document.createElement('td');
      td.textContent = num;
      tr.append(td);
      num++;
    }
    table.append(tr);
  }

  document.body.append(table);
}

document.addEventListener('DOMContentLoaded', createTable());
