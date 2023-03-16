import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { Axios } from "apis/@core";

const initialState = {
  email: "",
  password: "",
  isLogin: false,
};

// createSlice()는 useState()와 용도 비슷
export const userSlice = createSlice({
  // slice 이름
  name: "user",
  initialState,
  reducers: {
    // 액션 타입은 슬라이스 이름을 접두어로 사용해서 자동 생성됩니다 -> 'user/액션이름'
    // 이에 상응하는 액션 타입을 가진 액션이 디스패치 되면 리듀서가 실행됩니다.
  },

  extraReducers: (builder) => {
    // crateSlice가 생성한 액션타입 외 다른 액션 타입에 응답할 수 있도록 합니다.
    // 외부의 액션을 찹조하려는 의도를 가지고 있습니다. (createAsyncThunk)
    builder.addCase(signUpAsync.pending, (state) => {
      state.isLogin = false;
    });
    builder.addCase(signUpAsync.fulfilled, (state, action) => {
      state.isLogin = true;
      alert("회원가입에 성공하셨습니다");
      return { state, email: action.payload.email };
    });
    builder.addCase(signUpAsync.rejected, (state, action) => {
      state.isLogin = false;
    });
  },
});

export const signUpAsync = createAsyncThunk("user/register", async (data) => {
  try {
    const response = await Axios.post("/register", {
      email: data.email,
      password: data.password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.reponse.data);
  }
});

// Slice 내보냄
export default userSlice.reducer;
//
export const getUserInfo = (state) => state;

/*
  https://github.com/light9639/Redux-Toolkit-Axios-AsyncThunk
  https://m.blog.naver.com/dlaxodud2388/222625208050
  https://zaraza.tistory.com/113
  https://steadily-worked.tistory.com/864

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
