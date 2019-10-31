console.log("It works!");

class MyDate {
  public readonly day: number;
  public readonly month: number;
  public readonly year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

class Employee {
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

class BirthdayEmail {
  public readonly subject: String;
  public readonly text: String;

  constructor(subject: String, text: String) {
    this.subject = subject;
    this.text = text;
  }
}

type EmployeePredicate = (employee: Employee) => boolean

/*
  1 - load employees
  2 - filter only the ones for which today is the birthday
  3 - create email
  4 - send email
 */

const loadEmployees: () => Employee[] = () => [];

const filterEmployeesForWhichTodayIsTheBirthday: (employees: Employee[]) => Employee[] = (_:  Employee[]) => [];

const createBirthdayEmailsFor: (employees: Employee[]) => BirthdayEmail[] = (_: Employee[]) => [];

const sendEmails: (email: BirthdayEmail[]) => void = (_:BirthdayEmail[]) => { /* no op */};

sendEmails(
  createBirthdayEmailsFor(
    filterEmployeesForWhichTodayIsTheBirthday(
      loadEmployees(),
    )
  )
);
