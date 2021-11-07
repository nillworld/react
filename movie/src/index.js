import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import AppTest from "./AppTest";
//import StateTest from './StateTest';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <StateTest/> */}
      <AppTest />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
