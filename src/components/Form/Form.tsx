const Form = (): JSX.Element => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={onSubmitHandler}
    >
      <div className="form__control">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className="form__control">
        <button type="submit">create</button>
      </div>
    </form>
  );
};

export default Form;
