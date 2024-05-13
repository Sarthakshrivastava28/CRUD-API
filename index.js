import express from "express";
import mongoose from "mongoose";


import productRoute from "./routes/product_route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/products",productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});




mongoose
  .connect(
    "mongodb+srv://sarthakshri28:epHGZy9VpL5NGFIs@cluster0.dagrtqy.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("connection fail");
  });
