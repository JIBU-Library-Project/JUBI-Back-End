const { description } = require("./utils/validator");

const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "Library App API",
    description: "detailed description of the library app",
  },
  host: "jubi-back-end.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];

swaggerAutogen(outputFile, routes, doc);
