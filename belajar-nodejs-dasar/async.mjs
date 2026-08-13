// secara default, module itu sudah asynchronous
// walaupun kalau dilihat-lihat kode di bawah ini terlihat synchronous. Padahal sebenarnya Module itu sudah Async

function samplePromise() {
  const req = new Promise((resolve) => {
    resolve("ripunn");
  });

  return req;

  // return Promise.resolve("ripunn");
}

const name = await samplePromise();
console.log(name);
