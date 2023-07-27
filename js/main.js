// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let randomString = '';

  for (let i = 0; i < length; i++) {
    let randomPosition = Math.floor(Math.random() * characters.length);
    randomString += characters.slice(randomPosition, randomPosition + 1);
  }

  return randomString;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
