import dns from "dns/promises";

const address = await dns.lookup("www.programmerzamannow.com");

console.log(address);
