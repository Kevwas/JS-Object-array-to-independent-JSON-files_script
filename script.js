const fs = require("fs");
const data = require("./data");

data.map((el) => {
  fs.writeFile(
    `./json_data/${el.title}.json`,
    JSON.stringify(el),
    function (err) {
      if (err) throw err;
      console.log(`File ${el.title}.json created successfully.`);
    }
  );
});
