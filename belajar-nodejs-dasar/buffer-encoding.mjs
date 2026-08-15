// The Buffer class is a subclass of JavaScript's <Uint8Array> class and extends it with methods that cover additional use cases. Node.js APIs accept plain <Uint8Array>s wherever Buffers are supported as well.

import { Buffer } from "buffer"; // global scope sebenarnya

const buffer = Buffer.from("Rivan Fadlani", "utf8"); // default

console.log(buffer.toString());
console.log(buffer.toString("hex")); // 526976616e204661646c616e69
console.log(buffer.toString("base64")); // Uml2YW4gRmFkbGFuaQ==

const bufferBase64 = Buffer.from("Uml2YW4gRmFkbGFuaQ==", "base64");
console.log("result: " + bufferBase64.toString("utf8"));
