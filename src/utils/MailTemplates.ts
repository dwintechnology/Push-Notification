class MailTemplates {

  constructor() { }

  public confirmAccount(confirmToken: string, email: string) {
    return {
      html: "",
      text: `Please confim your account ${confirmToken}`,
      subject: "Account confirmation",
      to: [
        {
          name: "User",
          email: email
        }
      ]
    };
  }

  public resetPassword(resetToken: string, email: string) {
    return {
      html: "",
      text: `Please navigate to link to change your password ${resetToken}`,
      subject: "Text Rover - Change Password",
      to: [
        {
          name: "User",
          email: email
        }
      ]
    };
  }
}
export const mailTemplates: MailTemplates = new MailTemplates();