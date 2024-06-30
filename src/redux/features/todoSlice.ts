import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type TTodos = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodos[];
};

const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { AddTodo } = todoSlice.actions;

export default todoSlice.reducer;
