/**
 *task: Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
 */

const URL = 'https://jsonplaceholder.typicode.com/';
const form = document.querySelector('.form');
const input = document.querySelector('#input');
const out = document.querySelector('.out');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputId = +input.value;
  if (inputId >= 1 && inputId <= 100) {
    getPosts(inputId);
  }
});

out.addEventListener('click', (e) => {
  if (e.target.classList.contains('show-comments')) {
    const postId = e.target.dataset['id'];
    getComments(postId);
  }
});

async function getPosts(postId) {
  const response = await fetch(`${URL}posts/${postId}`);
  if (!response.ok) {
    const message = 'Error: ' + response.status;
    throw new Error(message);
  }
  const result = await response.json();
  renderPost(result, out);
  return result;
}

async function getComments(id) {
  const response = await fetch(`${URL}comments?postId=${id}`);
  if (!response.ok) {
    const message = 'Error: ' + response.status;
    throw new Error(message);
  }
  const result = await response.json();
  renderComments(result, document.querySelector('.comments'));
  return result;
}

function renderPost(data, outDiv) {
  outDiv.innerHTML = `
  <div class="post-item">
    <h2 class="post-item__title">${data.title}</h2>
    <p class="post-item__body">${data.body}</p>
    <div class="comments" id="comments">
      <button id="showComments" data-id="${data.id}" class="show-comments">
        Show Comments
      </button>
    </div>
  </div>
  `;
  return outDiv;
}

function renderComments(data, outDiv) {
  let out = '';
  data.forEach((comment) => {
    out += `<div class="comments-item">`;
    out += `<h4>${comment.name}</h4>`;
    out += `<p>${comment.email}</p>`;
    out += `<p>${comment.body}</p>`;
    out += `</div>`;
  });
  outDiv.innerHTML = out;
  return outDiv;
}
