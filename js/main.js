/*task: Дано 3 блоки: 
В лівій частині сторінки - перелік категорій.
При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
Клік на товар - інформацію про товар у правому блоці.
В інформації товару - кнопка “купити”.
При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).
*/

/*
Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
Реалізувати можливість видалення замовлення зі списку.
*/
let categoriesOut = document.querySelector('.categories');
let goodsOut = document.querySelector('.goods');
let infoOut = document.querySelector('.info');
let cartOut = document.querySelector('.cart');
let cartImg = document.querySelector('.cart__img');
let cartCount = document.querySelector('.count');

function showCartCount() {
  if (localStorage.length !== 0) {
    cartCount.textContent = localStorage.length;
  } else {
    cartCount.textContent = 0;
  }
}

function showCategories(arr) {
  arr = [...new Set(data.map((item) => item['category']))];
  let ul = document.createElement('ul');

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.classList.add('categories__item');
    li.setAttribute('data-category', arr[i]);
    li.textContent = arr[i];
    ul.append(li);
  }
  categoriesOut.append(ul);
  return arr;
}

function showGoods(e) {
  cleanOut(goodsOut);
  let category = e.target.dataset['category'];
  const goods = data.filter((item) => item['category'] === category);

  renderGoods(goods);

  return goods;
}

function renderGoods(arr) {
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement('div');
    div.classList.add('goods__item');
    let title = document.createElement('h2');
    title.classList.add('goods__title');
    title.textContent = arr[i]['name'];
    div.append(title);
    let img = document.createElement('img');
    img.classList.add('goods__img');
    img.src = arr[i]['img'];
    div.append(img);
    let price = document.createElement('p');
    price.classList.add('goods__price');
    price.textContent = `${arr[i]['price']} ${arr[i]['currency']}`;
    div.append(price);
    let quantity = document.createElement('p');
    quantity.classList.add('godds__price');
    quantity.textContent = `quantity: ${arr[i]['quantity']}`;
    div.append(quantity);
    let btnInfo = document.createElement('button');
    btnInfo.classList.add('btn-info');
    btnInfo.setAttribute('data-id', arr[i]['id']);
    btnInfo.textContent = 'i';
    div.append(btnInfo);
    let btnToCart = document.createElement('button');
    btnToCart.classList.add('to-cart');
    btnToCart.setAttribute('data-id', arr[i]['id']);
    btnToCart.textContent = 'To cart';
    div.append(btnToCart);
    goodsOut.append(div);
  }
  return arr;
}

function showInfo(e) {
  if (e.target.classList.contains('btn-info')) {
    cleanOut(infoOut);
    renderInfo(data, e.target);
  }
}

function renderInfo(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item.dataset['id'] === arr[i]['id']) {
      infoOut.style.display = 'flex';
      let img = document.createElement('img');
      img.classList.add('info__img');
      img.src = arr[i]['img'];
      infoOut.append(img);
      let title = document.createElement('h2');
      title.textContent = arr[i]['name'];
      infoOut.append(title);
      let desc = document.createElement('p');
      desc.classList.add('info__desc');
      desc.textContent = arr[i]['description'];
      infoOut.append(desc);
      let price = document.createElement('p');
      price.classList.add('info__price');
      price.textContent = `${arr[i]['price']} ${arr[i]['currency']}`;
      infoOut.append(price);
      let buyBtn = document.createElement('button');
      buyBtn.classList.add('buy');
      buyBtn.textContent = 'Buy';
      infoOut.append(buyBtn);
    }
  }
  return arr;
}

function showMessage(e) {
  if (e.target.classList.contains('buy')) {
    let message = document.createElement('p');
    message.classList.add('message');
    message.textContent = 'successfully';
    document.body.append(message);

    setTimeout(function () {
      message.parentNode.removeChild(message);
      infoOut.style.display = 'none';
      cleanOut(goodsOut);
    }, 3000);
  }
}

function cleanOut(elem) {
  elem.innerHTML = '';
}

