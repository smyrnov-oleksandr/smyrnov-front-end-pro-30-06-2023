// task 1: Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28

function closure() {
  let res = 0;
  return function sum(x) {
    res += x;
    console.log(res);
  };
}

let result = closure();
result(3);
result(5);
result(20);
result(40);
result(100);
