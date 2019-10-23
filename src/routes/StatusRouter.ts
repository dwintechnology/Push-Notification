// App imports
import { BaseRouter } from "./BaseRouter";
import { StatusController } from "../controllers/StatusController";

    /**
     * @swagger
     * definition:
     *    id:
     *     properties:
     *       id:
     *         type: integer
     *         example: "1"
     *         summary: A sample id
     */

export class StatusRouter extends BaseRouter {
    statusController: StatusController = new StatusController();  

    constructor() {
      super();
      
    /**
     * @swagger
     * /api/v1/update_status:
     *   get:
     *     summary: "Update statuses"
     *     tags:
     *       - Status
     *     description: Check all subscriptions statuses
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: successfully updated
     */
      this.router.get("/update_status", this.statusController.handleUpdateStatus.bind(this.statusController));
    /**
     * @swagger
     * /api/v1/online:
     *   put:
     *     summary: "Update status in db"
     *     tags:
     *       - Status
     *     description: Response from service worker
     *     parameters:
     *     - in: "body"
     *       name: "id"
     *       schema:
     *         $ref: "#/definitions/id"
     *       description: "Subscription id"
     *       required: true
     *     produces:
     *       - TEXT
     *     responses:
     *       200:
     *         description: status successfully set
     */
      this.router.put("/online", this.statusController.handleOnline.bind(this.statusController));
    }
  }