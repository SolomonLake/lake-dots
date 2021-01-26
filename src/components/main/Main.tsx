import React from "react";
import { useTypedSelector } from "../../redux/rootReducer";
import { useTypedDispatch } from "../../redux/store";
import { addPlayer } from "../../redux/players/playersActionCreator";
import { Button } from "antd";

export const Main = () => {
  const players = useTypedSelector((state) => state.players);
  const dispatch = useTypedDispatch();
  return (
    <div className="App">
      <h1>Player Count: {Object.values(players).length}</h1>
      <Button
        type="primary"
        onClick={() => dispatch(addPlayer({ name: "Mike" }))}
      >
        Button
      </Button>
    </div>
  );
};
