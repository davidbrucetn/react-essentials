import React from 'react';
import ReactDOM from 'react-dom';
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
  <>
    <App authorized={true} />
    {/* <AppTwo /> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
