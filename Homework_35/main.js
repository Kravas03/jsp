const myObject = {
  contactBook: [
    { name: "Boris", number: "134", mail: "aswfdf@asd.ua" },
    { name: "Lev", number: "134213", mail: "as23df@asd.ua" },
    { name: "Sasha", number: "12456", mail: "asd1245f@asd.ua" },
    { name: "Adrey", number: "10540", mail: "f@asd.ua" },
    { name: "Vova", number: "8795", mail: "uiewrt@asd.ua" },
  ],
  findUser: function (name) {
    return this.contactBook.find((contact) => contact.name === name);
  },
  addContact: function (name, number, mail) {
    this.contactBook.push({ name, number, mail });
  },
};
const foundContact = myObject.findUser("Sasha");
console.log("Знайдений контакт:", foundContact);

myObject.addContact(4, "Eve", "asdafer@asd.ua");
console.log("Масив після додавання нового контакту:", myObject.contactBook);
