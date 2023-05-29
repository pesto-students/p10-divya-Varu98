/*
  stack.items => should be undefined
  such that there is no way to access items array outside of createStack()
  */

function createStack() {
  let items = [];

  function push(item) {
    items.push(item);
    console.log(items);
  }
  function pop() {
    items.pop();
    console.log(items);
  }
  return Object.freeze({
    push,
    pop,
  });
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // pops 5
stack.items = [10, 100, 1000];
console.log(stack);
console.log(stack.items);
