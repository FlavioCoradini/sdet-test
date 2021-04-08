const app = require("./src/app");

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
