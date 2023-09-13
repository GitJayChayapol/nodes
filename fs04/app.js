const fs = require("fs/promises");

const msg = "CodeCamp15 SuSu";

fs.writeFile("./test.txt", msg).then(() => {
  console.log("wtite test.txt: OK");
});
