import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosListStructure, TodosStructure } from "../../../data/types";

export const initialTodos: TodosListStructure = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    loadTodos: (
      currentTodos: TodosListStructure,
      action: PayloadAction<TodosListStructure>
    ) => [...action.payload],
    toggleTodo: (
      currentTodos: TodosListStructure,
      action: PayloadAction<TodosStructure>
    ) => {
      currentTodos.map((todo) =>
        todo.id === action.payload.id
          ? (todo.isDone = !todo.isDone)
          : todo.isDone
      );
    },
  },
});

export const {
  loadTodos: loadTodosActionCreator,
  toggleTodo: toggleTodoActionCreator,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
