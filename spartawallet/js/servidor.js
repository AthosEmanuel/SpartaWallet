const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes");
app.use(routes);

app.listen(3000, function () {
  console.log(`Server listen in port:${port}`);
});
