import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";

import { Fetcher,Action } from "./reducers/";

function App() {
  const dispatch = useDispatch();
  console.log(Fetcher);
  React.useEffect(() => {
    dispatch(Fetcher.initial());
    dispatch(Action.setOperatorData());

  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
