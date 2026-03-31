const express = require("express");
const app = express();
const postModel = require("./models/post.model");
const uploadfile = require("./services/storage.service");
const multer = require("multer");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadfile(req.file.buffer);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "uploaded image and caption",
    post: post,
  });
});
app.get("/posts", async(req,res)=> {
 const posts = await postModel.find()

    res.status(200).json({
      message: "posts fetched successfully",
      posts: posts
  })
})
module.exports = app;
