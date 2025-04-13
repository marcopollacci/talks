// access to index.html into docs folder

const fs = require("fs");
const path = require("path");

//open file

const file = fs.readFileSync(
  path.join(__dirname, "docs", "index.html"),
  "utf8"
);

const regex = /<a href="pages\/(.*?)\.(.*?)"><\/a>/g;
const newFile = file.replace(regex, "");

//write new file
fs.writeFileSync(path.join(__dirname, "docs", "index.html"), newFile, "utf8");
