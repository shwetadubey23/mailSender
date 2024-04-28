const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const mongoose = require("mongoose");
const { routes } = require("./Routes");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoose is connected...."))
  .catch((e) => {
    console.log("mongose is not connected");
  });
app.use("/", routes);
app.listen(process.env.PORT, () => {
  console.log(`running at ${process.env.PORT}`);
});
