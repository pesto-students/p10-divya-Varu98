// Promise Polyfill
// function promisePolyfill(executor) {
// }

// const customPromise = new promisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });

// customPromise.then((res) => console.log(res)).catch((err) => console.log(err));

class myClass {
  name = "vardaan";
  display() {
    console.log("hello world", this);
  }

  run(fun) {
    fun();
    // this.display();
  }
}

const obj = new myClass();
// obj.display();
// const display = obj.display.bind(obj);
// obj.run(obj.display);

class myClass2 {
  name = "Divya";
  display() {
    console.log("hello world", this);
  }
}

const newVar = new myClass2();

const display1 = obj.display.bind(newVar);
obj.run(display1);

// inheritance deriving one class from the other class
// encapsulation hiding things from the outside world.
// abstraction Nextjs and react...
// polymorphism some fn(a, b) fn(a, b ,c) reusability.
// static and runtime inheritance.

class person {
  name = "vardaan";
}

class doctor extends person {
  skills = "medical";

  opertae() {
    console.log("operates");
  }
}

class developer extends person {
  skills = "tech";

  develop() {
    console.log("develop");
  }
}

const p1 = new person();
console.log(p1);
