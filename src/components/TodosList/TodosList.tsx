import Todo from "../Todo/Todo";
import TodosListStyled from "./TodosListStyled";

const TodosList = (): JSX.Element => {
  return (
    <TodosListStyled>
      <li>
        <Todo />
      </li>
    </TodosListStyled>
  );
};

export default TodosList;
