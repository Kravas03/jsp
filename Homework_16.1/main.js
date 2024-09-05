function Student(firstName, lastName, birthday, marks) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.marks = marks;
  this.visits = [];

  this.age = function () {
    let todayYear = new Date().getFullYear();
    return todayYear - this.birthday.getFullYear();
  };

  this.averageMark = function () {
    let average = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    return parseFloat(average.toFixed(1));
  };

  this.averageVisits = function () {
    let countPresents = this.visits.filter((value) => value === true).length;
    let countAbsents = this.visits.filter((value) => value === false).length;
    let result;
    if (countAbsents === 0) {
      result = 1;
    } else {
      result = countPresents / countAbsents;
    }
    return parseFloat(result.toFixed(1));
  };

  this.present = function () {
    if (this.visits.length < 25) {
      this.visits.push(true);
    } else {
      console.log("The array is full");
    }
  };

  this.absent = function () {
    if (this.visits.length < 25) {
      this.visits.push(false);
    } else {
      console.log("The array is full");
    }
  };

  this.summary = function () {
    let averageMark = this.averageMark();
    let averageVisits = this.averageVisits();
    if (averageMark > 90 && averageVisits > 0.9) {
      return "Молодець!";
    } else if (averageMark <= 90 && averageVisits <= 0.9) {
      return "Редиска!";
    } else {
      return "Добре, але можна краще";
    }
  };
}

let student1 = new Student(
  "John",
  "Doe",
  new Date(2002, 2, 12),
  [95, 100, 90, 92, 88]
);

let student2 = new Student(
  "Jane",
  "Smith",
  new Date(2003, 5, 25),
  [100, 90, 80, 100, 85]
);

let student3 = new Student(
  "John",
  "Week",
  new Date(2005, 1, 7),
  [60, 40, 20, 50, 65]
);

student1.present();
student1.present();
student1.present();
student1.present();
console.log("Student 1 Summary:");
console.log(student1.summary());

student2.present();
student2.absent();
student2.absent();
console.log("Student 2 Summary:");
console.log(student2.summary());

student3.absent();
student3.absent();
student3.absent();
console.log("Student 3 Summary:");
console.log(student3.summary());

// console.log(student1.age());
// console.log(student1.averageMark());
// console.log(student1.visits);
// console.log(student1.averageVisits());
