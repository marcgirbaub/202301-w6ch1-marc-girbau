import { renderHook } from "@testing-library/react";
import { TodosStructure } from "../../data/types";
import { Wrapper } from "../../mocks/Wrapper";
import useApi from "./useApi";

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

const goToBedToDo: TodosStructure = {
  id: 3,
  name: "Go to bed",
  isDone: true,
};

describe("Given the useApi custom", () => {
  describe("When the getTodoList function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getTodoList },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await getTodoList();

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });

  describe("When the toggleTodo function is called with the go to bed to do", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { toggleTodo },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await toggleTodo(goToBedToDo);

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });

  describe("When the deleteTodo function is called with the go to bed to do", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteTodo },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await deleteTodo(goToBedToDo);

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });

  describe("When the createTodo function is called with the go to bed to do", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { createTodo },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await createTodo(goToBedToDo);

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
