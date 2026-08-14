// module yang berfungsi untuk mendapatkan informasi proses NodeJS yang running
// Merupakan instance dari EventEmitter
import process from "process"; // sebenarnya global module

process.addListener("exit", (exitCode) => {
  console.log(`Exit with Exit Code: ${exitCode}`);
});

console.log(`NodeJS Version: ${process.version}`);
console.log(process.env);

process.emit("exit", 10);
process.exit(1); // exitcode = 1

console.log("hi"); // tidak terender karena process.exit()
