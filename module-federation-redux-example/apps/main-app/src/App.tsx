import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

import "./index.css";
import { decrement, increment } from "./redux/modules/counter";
import createStore from "./redux/store";

const { store, injectReducer } = createStore();

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector<ReturnType<typeof store.getState>, number>(
    (state) => state.counter.value
  );

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div>{counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
