// App imports
import { BaseRouter } from "./BaseRouter";
import { StatisticsController } from "../controllers/StatisticsController";

export class StatisticsRouter extends BaseRouter {
    statisticsController: StatisticsController = new StatisticsController();  

    constructor() {
      super();
      
    /**
     * @swagger
     * /api/v1/subscriptions:
     *   get:
     *     summary: "Get subscriptions"
     *     tags:
     *       - Subscriptions
     *     description: Get all subscriptions
     *     produces:
     *       - application/json
     *     security:
     *       - JWT: []
     *     responses:
     *       200:
     *         description: loaded successfully
     */
      this.router.get("/subscriptions", this.authMiddleware, this.statisticsController.handleGetSubscriptions.bind(this.statisticsController));

    /**
     * @swagger
     * /api/v1/push:
     *   get:
     *     summary: "Get push history"
     *     tags:
     *       - Push
     *     description: Get push history
     *     produces:
     *       - application/json
     *     security:
     *       - JWT: []
     *     responses:
     *       200:
     *         description: loaded successfully
     */
    this.router.get("/push", this.authMiddleware, this.statisticsController.handleGetPushs.bind(this.statisticsController));
  }
}