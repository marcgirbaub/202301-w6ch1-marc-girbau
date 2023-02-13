import { TodosStructure } from "../../data/types";

export interface TodoProps {
  todo: TodosStructure;
}

const Todo = ({ todo: { id, isDone, name } }: TodoProps): JSX.Element => {
  return (
    <div>
      <button>V</button>
      <span>{name}</span>
      <button>X</button>
    </div>
  );
};

export default Todo;
