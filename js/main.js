// task: Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
const input = document.querySelector('input');
const message = document.querySelector('.message');

input.addEventListener('focus', () => {
  message.style.left = 0;
});
input.addEventListener('focusout', () => {
  message.style.left = '-100%';
});
