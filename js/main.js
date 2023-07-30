// const fibonacci = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   let res = fibonacci(n - 1) + fibonacci(n - 2);
//   console.log(res);
//   return res;
// };

// fibonacci(5);

const fib = [0, 1]; // Initialize array!
let fibNum = 30;
let out = document.querySelector('p');
let res = '';
for (let i = 2; i <= fibNum; i++) {
  for (let k = 0; k <= i; k++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  res += fib[i];
  res += '\n';
}

out.innerText = res;
