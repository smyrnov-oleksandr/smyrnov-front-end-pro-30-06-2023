class Student {
  constructor(
    firstName,
    secondName,
    year,
    scoreArray = [0],
    attendanceArray = Array(25)
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.year = year;
    this.scoreArray = scoreArray;
    this.attendanceArray = attendanceArray;
  }
  getAge() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let res = currentYear - this.year;
    return `${this.firstName} ${this.secondName} ${res} years old`;
  }
  getScore() {
    let res =
      this.scoreArray.reduce((acc, item) => (acc += item)) /
      this.scoreArray.length;
    return res;
  }
  getAttendance() {
    let resArray = this.attendanceArray.filter((item) => item);
    let res = resArray.length / this.attendanceArray.length;
    return res;
  }
  present() {
    let res = this.attendanceArray;
    for (let i = 0; i < res.length; i++) {
      if (typeof res[i] === 'undefined') {
        res[i] = true;
        break;
      }
    }
    return this;
  }

  absent() {
    let res = this.attendanceArray;
    for (let i = 0; i < res.length; i++) {
      if (typeof res[i] === 'undefined') {
        res[i] = false;
        break;
      }
    }
    return this;
  }

  summary() {
    if (this.getScore() >= 90 && this.getAttendance() >= 0.9) {
      return `Молодец, ${this.firstName}!`;
    } else if (
      (this.getScore() >= 90 && this.getAttendance() <= 0.9) ||
      (this.getScore() <= 90 && this.getAttendance() >= 0.9)
    ) {
      return `Добре, ${this.firstName}, але можна краще.`;
    } else {
      return `${this.firstName}-редиска!`;
    }
  }
}

const student1 = new Student(
  'Ihor',
  'Babenko',
  1992,
  [100, 100, 100, 100, 100, 60, 70, 80, 90, 100]
);
const student2 = new Student(
  'Volodymyr',
  'Pupkin',
  1999,
  [100, 20, 30, 40, 100, 60, 70, 100, 90, 100]
);
const student3 = new Student(
  'Serhii',
  'Zozulya',
  1983,
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
);

student1
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present();
student1.absent();
console.log(student1.getAge());
console.log(student1.getScore());
console.log(student1.getAttendance());
console.log(student1.summary());

student2.present().present().present().present().present().present();
student2.absent();
console.log(student2.getAge());
console.log(student2.getScore());
console.log(student2.getAttendance());
console.log(student2.summary());

student3
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present();
student3.absent();
console.log(student3.getAge());
console.log(student3.getScore());
console.log(student3.getAttendance());
console.log(student3.summary());
