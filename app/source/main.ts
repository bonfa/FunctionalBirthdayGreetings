import {Employee} from "./Employee";
import {Email} from "./Email";
import {MyDate} from "./MyDate";

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

export const isBirthday: (employee: Employee) => ((day: MyDate) => (boolean)) =
  (employee: Employee) => (day => employee.dateOfBirth.month === day.month && employee.dateOfBirth.day === day.day);

export const filterEmployeesHavingBirthday: (employees: () => Employee[]) => ((date: () => MyDate) => Employee[]) =
  (employees: () => Employee[]) => {return (date: () => MyDate) => employees().filter(employee => isBirthday(employee)(date()))};

function createBirthdayEmailFor(employee: Employee) {
  return new Email(
    "Happy birthday!",
    `Happy birthday, dear ${employee.name}!`
  );
}

export const createBirthdayEmailsFor: (employees: () => Employee[]) => () => Email[] = (employees: () => Employee[]) => {
  return () => employees().map(e => createBirthdayEmailFor(e))
};

const sendEmails: (emails: () => Email[]) => () => void =
  (emails: () => Email[]) => () => { emails().forEach( email => console.log(`SUBJECT: ${email.subject}`+'\n'+`   TEXT: ${email.text}`))};

const today = () => new MyDate(31, 10, 2019);

// create the program
const emailSender = sendEmails(
  () => createBirthdayEmailsFor(
    () => filterEmployeesHavingBirthday(() => loadEmployees())(() => today())
  )()
);

// execute the program
emailSender();

