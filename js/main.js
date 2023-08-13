// task:
/**
 * 
1. Створити сутність "Людина".
Властивості:
імʼя;
вік.
Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.

2. Створити сутність "Автомобіль".
Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
    return this.name;
  }
}

const person_1 = new Person('Olek', 16);
const person_2 = new Person('Ihor', 18);
const person_3 = new Person('Ivan', 45);

person_1.showInfo();
person_2.showInfo();
person_3.showInfo();

class Car {
  constructor(brand, model, year, carNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carNumber = carNumber;
  }
  setOwner(owner) {
    if (owner.age < 18) {
      console.log('You must be older 18');
    } else {
      this.owner = owner;
      console.log(owner);
    }
  }
  showInfo() {
    console.log(
      `brand: ${this.brand}, model: ${this.model}, year: ${this.year}, car number: ${this.carNumber}`
    );
    this.owner ? this.owner.showInfo() : console.log('Car without owner');
  }
}

const car_1 = new Car('BMW', 'x7', 2020, 'WY334455');
const car_2 = new Car('Volvo', 'CX90', 2015, 'GD112266');
const car_3 = new Car('Opel', 'Astra', 2007, 'LU998877');

car_1.setOwner(person_1);
car_2.setOwner(person_2);
car_3.setOwner(person_3);

car_1.showInfo();
car_2.showInfo();
car_3.showInfo();
