// func require() adalah cara load module yang lama.
// yang di mana saat itu fitur Javascript Module itu belum ada
const os = require("os");

console.info(os.platform());
console.table(os.cpus());
