require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send("<h2>Welcome <h2>");
});

server.listen(port, () => console.log(`server is runnig on port ${port}`));
