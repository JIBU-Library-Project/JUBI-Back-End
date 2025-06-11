const express = require("express");
const app = express();
const cors = require("cors");
const booksRouter = require("./routes/booksRoute");
app.use(express.json());
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
app.use(cors({ origin: "*" }));

app.use("/", booksRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
[];
app.listen(7000, () => {
  console.log("App running on port 7000");
});
