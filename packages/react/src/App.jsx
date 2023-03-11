import React from "react";
import ReactDOM from "react-dom";
import { Chart } from "./atoms/Chart";
import InfoCard from "./atoms/InfoCard";
import Stepper from "./atoms/Stepper";
import { Table, HeadlessTable } from "./atoms/Table";
import TextInput from "./atoms/TextInput";
import TextMaxLine from "./atoms/TextMaxline";
import "./index.css";

const App = () => (
  <div className="container">
    {/* <TextMaxLine variant="h1" line={1}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repellendus
      quae possimus, aut nihil, accusantium voluptas sit aspernatur consectetur
      maxime aliquid recusandae facere enim! Culpa sint repellat ut aperiam
      deserunt.
    </TextMaxLine>
    <TextInput variant="outlined" label="Input" /> */}
    <TextInput variant="outlined" label="Input" />
    {/* <Table />
    <Chart />
    <InfoCard
      title="Total IPs"
      amount={539}
      subtitle="In your Portfolio"
      canViewAll
      canAddNew
    />
    <Stepper /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
