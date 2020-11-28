import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import "./database";

class App {
  constructor() {
    dotenv.config();

    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
