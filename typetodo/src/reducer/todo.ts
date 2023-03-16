import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  contents: string;
  checked: boolean;
}

const initialState: TodoItem[] = [
  {
    id: 1,
    contents: "메모장",
    checked: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // action타입은 name이 앞에 붙은 형태(user/setUser, todo/setTodo)로 생성된다
    addTodo(state, action: PayloadAction<string>) {
      state.push({ id: 1, contents: action.payload, checked: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice;
