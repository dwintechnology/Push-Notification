import { Request, Response } from "express";
import { winstonLogger } from '../utils/logger';
import { ConfigManager } from '../utils/configManager';
import { errors } from "../utils/errors";
import { promise as execShPromise} from "exec-sh";

export class BroadcastController {
  protected broadcastConfigModel: BroadcastConfigModel = new BroadcastConfigModel();

  constructor() {
  }

  public async handleGetConfig(request: Request, response: Response) {
    this.broadcastConfigModel
      .getConfig()
      .then((config: IBroadcastConfig) => {
        winstonLogger.info("handleGetConfig: ", config);
          data: config
        });
      })
      .catch((err) => {
        winstonLogger.error('Failed to get Config: ', err);
        response.status(error.status_code).json(error.body);
      })
  }

  public async handleUpdateConfig(request: Request, response: Response) {
    this.broadcastConfigModel
    .updateConfig(request.body)
    .then(() => {
      winstonLogger.info("handleUpdateConfig: ");
      return this.restartJob();
    })
    .then(() => {
      response.status(200).json({
        data: null
      });
    })
    .catch((err) => {
      winstonLogger.error('Failed to update Config: ', err);
      response.status(error.status_code).json(error.body);
    })
  }

  private async restartJob() {
    execShPromise(`pm2 start pm2-broadcast.json --env ${this.configManager.getEnv()}`, true)
      .then((res) => {
        winstonLogger.info("Task restarted: ", res);
      })
      .catch(err => {
        winstonLogger.error("Failed to restart task: ", err);
      })
  }

}