import "dotenv/config";
import process from "process";

const name = process.env.NAME;
const app = process.env.APP_NAME;

console.log(name);
console.log(app);
