import {Employee} from "./Employee";
import {Email} from "./Email";
import {MyDate} from "./MyDate";

console.log("It works!");

/*
  1 - load employees
  2 - filter only the ones for which today is the birthday
  3 - create email
  4 - send email
 */

const loadEmployees: () => Employee[] = () => [];

function isBirthday(employee: Employee, today: MyDate): boolean {
  return employee.dateOfBirth.month === today.month && employee.dateOfBirth.day === today.day;
}

export const filterEmployeesForWhichTodayIsTheBirthday: (employees: Employee[], today: MyDate) => Employee[] = (employees:  Employee[], today: MyDate) => {
  return employees.filter(employee => isBirthday(employee, today))
};

const createBirthdayEmailsFor: (employees: Employee[]) => Email[] = (_: Employee[]) => [];

const sendEmails: (email: Email[]) => void = (_:Email[]) => { /* no op */};

const today = () => new MyDate(31, 10, 2019);

sendEmails(
  createBirthdayEmailsFor(
    filterEmployeesForWhichTodayIsTheBirthday(
      loadEmployees(),
      today()
    )
  )
);


