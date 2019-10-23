import { ConfigManager } from '../utils/configManager';
import { IError, } from "../models/Interfaces";
const nodemailer = require('nodemailer');

export class EmailController {
  protected configManager: ConfigManager = ConfigManager.getInstance();
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      }
    });
  }

  public notifyErrors(error: IError) {
    this.emailOptions.text = JSON.stringify(error);
    this.transporter.sendMail(this.emailOptions, function (err, info) {
      if(err)
        console.log('failed to send email: ',err)
      else
        console.log('Send email success: ',info);
   });
  }
}