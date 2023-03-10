import { userSlice } from "./user";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ reducer: userSlice.reducer });

export default rootReducer;
