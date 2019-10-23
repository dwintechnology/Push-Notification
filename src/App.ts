import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as serveStatic from "serve-static";
//import * as favicon from "serve-favicon";
import * as path from "path";
import * as swaggerJSDoc from 'swagger-jsdoc';
import { ConfigManager } from './utils/configManager';
import { accessLogStream, exceptionMiddleware, logAndCrash } from './utils/logger';

var cors = require('cors')

// App imports
import { Router } from "./routes/Index";

class App {
  public express;
  private swaggerSpec;
  private configManager = ConfigManager.getInstance();

  constructor() {
    this.express = express();
    this.init();
    this.initRoutes();
     // initialize swagger-jsdoc
     this.swaggerSpec = swaggerJSDoc(this.configManager.getSwaggerConfig());
  }

  private init(): void {
    this.setupLogger();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(helmet({ frameguard: false }));
    this.express.use(compression());
    this.express.use(cors());
    this.express.set('trust proxy', true);
    this.setupSwagger();
    this.express.use("/page/:uid", serveStatic(path.join(__dirname, "public/robot")));
    this.express.use("/page2/:uid", serveStatic(path.join(__dirname, "public/loading")));
    // error handlers

    // development error handler
    // will print stacktrace
    if (this.express.get('env') === 'development') {
      this.express.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    this.express.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    })
  }

  /**
	 *  Configure morgan logger
	 */
  private setupLogger(): void {
    this.express.use(exceptionMiddleware);
    process.on('uncaughtException', logAndCrash);
    this.express.use(logger('combined', { stream: accessLogStream }));
  }

  /**
   * Configure API endpoints for swagger
   */
  private setupSwagger(): void {
    // Returns swagger confige file
    this.express.get('/swagger.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(this.swaggerSpec);
    });

    // Returns swagger API doc
    this.express.get('/api-docs', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/api-docs/index.html'));
    });
    this.express.get('/api-docs/swagger-ui.css', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/api-docs/swagger-ui.css'));
    });
    this.express.get('/api-docs/swagger-ui-bundle.js', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/api-docs/swagger-ui-bundle.js'));
    });
    this.express.get('/api-docs/swagger-ui-standalone-preset.js', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/api-docs/swagger-ui-standalone-preset.js'));
    });
    this.express.get('/firebase-messaging-sw.js', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/loading/firebase-messaging-sw.js'));
    });

    
  }

  private initRoutes(): void {
    Router.initializeRoutes(this.express);
    const router = express.Router();
  }
}

export default new App().express;
