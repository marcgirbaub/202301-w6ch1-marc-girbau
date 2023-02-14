import { TodosListStructure } from "../../../data/types";
import { store } from "../../index";
import { loadTodosActionCreator } from "./todosSlice";

describe("Given the todosSlice", () => {
  describe("When the dispatch is called with the action returned by the loadTodosActionCreator", () => {
    test("Then it should update the state of `todos` to the one passed as payload", () => {
      const todosToLoad: TodosListStructure = [
        { id: 1, name: "Go to bed", isDone: false },
      ];

      store.dispatch(loadTodosActionCreator(todosToLoad));

      const newTodosState = store.getState().todos;

      expect(newTodosState).toStrictEqual(todosToLoad);
    });
  });
});
