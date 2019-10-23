// App imports
import { BaseRouter } from "./BaseRouter";
import { BroadcastController } from "../controllers/BroadcastController";

export class BroadcastRouter extends BaseRouter {
  broadcastController: BroadcastController = new BroadcastController();

  constructor() {
    super();

    /**
    * @swagger
    * /api/v1/broadcast/config:
    *   get:
    *     summary: "Get broadcast config"
    *     tags:
    *       - Broadcast
    *     description: Get broadcast config
    *     produces:
    *       - application/json
    *     security:
    *       - JWT: []
    *     responses:
    *       200:
    *         description: loaded successfully
    */
    this.router.get("/broadcast/config", this.authMiddleware, this.broadcastController.handleGetConfig.bind(this.broadcastController));

    /**
     * @swagger
     * /api/v1/broadcast/config:
     *   put:
     *     summary: "Update broadcast config"
     *     tags:
     *       - Broadcast
     *     description: Update broadcast config
     *     parameters:
     *     - in: "body"
     *       name: "body"
     *       schema:
     *         $ref: "#/definitions/broadcast_config"
     *       description: "broadcast_config"
     *       required: true
     *     produces:
     *       - TEXT
     *     security:
     *       - JWT: []
     *     responses:
     *       200:
     *         description: updated successfully
     */
    this.router.put("/broadcast/config", this.authMiddleware, this.broadcastController.handleUpdateConfig.bind(this.broadcastController));
  }
}

    /**
     * @swagger
     * definition:
     *    broadcast_config:
     *     properties:
     *       title:
     *         type: string
     *         example: "Title"
     *         summary: A sample title
     *       message:
     *         type: string
     *         example: "message"
     *         summary: A sample message
     *       url:
     *         type: string
     *         example: "https://chapi.me"
     *         summary: A sample url
     *       icon:
     *         type: string
     *         example: "https://cdn3.iconfinder.com/data/icons/happy-x-mas/501/santa15-128.png"
     *         summary: A sample icon
     *       badge:
     *         type: string
     *         example: "https://cdn3.iconfinder.com/data/icons/happy-x-mas/501/santa15-128.png"
     *         summary: A sample badge
     *       data:
     *         type: string
     *         example: "Hello New World"
     *         summary: A sample data
     *       image:
     *         type: string
     *         example: "https://cdn3.iconfinder.com/data/icons/happy-x-mas/501/santa15-128.png"
     *         summary: A sample image
     *       tag:
     *         type: string
     *         example: "Book Story"
     *         summary: A sample tag
     *       ttl:
     *         type: integer
     *         example: "36000"
     *         summary: A sample ttl
     *       delay_sec:
     *         type: integer
     *         example: "36000"
     *         summary: Delay between notifications
     *       repeat_min:
     *         type: integer
     *         example: "60"
     *         summary: Delay between broadcast
     */

    /**
     * @swagger
     * securityDefinition:
     *   JWT:
     *     name: Authorization
     *     in: header
     *     type: apiKey
     */