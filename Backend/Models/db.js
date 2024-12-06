const mongoose = require("mongoose");

const connection_url = process.env.MONGO__CONNECTION;

mongoose
  .connect(connection_url)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error : ", error);
  });
