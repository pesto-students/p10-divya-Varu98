// Showing a bind example.

const spiderman = {
  name: "SpiderMan",
  alterEgo: "Peter Parker",
};

const spiderwoman = {
  name: "SpiderWoman",
  alterEgo: "Jessica Drew",
};

function printDetails() {
  console.log(
    `Eventually ${this.alterEgo} turned into ${this.name} to protect the MCU universe \n \n`
  );
}

const printSpiderman = printDetails.bind(spiderman);
const printSpiderWoman = printDetails.bind(spiderwoman);
printSpiderman();
printSpiderWoman();

// showing a call example
// difference between call and bind is that call will not create a new copy of the function and execute the function immediately.
const blackpanther = {
  name: "Black Panther",
  alterEgo: "Price T'Challa",
};

const blackwidow = {
  name: "Black Widow",
  alterEgo: "Natasha Romanova",
};
printDetails.call(blackpanther);
printDetails.call(blackwidow);

// showing an apply example.
// the apply method is somewhat similar to the call, the difference here is that the apply method accepts an array of arguments as compared to the call method.

const ironman = {
  name: "IronMan",
  alterEgo: "Tony Stark",
};

const thanos = {
  name: "Thanos",
  alterEgo: "The Mad Titan",
};

function whichHero(comic, author) {
  console.log(
    `In ${comic} comics written by ${author} ${this.name} also known as ${this.alterEgo} were very popular charachters\n\n`
  );
}
whichHero.apply(ironman, ["MCU", "Vardaan"]);
whichHero.apply(thanos, ["MCU", "Vardaan"]);
