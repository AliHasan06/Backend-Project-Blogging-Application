const mongoose = require("mongoose");

async function connectdb() {
  await mongoose
    .connect(
      "mongodb+srv://yt-user:cycIfPRr6jYfxqLm@yt-completebackend.qbebft9.mongodb.net/project-1",
    )
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectdb