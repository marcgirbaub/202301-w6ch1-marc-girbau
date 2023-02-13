import { useEffect } from "react";
import TodosList from "./components/TodosList/TodosList";
import useApi from "./hooks/useApi/useApi";

const App = (): JSX.Element => {
  const { getTodoList } = useApi();

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <>
      <h1>To Do List</h1>
      <TodosList />
    </>
  );
};

export default App;
