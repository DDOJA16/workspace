import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    password: "",
    name: "",
    number: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    userSearch: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});
/*
name은 리듀서 이름을 뭘로 할지 정하는거고, initialState는 이제 상태가 변하면 어떻게 실행될지 정하는 용도, 
reducer에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분이다. 로그인 버튼 클릭시 아이디,비밀번호를 변하게 하고 싶으니 로그인 함수를 만들어 준다
또한 state는 우리가 잡아놓은 초기값의 value를 가져오는 역할을 하고 action안에 payload랑 type은 우리가 바꾸고 싶은 데이터를 원하는 곳에다 넘겨주는 역할을 한다.
*/
