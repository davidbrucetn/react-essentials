import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return (
    <h1>This is the second App</h1>
  )
}

const checklist = ["boots", "headlamp", "tent"];

ReactDOM.render(
  // element, properties, ...children
  // React.createElement("h1", { style: { color: "blue" } }, "Hey, everyone!")
  <Router>
    <>
      <App authorized={true} login="davidbrucetn" />
      {/* <AppTwo /> */}
    </>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
