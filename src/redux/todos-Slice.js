import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todos.push(action.payload);
    },
    removeTodo: (state, { payload }) => {
      console.log(payload);
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
