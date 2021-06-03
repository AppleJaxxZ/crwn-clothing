import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//Provider is a redux component that once is passed "store" will give the component
// the ability to dispatch redux state through the wrapped app inside of Provider and our application>
import { Provider } from "react-redux";
//Store is literally our redux store. persistor is our localley saved storage.
import { store, persistor } from "./redux/store";
//enables Persist to be used in our app and gives us component to wrap our app in.
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
