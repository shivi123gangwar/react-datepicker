import React from "react";

class MonthDate extends React.Component {
  currDate = new Date().getDate();

  state = {
    todayDate: new Date().getDate(),
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    activeIndex: 0,
  };
  getMonthDate = (month, year) => {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    let weekDateArr = [[]];
    const lastOfMonth = new Date(year, month + 1, 0);
    const lastDayOfMonth = lastOfMonth.getDay();
    let dateArr = weekDateArr[0];

    let currentDate = firstOfMonth;
    for (let j = 0; j < 6; j++) {
      if (firstDayOfWeek == 0) {
        dateArr.push(null);
      }
    }
    for (let i = 1; i < firstDayOfWeek; i++) {
      dateArr.push(null);
    }

    const WEEK_LENGTH = 7;
    while (currentDate.getMonth() === month) {
      if (dateArr.length === WEEK_LENGTH) {
        dateArr = [];
        weekDateArr.push(dateArr);
      }

      dateArr.push(currentDate.getDate());
      currentDate = new Date(year, month, currentDate.getDate() + 1);
    }
    if (dateArr.length !== WEEK_LENGTH) {
      for (let j = lastDayOfMonth + 1; j <= 7; j++) {
        dateArr.push(null);
      }
    }
    while (dateArr.length < 7) {
      dateArr.push(currentDate.getDate());
    }
    return weekDateArr;
  };

  render() {
    const months = this.props.month;
    var weekLists = [];
    return months.map((month, index) => {
      {
        weekLists = this.getMonthDate(index, this.state.year);
      }
      return (
        <React.Fragment>
          <div className="month-date-container">
            <div
              className={
                this.props.activeIndex === index
                  ? `active-month month-date`
                  : `month-date`
              }
            >
              {weekLists.map((weekList, weekListIndex) => (
                <div className="date-container" key={weekListIndex}>
                  {weekList.map((weekDate, weekDateIndex) => (
                    <span
                      className={
                        weekDate === this.state.todayDate &&
                        this.state.month === index
                          ? `date active-date`
                          : `date`
                      }
                    >
                      {weekDate}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    });
  }
}
export default MonthDate;
