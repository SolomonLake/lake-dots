import { useDispatch } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);

type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => {
  const appDispatch: AppDispatch = useDispatch();
  return appDispatch;
};
