// module untuk manipulasi file system
import fs from "fs/promises";
// ada 3 jenis filesystem: promise, callback, dan synchronous

// read file
const buffer = await fs.readFile("filesystem.mjs");
console.log(buffer.toString());

// write file (buat file baru)
// write(file, data)
await fs.writeFile("temp.txt", "Hello Node!");
