import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
const port = 8000;
const app = express();

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("Monogodb connection successful!");
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("server up! s @! ssd");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
