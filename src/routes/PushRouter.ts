// App imports
import { BaseRouter } from "./BaseRouter";
import { PushController } from "../controllers/PushController";

export class PushRouter extends BaseRouter {
  pushController: PushController = new PushController();  

    constructor() {
      super();
      
    /**
     * @swagger
     * /api/v1/push/many:
     *   post:
     *     summary: "Push many"
     *     tags:
     *       - Push
     *     description: Push to selected active subscribers
     *     security:
     *       - JWT: []
     *     parameters:
     *     - in: "body"
     *       name: "body"
     *       schema:
     *         $ref: "#/definitions/notification"
     *       description: "notification"
     *       required: true
     *     - in: query
     *       name: npp
     *       schema:
     *         type: integer
     *       description: Numbers per page
     *     - in: query
     *       name: page
     *       schema:
     *         type: integer
     *       description: Page
     *     produces:
     *       - TEXT
     *     responses:
     *       200:
     *         description: notification successfully send
     */
    this.router.post("/push/many", this.pushController.handlePushMany.bind(this.pushController));

    /**
     * @swagger
     * /api/v1/push/{uid}:
     *   post:
     *     summary: "Push notification"
     *     tags:
     *       - Push
     *     description: Push to subscriber
     *     security:
     *       - JWT: []
     *     parameters:
     *     - in: "path"
     *       name : "uid"
     *       description: "Subscription Id"
     *       required: true
     *     - in: "body"
     *       name: "body"
     *       schema:
     *         $ref: "#/definitions/notification"
     *       description: "notification"
     *       required: true
     *     produces:
     *       - TEXT
     *     responses:
     *       200:
     *         description: notification successfully send
     */
      this.router.post("/push/:uid", this.authMiddleware, this.pushController.handlePushOne.bind(this.pushController));
    /**
     * @swagger
     * /api/v1/push:
     *   post:
     *     summary: "Broadcast"
     *     tags:
     *       - Push
     *     description: Push to all active subscribers
     *     parameters:
     *     - in: "body"
     *       name: "body"
     *       schema:
     *         $ref: "#/definitions/notification"
     *       description: "notification"
     *       required: true
     *     security:
     *       - JWT: []
     *     produces:
     *       - TEXT
     *     responses:
     *       200:
     *         description: notification successfully send
     */
      this.router.post("/push", this.authMiddleware, this.pushController.handlePushAll.bind(this.pushController));
      
    /**
     * @swagger
     * /api/v1/notificationclick:
     *   put:
     *     summary: "Log notification click"
     *     tags:
     *       - Status
     *     description: Postback from service worker
     *     parameters:
     *     - in: "query"
     *       name: "id"
     *       schema:
     *         $ref: "#/definitions/id"
     *       description: "Subscription id"
     *       required: true
     *     produces:
     *       - TEXT
     *     security:
     *       - JWT: []
     *     responses:
     *       200:
     *         description: status successfully set
     */
    this.router.get("/notificationclick", this.pushController.handleNotificationclick.bind(this.pushController));
    }
  }

    /**
     * @swagger
     * definition:
     *    notification:
     *     properties:
     *       type:
     *         type: string
     *         enum: [
     *          "firebase",
     *           "web"
     *         ]
     *         example: "firebase"
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
     *         example: "  "image": "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg"
     *         summary: A sample icon
     *       image:
     *         type: string
     *         example: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg"
     *         summary: A sample image
     *       data:
     *         type: string
     *         example: "Hello New World"
     *         summary: A sample data
     *       ttl:
     *         type: integer
     *         example: 36000
     *         summary: A sample ttl
     */

     
    /**
     * @swagger
     * definition:
     *    id:
     *     properties:
     *       id:
     *         type: string
     *         example: "1"
     *         summary: A sample id
     */