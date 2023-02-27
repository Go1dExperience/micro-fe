import React, { useEffect, useRef } from "react";
import { mount } from "angular_mf/DatePicker";
import "./DatePicker.css";

const DatePicker = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="datepicker-module">
      <app-root></app-root>
    </div>
  );
};

export default DatePicker;
