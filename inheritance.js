class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  print() {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
  }
}

class Admin extends User {
  constructor(firstName, lastName, age, role){
    super(firstName, lastName, age);
    this.role = role;
  }
  print() {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}; role: ${this.role}`);
  }
}

const user = new User('John', 'Connor', '32');
const admin = new Admin('John', 'Connor', '32', 'tffgtbg');
user.print();
admin.print();