function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.initialize = function () {
  console.log(
    `A person named : ${this.name} with the age : ${this.age} has been created`
  );
};

Person.prototype.teach = function (subject) {
  console.log(
    `Teacher with the name ${this.name} teaches ${subject} as their subject`
  );
};

const Vardaan = new Person("Vardaan", 25);
Vardaan.initialize();
Vardaan.teach("Frontend Engineering");
// teacher.prototype.teach = function()
