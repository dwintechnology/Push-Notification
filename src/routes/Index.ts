import * as express from "express";

import { SubscribeRouter } from "./SubscribeRouter";
import { PushRouter } from "./PushRouter";
import { StatusRouter } from "./StatusRouter";
import { StatisticsRouter } from "./StatisticsRouter";
import { BroadcastRouter } from "./BroadcastRouter";

export class Router {
  public static initializeRoutes(app: express.Express) {
    app.use("/api/v1", new SubscribeRouter().router);  
    app.use("/api/v1", new PushRouter().router);  
    app.use("/api/v1", new StatisticsRouter().router);  
    app.use("/api/v1", new StatusRouter().router);
    app.use("/api/v1", new BroadcastRouter().router);  
  }
}
