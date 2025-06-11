const fs = require("fs/promises");
const path = require("path");

const getFilePath = (fileName) => {
  const filePath = path.join(__dirname, "../data", fileName);
  return filePath;
};

// Reading a file
const readFile = async (fileName) => {
  try {
    const filePath = getFilePath(fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");
    if (!fileContent.trim()) return [];
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Cannot read file", error);
  }
};

// writing a file

const writeFile = async (fileName, data) => {
  const filePath = getFilePath(fileName);
  try {
    const fileContent = fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return fileContent;
  } catch (error) {
    console.error("Cannot add to this file", error);
  }
};

// console.log(writeFile("books.json", { title: "dela" }));

module.exports= {
readFile,
writeFile
}
