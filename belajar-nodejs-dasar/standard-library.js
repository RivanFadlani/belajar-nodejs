import os from "os";

console.info(os.platform());
console.table(os.cpus());

// error, karena kita menggunakan "import" yang di mana itu menggunakan fitur modules bawaan node.js
// maka, seharusnya bukan .js tetapi .mjs
