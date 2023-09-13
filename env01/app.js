require("dotenv").config();

console.log("APIKEY =", process.env.APIKEY);
console.log("TITILE =", process.env.TITLE);

let apikey = process.env.APIKEY;
console.log(apikey);

console.log(+process.env.LUCKY_NUM + 1);
console.log(process.env.ADMIN);
console.log(process.env.ADMIN.name);
console.log(typeof process.env.ADMIN);

let obj = JSON.parse(process.env.ADMIN);

console.log(typeof obj);
