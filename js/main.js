function buildTriangle(rows) {
  let result = [];
  for (let row = 0; row < rows; row++) {
    let rowData = [];
    for (let col = 0; col <= row; col++) {
      rowData.push(pascalTriangle(row, col));
    }
    result.push(rowData);
  }
  return result;
}

function pascalTriangle(row, col) {
  if (col === 0) {
    return 1;
  } else if (row === 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}
console.log(buildTriangle(5).join('\n'));
