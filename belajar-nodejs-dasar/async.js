function samplePromise() {
  const req = new Promise((resolve) => {
    resolve("ripunn");
  });

  return req;

  // return Promise.resolve("ripunn");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
