import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.tsx";
import "./index.css";

// store.dispatch({
//   type: "FETCH_ALL_CHARACTERS",
//   payload: { dispatcher: store.dispatch }
// });
// store.dispatch({
//   type: "CHARACTERS_FETCH:STATUS",
//   payload: { status: "LOADING" }
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
