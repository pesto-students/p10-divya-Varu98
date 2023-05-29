function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  function log() {
    console.log(`Count is ${count}`);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// ans should be 3

/* 
Description

Here we will get the result of 3.

This happening because of the function increment forming a closure with its parent being
the create function.

We declare the variable count inside the function createIncrement() and then increment it's value inside another function increment.

Since the count variable is not declared in the increment function, the program than goes to search for
the variable in its lexical parent environment where it finds the count variable declared as 0.

Now notice that the inner function increment is called 3 times so even though that the createIncrement function is only being called once but the increment function is being called 3 times which is eventually 
triggering the count to increase by 1 value.

So since the count is being increased by 1 and this function being called 3 times so when the log function is called it logs the value of 3 in the count variable because by the time the log function is called the increment function has already been called 3 times.

*/
