import { useCallback } from "react";
import { TodosListStructure } from "../../data/types";
import { loadTodosActionCreator } from "../../store/features/todos/todosSlice";
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

  return { getTodoList };
};

export default useApi;
