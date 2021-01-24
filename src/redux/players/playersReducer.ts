import { ReducerAction } from "react";
import { PlayersActionTypes } from "./playersActionTypes";

const initialState = {};

export function playersReducer(
  state = initialState,
  action: PlayersActionTypes,
) {
  switch (action.type) {
    case "ADD_PLAYER": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
