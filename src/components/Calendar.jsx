import { useState } from "react";
import Cal from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      {console.log("value------:", value)}
      <Cal onChange={setValue} value={value} />
    </div>
  );
}

export default Calendar;
