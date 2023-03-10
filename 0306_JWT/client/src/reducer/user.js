import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "apis/@core";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

// userSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state, action) {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});
const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;

export const join = createAsyncThunk("user/join", async (data) => {
  const response = await Axios.post("/register", {
    email: data.email,
    password: data.password,
  });
  return response.data;
});

/*
  https://m.blog.naver.com/dlaxodud2388/222625208050
  https://zaraza.tistory.com/113

createSlice - redux에서 reducer와 action을 합쳐놓은 것
              현재 slice의 state값에 값들이 변경되게 할 로직들
              (비동기적인 동작들(회원가입, 로그인 등))
              immer 내장되어있음
name: ,
initialState,
reducers: ,
extraReducers: (builder) => {
  builder
                요청 
  .addCase(이름.pending, (state, action) => {
    ...
  })
                성공
  .addCase(이름.fulfilled, (state, action) => {
    ...
  })
                실패
  .addCase(이름.rejected, (state, action) => {
    ...
  })
}
*/
