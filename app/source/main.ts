import {Employee} from "./Employee";
import {Email} from "./Email";
import {MyDate} from "./MyDate";

/*
  1 - load employees
  2 - filter only the ones for which today is the birthday
  3 - create email
  4 - send email
 */

type Employees = () => Employee[];
type Date = () => MyDate;
type Emails = () => Email[];
type Void = () => void;

export const isBirthday: (employee: Employee) => (day: MyDate) => (boolean) =
  (employee: Employee) => (day => employee.dateOfBirth.month === day.month && employee.dateOfBirth.day === day.day);

export const filterEmployeesHavingBirthday: (employees: Employees) => (date: Date) => Employees =
  (employees: Employees) => {return (date: Date) => () => employees().filter(employee => isBirthday(employee)(date()))};

export const createBirthdayEmailsFor: (employees: Employees) => Emails = (employees: Employees) => {
  return () => employees().map(e => createBirthdayEmailFor(e))
};

const sendEmails: (emails: Emails) => Void =
  (emails: Emails) => () => { emails().forEach( email => console.log(`SUBJECT: ${email.subject}`+'\n'+`   TEXT: ${email.text}`))};


function createBirthdayEmailFor(employee: Employee) {
  return new Email(
    "Happy birthday!",
    `Happy birthday, dear ${employee.name}!`
  );
}

const removeOneDayFrom = (date: MyDate) => new MyDate(
  date.day - 1,
  date.month,
  date.year
);

const loadEmployees: Employees = () => [
  new Employee(
    "Paolo",
    "Rossi",
    today(),
    "email@email.com"
  ),
  new Employee(
    "Giuseppe",
    "Verdi",
    removeOneDayFrom(today()),
    "another@email.com"
  )
];

const today: Date = () => new MyDate(31, 10, 2019);

const compose:(f: Employees) => (g: (employees: Employees) => (date: Date) => Employees) => (date: Date) => Employees =
              (f: Employees) => (g: (employees: Employees) => (date: Date) => Employees) => g(f);

const compose2:(f: Employees) => (g: (employees: Employees) => Emails) => Emails =
               (f: Employees) => (g: (employees: Employees) => Emails) => g(f);

const compose3:(f: Emails) => (g: (emails: Emails) => Void) => Void =
               (f: Emails) => (g: (emails: Emails) => Void) => g(f);


// create the program
const program = compose3(compose2(compose(loadEmployees)(filterEmployeesHavingBirthday)(today))(createBirthdayEmailsFor))(sendEmails);

// execute the program
program();

