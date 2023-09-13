const fs = require("fs");
const fsa = require("fs/promises");

// readFile แบบ Sync
// console.time("readFileSync");
// let data1 = fs.readFileSync("./rseource/dat01.txt", "utf8");
// console.log(data1);
// let data2 = fs.readFileSync("./rseource/dat02.txt", "utf8");
// console.log(data2);
// let data3 = fs.readFileSync("./rseource/dat03.txt", "utf8");
// console.log(data3);
// let data4 = fs.readFileSync("./rseource/dat04.txt", "utf8");
// console.log(data4);
// console.timeEnd("readFileSync");

// readFile แบบ Callback asynchronous
// console.log("===================");
// console.time("readFileCB");
// fs.readFile("./rseource/dat01.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./rseource/dat02.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./rseource/dat03.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./rseource/dat04.txt", "utf8", (err, data) => console.log(data));
// console.timeEnd("readFileCB");

// console.log("===================");
// console.time("readFilePromise");
// let pm1 = fsa.readFile("./rseource/dat01.txt", "utf8").then(console.log);
// let pm2 = fsa
//   .readFile("./rseource/dat03.txt", "utf8")
//   .then((data) => console.log(data));
// let pm3 = fsa
//   .readFile("./rseource/dat02.txt", "utf8")
//   .then((data) => console.log(data));
// let pm4 = fsa
//   .readFile("./rseource/dat04.txt", "utf8")
//   .then((data) => console.log(data));
// console.timeEnd("readFilePromise");

console.time("readFilePromise");
let pm1 = fsa.readFile("./rseource/dat01.txt", "utf8");
let pm2 = fsa.readFile("./rseource/dat02.txt", "utf8");
let pm3 = fsa.readFile("./rseource/dat0.txt", "utf8");
let pm4 = fsa.readFile("./rseource/dat04.txt", "utf8");
console.timeEnd("readFilePromise");

let pmAll = Promise.all([pm1, pm2, pm3, pm4])
  .then((res) => {
    //   console.log(res[0]);
    //   console.log(res[1]);
    //   console.log(res[2]);
    //   console.log(res[3]);
    res.forEach((x) => console.log(x));
  })
  .catch((err) => console.log(err));
