import express, { Express, Request, Response, Router } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import router from "./routes/Post.routes";
import postRoutes from "./routes/Post.routes";
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

app.get("/", (req: Request, res: Response) => {
  res.send("server up! s @! ssd");
});

const startServer = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  router.use("/posts", postRoutes);

  app.listen(port, () => {
    console.log("listening on port", port);
  });
};
