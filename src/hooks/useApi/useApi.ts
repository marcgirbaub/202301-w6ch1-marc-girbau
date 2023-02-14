import { useCallback } from "react";
import { TodosListStructure, TodosStructure } from "../../data/types";
import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  loadTodosActionCreator,
  toggleTodoActionCreator,
} from "../../store/features/todos/todosSlice";
import { useAppDispatch } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getTodoList = useCallback(async () => {
    try {
      const response = await fetch(
        "https://two02301-w6ch1-local-marc-girbau.onrender.com/todos"
      );

      const todoList = (await response.json()) as TodosListStructure;

      dispatch(loadTodosActionCreator(todoList));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const toggleTodo = useCallback(
    async (todo: TodosStructure) => {
      try {
        const response = await fetch(
          `https://two02301-w6ch1-local-marc-girbau.onrender.com/todos/${todo.id}`,
          {
            method: "PUT",
            body: JSON.stringify({ ...todo, isDone: !todo.isDone }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        if (!response.ok) {
          return;
        }

        dispatch(toggleTodoActionCreator(todo));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    async (todo: TodosStructure) => {
      try {
        const response = await fetch(
          `https://two02301-w6ch1-local-marc-girbau.onrender.com/todos/${todo.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          return;
        }

        dispatch(deleteTodoActionCreator(todo));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  const createTodo = useCallback(
    async (todo: TodosStructure) => {
      try {
        const response = await fetch(
          "`https://two02301-w6ch1-local-marc-girbau.onrender.com/todos/posts",
          {
            method: "POST",
            body: JSON.stringify({
              id: todo.id,
              name: todo.name,
              isDone: todo.isDone,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        if (!response.ok) {
          return;
        }

        dispatch(createTodoActionCreator(todo));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  return { getTodoList, toggleTodo, deleteTodo, createTodo };
};

export default useApi;
