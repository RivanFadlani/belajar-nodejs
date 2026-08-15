// The Buffer class is a subclass of JavaScript's <Uint8Array> class and extends it with methods that cover additional use cases. Node.js APIs accept plain <Uint8Array>s wherever Buffers are supported as well.

import { Buffer } from "buffer"; // global scope sebenarnya

const buffer = Buffer.from("Rivan Fadlani");

console.log(buffer); // <Buffer 52 69 76 61 6e 20 46 61 64 6c 61 6e 69>
console.log(buffer.toString());

buffer.reverse(); // mutable
console.log(buffer);

console.log(buffer.toString());
