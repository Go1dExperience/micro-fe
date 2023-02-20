import React from 'react';
import ReactDOM from "react-dom";
import TextMaxLine from "./atoms/TextMaxline";

import "./index.css";

const App = () => (
  <div className="container">
    <TextMaxLine variant="h1" line={1}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repellendus quae possimus, aut nihil, accusantium voluptas sit aspernatur consectetur maxime aliquid recusandae facere enim! Culpa sint repellat ut aperiam deserunt.
    </TextMaxLine>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
