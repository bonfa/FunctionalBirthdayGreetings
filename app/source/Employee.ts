import {MyDate} from "./MyDate";

export class Employee {
  public readonly name: String;
  public readonly surname: String;
  public readonly dateOfBirth: MyDate;
  public readonly email: String;

  constructor(name: String, surname: String, dateOfBirth: MyDate, email: String) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }
}