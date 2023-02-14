import { render, screen } from "@testing-library/react";
import App from "./App";
import { Wrapper } from "./mocks/Wrapper";
import GlobalStyles from "./styles/GlobalStyles";

describe("Given a App component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the text `To Do List APP`", () => {
      const expectedHeader = `To Do List APP`;
      const levelOfHeading = 1;

      render(
        <Wrapper>
          <GlobalStyles />
          <App />
        </Wrapper>
      );

      const header = screen.getByRole("heading", {
        name: expectedHeader,
        level: levelOfHeading,
      });

      expect(header).toBeInTheDocument();
    });
  });

  test("Then it should show a To Do list", () => {
    render(
      <Wrapper>
        <GlobalStyles />
        <App />
      </Wrapper>
    );

    const listOfTodos = screen.getByRole("list");

    expect(listOfTodos).toBeInTheDocument();
  });
});
