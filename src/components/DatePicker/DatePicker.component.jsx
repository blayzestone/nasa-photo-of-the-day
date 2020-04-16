import React from "react";

function DatePicker({ date, changeHandler }) {
  return(
    <input onChange={evt => changeHandler(evt)} type="date" name={date}/>
  );
}

export default DatePicker;