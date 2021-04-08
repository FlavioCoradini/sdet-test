const express = require("express");
const routes = require("./routes");

const { PORT = 3000 } = process.env;

const app = express();

// parse json request body
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
