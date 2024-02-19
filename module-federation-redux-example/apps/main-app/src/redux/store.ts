import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";

const createStore = () => {
  const staticReducers = {
    counter,
  };

  const asyncReducers: { [index: string]: Reducer } = {};

  const store = configureStore({
    reducer: {
      ...staticReducers,
    },
  });

  function injectReducer(key: string, asyncReducer: Reducer) {
    asyncReducers[key] = asyncReducer;
    store.replaceReducer(
      combineReducers({
        ...staticReducers,
        ...asyncReducers,
      })
    );
  }

  return {
    store,
    injectReducer,
  };
};

export default createStore;
