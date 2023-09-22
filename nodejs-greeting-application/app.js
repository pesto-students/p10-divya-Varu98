const readline = require("readline");
const fs = require("fs");
const greetUser = require("./greeting");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Hello Dear User, What would be your name ? ", (name) => {
  greetUser(name);
  fs.writeFile("./output.txt", `${name} \n`, { encoding: "utf-8" }, (err) => {
    if (err) throw err;
    console.log("Greetings Saved!");
  });
  rl.close();
});
