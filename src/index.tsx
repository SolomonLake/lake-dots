import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./components/main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/lake-dots">
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
