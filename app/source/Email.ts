export class Email {
  public readonly subject: String;
  public readonly text: String;

  constructor(subject: String, text: String) {
    this.subject = subject;
    this.text = text;
  }
}