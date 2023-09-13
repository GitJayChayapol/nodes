// {
//     "x": 50,
//     "y": 20,
//     "sum": 50
// }

const fs = require("fs/promises");

// fs.readFile("./input.json", "utf8")
//   .then((dt) => {
//     let dt_obj = JSON.parse(dt);
//     dt_obj.sum = dt_obj.x + dt_obj.y;
//     // return Promise.reject('Not OK')
//     return dt_obj; // resolve(dt_obj)
//   })
//   .then((rs_obj) => {
//     let out = JSON.stringify(rs_obj);
//     return fs.writeFile("./output.json", out);
//   })
//   .then(() => {
//     return fs.readFile("./output.json", "utf8");
//   })
//   .then((x) => console.log(x))
//   .catch((err) => console.log(err));

async function run() {
  try {
    let run_obj = JSON.parse(await fs.readFile("./input.json", "utf8"));
    run_obj.sum = run_obj.x + run_obj.y;
    await fs.writeFile("./output.json", JSON.stringify(run_obj));
    console.log(run_obj);
  } catch (err) {
    console.log(err);
  }
}

run();
