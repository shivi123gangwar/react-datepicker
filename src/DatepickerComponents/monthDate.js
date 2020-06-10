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
    console.log(this.state.todayDate);
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    let weekDateArr = [[]];
    const lastOfMonth = new Date(year, month + 1, 1);
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
    for (let j = lastDayOfMonth; j <= 7; j++) {
      dateArr.push(null);
    }
    while (dateArr.length < 7) {
      dateArr.push(currentDate.getDate());
      // console.log(dateArr);
    }

    console.log(weekDateArr);
    return weekDateArr;
  };

  render() {
    const months = this.props.month;
    console.log(this.getMonthDate(2, 2020));
    console.log(months);
    // for (let item = 0; item < this.props.month.length; item++) {

    // var weekLists = this.getMonthDate(item, this.state.year);
    // console.log(item);
    var weekLists = [];
    return months.map((month, index) => {
      {
        console.log(month);
        weekLists = this.getMonthDate(index, this.state.year);
        console.log(weekLists);
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
              {weekLists.map((weekList, index) => (
                <div className="date-container" key={index}>
                  {weekList.map((weekDate) => (
                    <span
                      className={
                        weekDate === this.state.todayDate
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
