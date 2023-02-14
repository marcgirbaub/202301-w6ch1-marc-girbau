import { render, screen } from "@testing-library/react";
import { TodosStructure } from "../../data/types";
import { Wrapper } from "../../mocks/Wrapper";
import Todo from "./Todo";

describe("Given a Todo component", () => {
  describe("When rendered with a `Go to bed` todo", () => {
    const goToBedToDo: TodosStructure = {
      id: 3,
      name: "Go to bed",
      isDone: true,
    };

    test("Then it should show a heading wit `Go to bed`", () => {
      const expectedTodoName = goToBedToDo.name;
      const headingLevel = 3;

      render(
        <Wrapper>
          <Todo todo={goToBedToDo} />
        </Wrapper>
      );

      const todoName = screen.getByRole("heading", {
        level: headingLevel,
        name: expectedTodoName,
      });

      expect(todoName).toBeInTheDocument();
    });

    test("Then it should show a button with the icon `❌`", () => {
      const expectedIcon = "❌";

      render(
        <Wrapper>
          <Todo todo={goToBedToDo} />
        </Wrapper>
      );

      const todoIcon = screen.getByRole("button", { name: expectedIcon });

      expect(todoIcon).toBeInTheDocument();
    });
  });
});
