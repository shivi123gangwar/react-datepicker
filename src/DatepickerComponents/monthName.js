import React from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import Days from "./days";
import MonthDate from "./monthDate";
class MonthName extends React.Component {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  state = {
    activeIndex: 0,
    // currentMonth: "",
    // month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  slideWidth = () => {
    return document.querySelector(".datepickerContainer").clientWidth;
  };
  goToPrevSlide = () => {
    if (this.state.activeIndex === 0) {
      return this.setState({
        activeIndex: this.months.length - 1,
        translateValue: this.state.translateValue + -this.slideWidth(),
      });
    }
    this.setState(() => ({
      activeIndex: this.state.activeIndex - 1,
      translateValue: this.state.translateValue + this.slideWidth(),
    }));
  };
  goToNextSlide = () => {
    if (this.state.activeIndex === this.months.length - 1) {
      return this.setState({
        activeIndex: 0,
        translateValue: 0,
      });
    } else {
      this.setState(() => ({
        activeIndex: this.state.activeIndex + 1,
        translateValue: this.state.translateValue + -this.slideWidth(),
      }));
    }
  };

  render() {
    return (
      <div className="datepickerContainer">
        <div className="datepicker-month">
          {this.months.map((month, index) => (
            <div>
              <h3
                className={
                  this.state.activeIndex === index
                    ? `monthname activeMonth`
                    : `monthname`
                }
              >
                {month} {this.state.year}
              </h3>
            </div>
          ))}
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
        <Days />
        <MonthDate month={this.months} activeIndex={this.state.activeIndex} />
      </div>
    );
  }
}
export default MonthName;
