/*task: Дано 3 блоки: 
В лівій частині сторінки - перелік категорій.
При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
Клік на товар - інформацію про товар у правому блоці.
В інформації товару - кнопка “купити”.
При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).
*/

const data = [
  {
    id: 'aa11',
    name: 'apple',
    category: 'fruits',
    img: 'img/apple.png',
    price: 40,
    quantity: 2,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'bb22',
    name: 'banana',
    category: 'fruits',
    img: 'img/banana.png',
    price: 50,
    quantity: 3,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'cc33',
    name: 'beer',
    category: 'drinks',
    img: 'img/beer.png',
    price: 60,
    quantity: 5,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'dd44',
    name: 'cucumber',
    category: 'vegetables',
    img: 'img/cucumber.png',
    price: 40,
    quantity: 4,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'ee55',
    name: 'garlic',
    category: 'vegetables',
    img: 'img/garlic.png',
    price: 120,
    quantity: 5,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'ff66',
    name: 'pineapple',
    category: 'fruits',
    img: 'img/pineapple.png',
    price: 80,
    quantity: 6,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'gg77',
    name: 'pumpkin',
    category: 'vegetables',
    img: 'img/pumpkin.png',
    price: 60,
    quantity: 1,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'hh88',
    name: 'strawberry',
    category: 'fruits',
    img: 'img/strawberry.png',
    price: 100,
    quantity: 7,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'ii99',
    name: 'tea',
    category: 'drinks',
    img: 'img/tea.png',
    price: 40,
    quantity: 9,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
  {
    id: 'jj12',
    name: 'tomato',
    category: 'vegetables',
    img: 'img/tomato.png',
    price: 70,
    quantity: 8,
    url: '#',
    currency: 'UAH',
    description:
      'A goods description is essentially a detailed description that states what the goods are as well as other important information about the goods being shipped.',
  },
];

let categoriesOut = document.querySelector('.categories');
let goodsOut = document.querySelector('.goods');
let infoOut = document.querySelector('.info');

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

  for (let i = 0; i < goods.length; i++) {
    let div = document.createElement('div');
    div.classList.add('goods__item');
    let title = document.createElement('h2');
    title.classList.add('goods__title');
    title.textContent = goods[i]['name'];
    div.append(title);
    let img = document.createElement('img');
    img.classList.add('goods__img');
    img.src = goods[i]['img'];
    div.append(img);
    let price = document.createElement('p');
    price.classList.add('goods__price');
    price.textContent = `${goods[i]['price']} ${goods[i]['currency']}`;
    div.append(price);
    let quantity = document.createElement('p');
    quantity.classList.add('godds__price');
    quantity.textContent = `quantity: ${goods[i]['quantity']}`;
    div.append(quantity);
    let btnInfo = document.createElement('button');
    btnInfo.classList.add('btn-info');
    btnInfo.setAttribute('data-id', goods[i]['id']);
    btnInfo.textContent = 'i';
    div.append(btnInfo);
    goodsOut.append(div);
  }

  return goods;
}

function showInfo(e) {
  if (e.target.classList.contains('btn-info')) {
    cleanOut(infoOut);
    for (let i = 0; i < data.length; i++) {
      if (e.target.dataset['id'] === data[i]['id']) {
        infoOut.style.display = 'flex';
        let img = document.createElement('img');
        img.classList.add('info__img');
        img.src = data[i]['img'];
        infoOut.append(img);
        let title = document.createElement('h2');
        title.textContent = data[i]['name'];
        infoOut.append(title);
        let desc = document.createElement('p');
        desc.classList.add('info__desc');
        desc.textContent = data[i]['description'];
        infoOut.append(desc);
        let price = document.createElement('p');
        price.classList.add('info__price');
        price.textContent = `${data[i]['price']} ${data[i]['currency']}`;
        infoOut.append(price);
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buy');
        buyBtn.textContent = 'Buy';
        infoOut.append(buyBtn);
      }
    }
  }
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

categoriesOut.addEventListener('click', showGoods);
goodsOut.addEventListener('click', showInfo);
infoOut.addEventListener('click', showMessage);

showCategories(data);
