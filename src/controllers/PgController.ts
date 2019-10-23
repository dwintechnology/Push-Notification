// import { IDatabase, IMain } from 'pg-promise';
import * as pgPromise from 'mysql';

import { ConfigManager } from '../utils/configManager';
import { winstonLogger } from '../utils/logger';

class Database {

  private db;

  constructor() {
    this.init();
  }

  public getDB() {
    return this.db;
  }

  public init() {
    try {
      this.db  = pgPromise.createPool({
        connectionLimit : 10,
        host            : ConfigManager.getInstance().getDatabaseConfig().host,
        user            : ConfigManager.getInstance().getDatabaseConfig().user,
        password        : ConfigManager.getInstance().getDatabaseConfig().password,
        database        : ConfigManager.getInstance().getDatabaseConfig().database
      });
      winstonLogger.info('Data Base connection success ...', process.env.NODE_ENV);
      const db = this.db;
      this.db.any = async (sql, values) => {
        return new Promise(function (resolve, reject) {
          db.query(sql, values, function (err, rows) {
            if (err) {
              reject(new Error(err));
            } else {
              resolve(rows);
            }
          });
        });
      }
    } catch (err) {
      winstonLogger.error('Database connection failed by: ' + err);
    }
  }
}

const database: any = new Database();
export let db = database.getDB();
