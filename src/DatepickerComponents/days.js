import React from "react";

class Days extends React.Component {
  weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  daysMarkup = this.weekDays.map((weekday, index) => {
    return (
      <div className="weekday" key={index}>
        {this.trimmedDay(weekday)}
      </div>
    );
  });
  trimmedDay(weekday) {
    return weekday.substr(0, 3);
  }
  render() {
    return (
      <React.Fragment>
        <div className="days-container">{this.daysMarkup}</div>
      </React.Fragment>
    );
  }
}
export default Days;
