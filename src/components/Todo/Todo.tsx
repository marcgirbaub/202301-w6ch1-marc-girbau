import { TodosStructure } from "../../data/types";
import useApi from "../../hooks/useApi/useApi";
import TodosStyled from "./TodoStyled";

export interface TodoProps {
  todo: TodosStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const { toggleTodo } = useApi();

  const getCheck = () => {
    return todo.isDone ? "✅" : "☑️";
  };

  return (
    <TodosStyled className="todo">
      <button className="todo__check" onClick={() => toggleTodo(todo)}>
        {getCheck()}
      </button>
      <span className="todo__name">{todo.name}</span>
      <button className="todo__delete">❌</button>
    </TodosStyled>
  );
};

export default Todo;
