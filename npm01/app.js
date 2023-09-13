const cowsay = require("cowsay");
const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));

for (let i = 1; i <= 5; i++) {
  console.log(
    chalk.red(
      cowsay.say({
        text: "Hello Codecamp",
        e: ". x",
        T: "U",
        r: true,
      })
    )
  );
}
