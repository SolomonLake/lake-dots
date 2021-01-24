import { ReducerAction } from "react";
import { PlayersActionTypes } from "./playersActionTypes";
import { PlayerMap } from "./playerTypes";

const initialState: PlayerMap = {};

export function playersReducer(
  state = initialState,
  action: PlayersActionTypes,
) {
  switch (action.type) {
    case "ADD_PLAYER": {
      return {
        ...state,
        [action.player.id]: action.player,
      };
    }
    default:
      return state;
  }
}
