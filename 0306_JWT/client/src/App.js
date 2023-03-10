import Routing from "router/Routing";
import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routing />
      </Provider>
    </>
  );
}

export default App;
