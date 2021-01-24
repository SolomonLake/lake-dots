import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTypedSelector } from "./redux/reducers/rootReducer";
import { useTypedDispatch } from "./redux/store";
import { addPlayer } from "./redux/players/playersActionCreator";

export function App() {
  const players = useTypedSelector((state) => state.players);
  const dispatch = useTypedDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <body>
        <h1>Player Count: {Object.values(players).length}</h1>
        <button onClick={() => dispatch(addPlayer({ name: "Mike" }))}>
          Add Player
        </button>
      </body>
    </div>
  );
}
