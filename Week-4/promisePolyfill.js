function MyPromise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.onFulfilledCallbacks.forEach((cb) => cb(this.value));
    }
  };

  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((cb) => cb(this.reason));
    }
  };

  try {
    executor(resolve.bind(this), reject.bind(this));
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== "function") {
    onFulfilled = (value) => value;
  }

  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }

  const promise2 = new MyPromise((resolve, reject) => {
    if (this.state === "fulfilled") {
      setTimeout(() => {
        try {
          const x = onFulfilled(this.value);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      }, 0);
    } else if (this.state === "rejected") {
      setTimeout(() => {
        try {
          const x = onRejected(this.reason);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      }, 0);
    } else if (this.state === "pending") {
      this.onFulfilledCallbacks.push((value) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });

      this.onRejectedCallbacks.push((reason) => {
        setTimeout(() => {
          try {
            const x = onRejected(reason);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    }
  });

  return promise2;
};

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

const promiseHandler = () => {
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      // const randomNumber = Math.floor(Math.random() * 10);
      const randomNumber = 5;
      if (randomNumber % 5 === 0) {
        resolve(randomNumber);
      } else {
        reject(randomNumber);
      }
    }, 1000);
  });

  promise
    .then((value) => {
      console.log("Fulfilled:", value, "State:", promise.state);
      return value * 3;
    })
    .catch((error) => console.log("Caught:", error, "State:", promise.state));
};

promiseHandler();
