import * as express from "express";
// import { Request, Response, NextFunction } from "express";
import { ConfigManager } from "../utils/configManager";
import { IError, EErrorCode } from "../models/Interfaces";
import { errors } from "../utils/errors";

export class BaseRouter {
  public router: express.Router;
  protected configManager: ConfigManager = ConfigManager.getInstance();

  constructor() {
    this.router = express.Router();
    const limiter = require("express-limiter")(this.router);
    limiter({
      lookup: "user.id",
      // 150 requests per hour
      total: 150,
      expire: 1000 * 60 * 60
    });
  }

    /**
 * Validate request parameters and attach instance object to response
 * 
 * @param request 
 * @param response 
 * @param next 
 */
public authMiddleware(request: express.Request, response:express. Response, next: express.NextFunction) {
  const token = request.headers['authorization'];
  console.log("Token is == ", request.headers)
  // Send error response if token is not available
  if (!token) {
    const error: IError = errors.getError(EErrorCode.TOKEN_NOT_FOUND);
    response.status(error.status_code).json(error.body);
    return;
  }
  // Send error response if token is invalid
  if (token  !== 'maxwilldoit') {
    const error: IError = errors.getError(EErrorCode.INVALID_TOKEN);
    response.status(error.status_code).json(error.body);
    return;
  }
    next();
  }

}
