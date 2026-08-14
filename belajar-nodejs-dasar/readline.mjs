import readline from "readline/promises";
import process from "process";

const rl = readline.createInterface({
  input: process.stdin, // input dari terminal
  output: process.stdout, // mengambil output dari hasil input di terminal
});

const name = await rl.question("What is your name? ");
const age = await rl.question("How old are you? ");

console.log(`Hello, ${name}. i am ${age} years old`);
rl.close();
