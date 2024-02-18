import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";

const createStore = () => {
  const staticReduces = {
    counter,
  };

  const asyncReducers: { [index: string]: Reducer } = {};

  const store = configureStore({
    reducer: {
      ...staticReduces,
    },
  });

  function injectReducer(key: string, asyncReducer: Reducer) {
    asyncReducers[key] = asyncReducer;
    store.replaceReducer(
      combineReducers({
        ...staticReduces,
        ...asyncReducer,
      })
    );
  }

  return {
    store,
    injectReducer,
  };
};

export default createStore;
