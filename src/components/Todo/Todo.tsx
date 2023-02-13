import { TodosStructure } from "../../data/types";
import TodosStyled from "./TodoStyled";

export interface TodoProps {
  todo: TodosStructure;
}

const Todo = ({ todo: { id, isDone, name } }: TodoProps): JSX.Element => {
  const getCheck = () => {
    return isDone ? "✅" : "☑️";
  };

  return (
    <TodosStyled className="todo">
      <button className="todo__check">{getCheck()}</button>
      <span className="todo__name">{name}</span>
      <button className="todo__delete">❌</button>
    </TodosStyled>
  );
};

export default Todo;
