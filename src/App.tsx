import { useEffect } from "react";
import Form from "./components/Form/Form";
import TodosList from "./components/TodosList/TodosList";
import useApi from "./hooks/useApi/useApi";

const App = (): JSX.Element => {
  const { getTodoList } = useApi();

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <>
      <h1>To Do List APP</h1>
      <h2>Create to do</h2>
      <Form />
      <h2>List of to do's</h2>
      <TodosList />
    </>
  );
};

export default App;
