import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "@/reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Hooks에 사용될 Dispatch, Selector에 사용할 타입얻기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
