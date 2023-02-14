import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;

  .form__control {
    button {
      background-color: #7eabbb;
      height: 100%;
      border-radius: 10px;
      padding: 0 1rem;
      font-weight: bold;
    }
  }
`;

export default FormStyled;
