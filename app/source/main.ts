import {Employee} from "./Employee";
import {Email} from "./Email";

console.log("It works!");

/*
  1 - load employees
  2 - filter only the ones for which today is the birthday
  3 - create email
  4 - send email
 */

const loadEmployees: () => Employee[] = () => [];

const filterEmployeesForWhichTodayIsTheBirthday: (employees: Employee[]) => Employee[] = (_:  Employee[]) => [];

const createBirthdayEmailsFor: (employees: Employee[]) => Email[] = (_: Employee[]) => [];

const sendEmails: (email: Email[]) => void = (_:Email[]) => { /* no op */};

sendEmails(
  createBirthdayEmailsFor(
    filterEmployeesForWhichTodayIsTheBirthday(
      loadEmployees(),
    )
  )
);
