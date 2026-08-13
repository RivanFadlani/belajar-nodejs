import EventEmitter from "events";

const emitter = new EventEmitter();

// buat listener 2 kali
// addListener(eventName, listener)
emitter.addListener("hello", (name) => {
  console.log(`Hola, ${name}`);
});
emitter.addListener("hello", (name) => {
  console.log(`Hola, ${name}`);
});

// hasilnya log muncul 2 kali
// "hello" = event name
// "ripunn" = argument
emitter.emit("hello", "ripunn");
