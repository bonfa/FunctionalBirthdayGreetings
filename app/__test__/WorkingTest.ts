import {isBirthday} from "../source/main";
import {MyDate} from "../source/MyDate";
import {Employee} from "../source/Employee";

describe('isBirthday', () => {
  it('same date', () => {
    expect(isBirthday(anEmployeeWithBirthday(today()), today())).toBe(true);
  });

  it('same day and months, different years', () => {
    expect(isBirthday(anEmployeeWithBirthday(removeTenYearFrom(today())), today())).toBe(true);
  });

  it('different months', () => {
    expect(isBirthday(anEmployeeWithBirthday(removeOneMonthFrom(today())), today())).toBe(false);
  });

  it('different days', () => {
    expect(isBirthday(anEmployeeWithBirthday(removeOneDayFrom(today())), today())).toBe(false);
  });
});

const removeOneMonthFrom = (date: MyDate) => new MyDate(
  date.day,
  date.month - 1,
  date.year
);

const today = (): MyDate => new MyDate(
  31,
  10,
  2019
);

const removeTenYearFrom = (date: MyDate) => new MyDate(
  date.day,
  date.month,
  date.year -10
);

const removeOneDayFrom = (date: MyDate) => new MyDate(
  date.day - 1,
  date.month,
  date.year
);

const anEmployeeWithBirthday = (date: MyDate) => new Employee(
  "name",
  "surname",
  date,
  "email"
);
