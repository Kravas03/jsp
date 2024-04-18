const user = {
  name: "Linda",
  age: 25,
  location: "Kyiv",
  displayInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Location: ${this.location}`);
  },
};

user.displayInfo();
