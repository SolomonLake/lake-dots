import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { playersReducer } from "./players/playersReducer";

export const rootReducer = combineReducers({ players: playersReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
