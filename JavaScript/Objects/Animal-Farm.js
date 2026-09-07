const dog = {
  name: "Benny",
  type: "dog",
  age: 10,
  makeSound() {
    return this.name + " is a " + this.age + " year old " + this.type + " that goes woof!";
  }
};

const pig = {
  name: "Babe",
  type: "pig",
  age: 3,
  makeSound() {
    return this.name + " is a " + this.age + " year old " + this.type + " that goes oink!";
  }
};

const sheep = {
  name: "Shaun",
  type: "sheep",
  age: 5,
  makeSound() {
    return this.name + " is a " + this.age + " year old " + this.type + " that goes baa!";
  }
};

console.log(dog.makeSound());
console.log(pig.makeSound());
console.log(sheep.makeSound());