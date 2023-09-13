const fs = require("fs");
const adtFile = "./at01.txt";

// function readFilePromise() {
//   const data = new Promise((resole, reject) => {
//     fs.readFile(adtFile, "utf8", (err, data) => {
//       if (err) return reject(err);
//       console.log("File OK..");
//       return resole(data);
//     });
//   });
//   return data;
// }
// readFilePromise().then((dt) => {
//   console.log(dt);
// });

// const output = new Promise((resole, reject) => {
//   fs.readFile(adtFile, "utf8", (err, data) => {
//     if (err) return reject(err);
//     console.log("File OK..");
//     return resole(data);
//   });
// });

// console.log(output);
// // console.log(dt);
// output.then((dt) => console.log(dt));

const output = new Promise((resole, reject) => {
  fs.readFile(adtFile, "utf8", (err, data) => {
    if (err) return reject(err);
    console.log("File OK..");
    return resole(data);
  });
});
output.then((x) => console.log(x)).catch((err) => console.log(err.code));
