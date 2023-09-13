const fs = require("fs/promises");

async function sum() {
  try {
    let productObj = JSON.parse(await fs.readFile("./products.json", "utf8"));
    const summary = {
      all: 0,
      Clothes: 0,
      Shoes: 0,
      Others: 0,
      Camilo: 0,
      Electronics: 0,
    };
    const sumall = productObj.reduce((acc, cur) => {
      summary.all = productObj.length;
      if (cur.category.name === "Clothes") summary.Clothes += 1;
      if (cur.category.name === "Shoes") summary.Shoes += 1;
      if (cur.category.name === "Others") summary.Others += 1;
      if (cur.category.name === "Camilo") summary.Camilo += 1;
      if (cur.category.name === "Electronics") summary.Electronics += 1;
    });
    // const all = productObj.reduce((acc, cur) => {
    //   summary.all = productObj.length;
    // });
    // const clothes = productObj.reduce((acc, cur) => {
    //   if (cur.category.name === "Clothes") summary.Clothes += 1;
    // });
    // const shoes = productObj.reduce((acc, cur) => {
    //   if (cur.category.name === "Shoes") summary.Shoes += 1;
    // });
    // const other = productObj.reduce((acc, cur) => {
    //   if (cur.category.name === "Others") summary.Others += 1;
    // });
    // const camilo = productObj.reduce((acc, cur) => {
    //   if (cur.category.name === "Camilo") summary.Camilo += 1;
    // });
    // const electronics = productObj.reduce((acc, cur) => {
    //   if (cur.category.name === "Electronics") summary.Electronics += 1;
    // });
    await fs.writeFile("./countitem.json", JSON.stringify(summary));
  } catch (err) {
    console.log(err);
  }
}
sum();
