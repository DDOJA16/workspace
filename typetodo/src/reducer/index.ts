import todoSlice from "./todo";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ reducer: todoSlice.reducer });

export default rootReducer;
