import {filterEmployeesForWhichTodayIsTheBirthday} from "../source/main";
import {MyDate} from "../source/MyDate";
import {Employee} from "../source/Employee";

describe('filterEmployeesForWhichTodayIsTheBirthday', () => {
  it('one employee - no birthday', () => {
    let filtered = filterEmployeesForWhichTodayIsTheBirthday([anEmployeeWithBirthday(removeOneDayFrom(today()))], today());

    expect(filtered).toEqual([]);
  });

  it('one employee - birthday', () => {
    let filtered = filterEmployeesForWhichTodayIsTheBirthday([anEmployeeWithBirthday(removeTenYearFrom(today()))], today());

    expect(filtered).toEqual([anEmployeeWithBirthday(removeTenYearFrom(today()))]);
  });

  it('many employees - one birthday', () => {
    let filtered = filterEmployeesForWhichTodayIsTheBirthday(
      [
        anEmployeeWithBirthday(removeOneDayFrom(today())),
        anEmployeeWithBirthday(removeTenYearFrom(today()))
      ],
      today()
    );

    expect(filtered).toEqual([anEmployeeWithBirthday(removeTenYearFrom(today()))]);
  });
});

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
