import { useState } from "react";
import { TodosStructure } from "../../data/types";
import useApi from "../../hooks/useApi/useApi";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { createTodo } = useApi();

  const [name, setName] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const newId = Date.now();

    const newTodo: TodosStructure = { id: newId, name: name, isDone: false };

    createTodo(newTodo);

    setName("");
  };

  const handleTodo = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  return (
    <FormStyled
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={onSubmitHandler}
    >
      <div className="form__control">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleTodo} value={name} />
      </div>
      <div className="form__control">
        <button type="submit">create</button>
      </div>
    </FormStyled>
  );
};

export default Form;
