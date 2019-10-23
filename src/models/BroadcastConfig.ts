import { winstonLogger } from '../utils/logger';

export class BroadcastConfigModel {
  protected configManager: ConfigManager = ConfigManager.getInstance();

  constructor() {
  }

  public async updateConfig(config: IBroadcastConfig): Promise<any> {
    try {
      return (await db.any("UPDATE broadcast_config SET \
      badge = ?,\
      delay_sec= ?,\
      icon= ?,\
      image= ?,\
      message= ?,\
      repeat_min= ?,\
      tag= ?,\
      title= ?,\
      ttl= ?,\
      url= ?\
      ", [
        config.badge,
        config.delay_sec,
        config.title, 
        config.ttl,
        config.url
      ]))
    } catch (err) {
      winstonLogger.error("Failed to update broadcast config: ", err);
      return Promise.reject(err);
    }
  }

}
