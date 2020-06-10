import React from "react";
import "../stylesheets/datepicker.css";
import Days from "./days";
import MonthDate from "./monthDate";
import MonthName from "./monthName";

class Datepicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MonthName />
      </React.Fragment>
    );
  }
}
export default Datepicker;
