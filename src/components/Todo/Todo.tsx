import { TodosStructure } from "../../data/types";
import { toggleTodoActionCreator } from "../../store/features/todos/todosSlice";
import { useAppDispatch } from "../../store/hooks";
import TodosStyled from "./TodoStyled";

export interface TodoProps {
  todo: TodosStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleTodo = (todoToToggle: TodosStructure) => {
    dispatch(toggleTodoActionCreator(todoToToggle));
  };

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
