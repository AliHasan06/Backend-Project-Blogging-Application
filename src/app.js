const express = require("express");
const app = express();
const uploadfile = require("./services/storage.service");
const multer = require("multer");

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadfile(req.file.buffer);
  
});

module.exports = app;
