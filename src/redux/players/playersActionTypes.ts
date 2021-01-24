import { Player } from "./playerTypes";

// export const ADD_PLAYER = "ADD_PLAYER";
export type AddPlayerAction = {
  type: "ADD_PLAYER";
  player: Player;
};

export type PlayersActionTypes = AddPlayerAction;
