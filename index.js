const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log(res.send({ name: "hi i'm port 4002 replying" }));
});
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`server running successfully on port: ${PORT}`);
});
