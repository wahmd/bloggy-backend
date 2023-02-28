import express, { Express, Request, Response, Router } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import postRoutes from "./routes/Post.routes";
const cors = require("cors");

const port = 8000;
const app = express();

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("Monogodb connection successful!");

    // start server if db connection successful
    startServer();
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });

const startServer = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });

  // routes
  app.use("/posts", postRoutes);

  app.listen(port, () => {
    console.log("listening on port", port);
  });
};
