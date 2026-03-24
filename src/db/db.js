require("dotenv").config();
const mongoose = require("mongoose");

async function connectdb() {
  await mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectdb