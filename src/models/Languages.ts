import { winstonLogger } from '../utils/logger';
import { ILanguage } from './Interfaces';

export class LanguagesModel {
  protected configManager: ConfigManager = ConfigManager.getInstance();

  constructor() {
  }

  public async addLanguages(languages: ILanguage[], location_id: number) {
    languages.forEach(async (l) => {
      try {
        const res = (await db.any("INSERT IGNORE into languages SET code = ?, name = ?, native = ? \
        ;", 
         [
          l.code,
          l.name
         ]
          ));
          if (id) {
            await db.any("INSERT IGNORE into location_languages SET ? \
            ",{location_id: location_id, languages_id: id});
          }
       
      } catch (err) {
        winstonLogger.error('Failed to add languages: ', err);
      }
    });
  }

}