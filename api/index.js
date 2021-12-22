require("dotenv").config();
const express = require("express");
const app = express();

const multer = require("multer");
// const Post = require("./models/Post")
// const sharp = require("sharp")
const path = require("path");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

require('./db');
const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const articleRoute = require("./routes/articles");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.use("/api/articles", articleRoute);

app.listen( process.env.PORT || "5001", () => {
  console.log("Server running on port 5001");
});
