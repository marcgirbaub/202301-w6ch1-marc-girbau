import { render, screen } from "@testing-library/react";
import { mockTodosList } from "../../mocks/mockTodo";
import { Wrapper } from "../../mocks/Wrapper";
import TodosList from "./TodosList";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockTodosList,
}));

describe("Given a TodosList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the todos of the list", () => {
      render(
        <Wrapper>
          <TodosList />
        </Wrapper>
      );

      const listTodos = screen.getAllByRole("listitem");

      listTodos.forEach((todo) => expect(todo).toBeInTheDocument());
    });

    test("Then it should show a list of todos", () => {
      render(
        <Wrapper>
          <TodosList />
        </Wrapper>
      );

      const listOfTodos = screen.getByRole("list");

      expect(listOfTodos).toBeInTheDocument();
    });
  });
});
