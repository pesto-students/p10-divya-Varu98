const doTask1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("task one is done"));
    }, 2000);
  });
};
const doTask2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("task two is done"));
    }, 500);
  });
};
const doTask3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("task three is done"));
    }, 500);
  });
};

async function executeTasksAsync(fn1, fn2, fn3) {
  try {
    await fn1();
    await fn2();
    await fn3();
    console.log("await block finished");
  } catch (error) {
    console.log(error);
  }
}

function* executeTasksGenerator(fn1, fn2, fn3) {
  yield fn1();
  yield fn2();
  yield fn3();
}

const taskIterator = executeTasksGenerator(doTask1, doTask2, doTask3);
function handleNextTask() {
  const { value, done } = taskIterator.next();

  if (!done) {
    value.then(handleNextTask).catch((error) => {
      console.error("An error occurred during task execution:", error);
    });
  }
}
executeTasksAsync(doTask1, doTask2, doTask3);
handleNextTask();
