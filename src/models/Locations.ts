import { winstonLogger } from '../utils/logger';
import { ConfigManager } from '../utils/configManager';

export class LocationsModel {
  protected configManager: ConfigManager = ConfigManager.getInstance();
  protected languagesModel: LanguagesModel = new LanguagesModel();

  constructor() {
  }

  public async getIpInfoId(ip_address: string) {
    try {
      let info = (await db.any("SELECT * from ip_infos where ip = ?", [ip_address]))[0];
      if (!info) {
        const location = (await db.any("SELECT id from locations where country_code = ? AND city= ?", [ip_info.country_code, ip_info.city]));
        let location_id = location && location.insertId;
        if (!location_id) {
          location_id = (await db.any("INSERT INTO locations SET continent_code = ?, \
          continent_name = ?, \
          country_code = ?, \
          country_name = ?, \
          region_code = ?, \
          city = ?, \
          calling_code = ?, \
          is_eu = ? \
          ;", [
              ip_info.city,
              ip_info.zip,
              ip_info.location.capital,
              ip_info.location.calling_code,
              ip_info.location.is_eu
            ])).insertId;
            this.languagesModel.addLanguages(ip_info.location.languages, location_id);
          }
        info = (await db.any("INSERT into ip_infos SET ip = ?, location_id = ?", [ip_address, location_id]));
        return info.insertId;
      }
      return info.id;
    } catch (err) {
      winstonLogger.error('Failed to get ip info id: ',err);
      return Promise.reject(err);
    }
  }
}