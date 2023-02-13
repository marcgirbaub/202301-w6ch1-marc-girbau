import { useEffect } from "react";
import "./App.css";
import TodosList from "./components/TodosList/TodosList";
import useApi from "./hooks/useApi/useApi";

const App = (): JSX.Element => {
  const { getTodoList } = useApi();

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <div>
      <TodosList />
    </div>
  );
};

export default App;
