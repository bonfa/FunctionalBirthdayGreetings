import {Employee} from "./Employee";
import {Email} from "./Email";
import {MyDate} from "./MyDate";

// console.log("It works!");

/*
  1 - load employees
  2 - filter only the ones for which today is the birthday
  3 - create email
  4 - send email
 */

const loadEmployees: () => Employee[] = () => [
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

const removeOneDayFrom = (date: MyDate) => new MyDate(
  date.day - 1,
  date.month,
  date.year
);

export const isBirthday = (employee: Employee, today: MyDate): boolean => employee.dateOfBirth.month === today.month && employee.dateOfBirth.day === today.day;

export const filterEmployeesHavingBirthdayCurry: (employees: Employee[]) => (date: MyDate) => Employee[] = (employees:  Employee[]) => {
  return (date: MyDate) => employees.filter(employee => isBirthday(employee, date))
};

export const filterEmployeesHavingBirthday: (employees: Employee[], today: MyDate) => Employee[] = (employees:  Employee[], today: MyDate) => {
  return employees.filter(employee => isBirthday(employee, today))
};

function createBirthdayEmailFor(employee: Employee) {
  return new Email(
    "Happy birthday!",
    `Happy birthday, dear ${employee.name}!`
  );
}

export const createBirthdayEmailsFor: (employees: Employee[]) => Email[] = (employees: Employee[]) => {
  return employees.map(e => createBirthdayEmailFor(e))
};

const sendEmails: (emails: Email[]) => void = (emails:Email[]) => { emails.forEach( email => console.log(`SUBJECT: ${email.subject}`+'\n'+`   TEXT: ${email.text}`))};

const today = () => new MyDate(31, 10, 2019);

sendEmails(
  createBirthdayEmailsFor(
    filterEmployeesHavingBirthday(loadEmployees(),today())
  )
);

