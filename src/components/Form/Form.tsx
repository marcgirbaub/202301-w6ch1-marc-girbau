const Form = (): JSX.Element => {
  return (
    <form className="form" autoComplete="off" noValidate>
      <div className="form__control">
        <label htmlFor="id">id: </label>
        <input type="text" id="id" />
      </div>
      <div className="form__control">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className="form__control">
        <button type="submit">create to do</button>
      </div>
    </form>
  );
};

export default Form;
