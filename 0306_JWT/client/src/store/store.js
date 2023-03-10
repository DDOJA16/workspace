import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});

/*
 const rootReducer = combineReducers({
  user: userSlice,
  item: detailSlice,
  table: searchTableSlice,
  footer: footerStateSlice,
});

  여러 reducer를 하나로 합칠 때 (store/index.js)
*/
