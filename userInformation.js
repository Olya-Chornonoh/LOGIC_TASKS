function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.print = function () {
    console.log(`Name: ${name} Lastname: ${lastName} age: ${age}`);
  };
}
