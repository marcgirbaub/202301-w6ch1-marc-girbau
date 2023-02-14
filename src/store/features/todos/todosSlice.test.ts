import { TodosListStructure, TodosStructure } from "../../../data/types";
import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  loadTodosActionCreator,
  todosReducer,
  toggleTodoActionCreator,
} from "./todosSlice";

describe("Given a todosReducer", () => {
  const firstTodo: TodosStructure = {
    id: 1,
    name: "Go to bed",
    isDone: false,
  };
  const secondTodo: TodosStructure = {
    id: 2,
    name: "Buy groceries",
    isDone: true,
  };
  const todosToLoad: TodosListStructure = [firstTodo, secondTodo];

  describe("When it receives a list of two todo's and the loadTodos actions", () => {
    test("Then it should return a list of these two todo's", () => {
      const loadTodosAction = loadTodosActionCreator(todosToLoad);
      const expectedLoadedTodos: TodosListStructure = todosToLoad;

      const newTodos = todosReducer([], loadTodosAction);

      expect(newTodos).toStrictEqual(expectedLoadedTodos);
    });
  });

  describe("When it receives a toggleTodo action on the firstTodo", () => {
    test("Then it should return a new list of todo's with the isDone property of the firstTodo toggled", () => {
      const toggleTodoAction = toggleTodoActionCreator(firstTodo);
      const expectedTodos: TodosListStructure = [
        {
          id: 1,
          name: "Go to bed",
          isDone: true,
        },
        secondTodo,
      ];

      const newTodos = todosReducer(todosToLoad, toggleTodoAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });

  describe("When it receives a deleteTodo action on the firstTodo", () => {
    test("Then it should return a new list of todo's with only the secondTodo", () => {
      const deleteTodoAction = deleteTodoActionCreator(firstTodo);
      const expectedTodos: TodosListStructure = [secondTodo];

      const newTodos = todosReducer(todosToLoad, deleteTodoAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });

  describe("When it receives a createTodo action with a `Go to bed` todo", () => {
    test("Then it should return a new list of todo's including the `Go to bed` todo", () => {
      const goToBedToDo: TodosStructure = {
        id: 3,
        name: "Go to bed",
        isDone: true,
      };
      const expectedTodos: TodosListStructure = [...todosToLoad, goToBedToDo];

      const createTodoAction = createTodoActionCreator(goToBedToDo);
      const newTodos = todosReducer(todosToLoad, createTodoAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });
});