function addToCart(e) {
  if (e.target.classList.contains('to-cart')) {
    let articul = e.target.dataset['id'];
    data.forEach((item) => {
      for (let key in item) {
        if (articul === item[key]) {
          item['count'] = 1;
          let date = new Date();
          item['date'] = `${date.getDate()}.${
            date.getMonth() + 1
          }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          localStorage.setItem(articul, JSON.stringify(item));
        }
      }
    });
    showCartCount();
  }
}

function showCart() {
  categoriesOut.style.display = 'none';
  goodsOut.style.display = 'none';
  infoOut.style.display = 'none';
  cleanOut(cartOut);
  let keys = Object.keys(localStorage);
  let table = document.createElement('table');
  renderCart(keys, table);

  cartOut.append(table);
  cartOut.style.display = 'block';
  table.addEventListener('click', showInfo);
  table.addEventListener('click', deleteItem);
  table.addEventListener('click', plusItem);
  table.addEventListener('click', minusItem);

  function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
      let keys = Object.keys(localStorage);
      for (let key of keys) {
        if (e.target.dataset['id'] === key) {
          localStorage.removeItem(key);
        }
      }
      showCartCount();
      showCart();
    }
  }

  function plusItem(e) {
    if (e.target.classList.contains('plus')) {
      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        let item = JSON.parse(localStorage[key]);
        if (e.target.dataset['id'] === item['id']) {
          item['count']++;
          localStorage.setItem(item['id'], JSON.stringify(item));
        }
      }
      showCart();
    }
  }

  function minusItem(e) {
    if (e.target.classList.contains('minus')) {
      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        let item = JSON.parse(localStorage[key]);
        if (e.target.dataset['id'] === item['id']) {
          if (item['count'] - 1 !== 0) {
            item['count']--;
            localStorage.setItem(item['id'], JSON.stringify(item));
          } else {
            localStorage.removeItem(key);
          }
        }
      }
      showCartCount();
      showCart();
    }
  }

  return table;
}

function renderCart(arr, item) {
  for (let key of arr) {
    let goodsInCart = arr[key];
    goodsInCart = JSON.parse(localStorage.getItem(key));
    //Робимо рядрк
    const tr = document.createElement('tr');
    //Робимо кнопку "видалити"
    let td = document.createElement('td');
    let button = document.createElement('button');
    button.classList.add('delete');
    button.textContent = 'x';
    button.setAttribute('data-id', goodsInCart['id']);
    td.append(button);
    tr.append(td);
    //Робимо картинку
    td = document.createElement('td');
    let img = document.createElement('img');
    img.src = goodsInCart['img'];
    td.append(img);
    tr.append(td);
    //Робимо інфо
    td = document.createElement('td');
    let btnInfo = document.createElement('button');
    btnInfo.classList.add('btn-info');
    btnInfo.style.position = 'static';
    btnInfo.textContent = 'i';
    btnInfo.setAttribute('data-id', goodsInCart['id']);
    td.append(btnInfo);
    tr.append(td);
    //Робимо назву
    td = document.createElement('td');
    let h4 = document.createElement('h4');
    h4.textContent = goodsInCart['name'];
    td.append(h4);
    tr.append(td);
    //Робимо кнопку "мінус"
    td = document.createElement('td');
    button = document.createElement('button');
    button.classList.add('minus');
    button.textContent = '-';
    button.setAttribute('data-id', goodsInCart['id']);
    td.append(button);
    tr.append(td);
    //Робимо кількість
    td = document.createElement('td');
    let span = document.createElement('span');
    span.textContent = goodsInCart['count'];
    td.append(span);
    tr.append(td);
    //Робимо кнопку "додати"
    td = document.createElement('td');
    button = document.createElement('button');
    button.classList.add('plus');
    button.textContent = '+';
    button.setAttribute('data-id', goodsInCart['id']);
    td.append(button);
    tr.append(td);
    //Робимо дату
    td = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = goodsInCart['date'];
    td.append(p);
    tr.append(td);
    //Робимо суму
    td = document.createElement('td');
    span = document.createElement('span');
    span.textContent =
      goodsInCart['count'] * goodsInCart['price'] +
      ' ' +
      goodsInCart['currency'];
    td.append(span);
    tr.append(td);
    item.append(tr); //Додаємо рядок до таблиці
  }
  return arr;
}

categoriesOut.addEventListener('click', showGoods);
goodsOut.addEventListener('click', showInfo);
goodsOut.addEventListener('click', addToCart);
infoOut.addEventListener('click', showMessage);
cartImg.addEventListener('click', showCart);

showCartCount();
showCategories(data);
