// App imports
import { BaseRouter } from "./BaseRouter";
import { SubscribeController } from "../controllers/SubscribeController";

export class SubscribeRouter extends BaseRouter {
  subscribeController: SubscribeController = new SubscribeController();  

    constructor() {
      super();
      this.router.post("/subscribe", this.subscribeController.handleSubscribe.bind(this.subscribeController));
      this.router.post("/track", this.subscribeController.handleTrack.bind(this.subscribeController));
    }
  }