import fs from "fs";
import { once } from "events";

const writer = fs.createWriteStream("target.log"); // target file
// saat ada data stream yang diperbarui, maka -
// file tidak akan dibuat 2 kali

writer.write("Rivan\n");
writer.write("Fadlani\n");
writer.write("a.k.a Ripunn\n");
writer.write("uhhh");
writer.end();
// menunggu await selesai dieksekusi, baru lanjut baris selanjutnya
await once(writer, "finish");

const reader = fs.createReadStream("target.log"); // target file
reader.addListener("data", (data) => {
  // data ini dikembalikan dalam bentuk buffer
  console.log(data.toString());
});
