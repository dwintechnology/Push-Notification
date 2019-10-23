import app from "./App";
import { winstonLogger } from "./utils/logger";
import { ConfigManager } from "./utils/configManager"
const fs = require("fs");
const http = require("http");
const https = require("https");
import * as path from "path";

const configManager = ConfigManager.getInstance();
const port = configManager.getServerConfig().port || 8080;
function main(): void {
  if (!configManager.isProduction()) {
    const httpServer = http.createServer(app);
    httpServer.listen(port, err => {
      if (err) {
        return winstonLogger.info(err);
      }

      return winstonLogger.info(`server is listening on ${port}`);
    });
    return;
  }

  if (configManager.isProduction()) {
    try {
      const privateKey = fs.readFileSync(path.join(__dirname, configManager.getServerConfig().httpsKeyFile), "utf8");
      const certificate = fs.readFileSync(path.join(__dirname, configManager.getServerConfig().httpsCertFile), "utf8");
      const ca = fs.readFileSync(path.join(__dirname, configManager.getServerConfig().httpsCaFiles[0]), "utf8");
      const credentials = { key: privateKey, cert: certificate, ca: ca };
      const httpsServer = https.createServer(credentials, app);
   
    httpsServer.listen(port, err => {
      if (err) {
        winstonLogger.error('failed to run script: ', err)
        return winstonLogger.error(err);
      }
      return winstonLogger.info(`server is listening on ${port}`);
    });
  } catch(err) {
    winstonLogger.error(err)
}

main();
