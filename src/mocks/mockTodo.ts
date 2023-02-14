import { TodosListStructure, TodosStructure } from "../data/types";

export const firstMockTodo: TodosStructure = {
  id: 1,
  name: "Go to the gym",
  isDone: false,
};

export const secondMockTodo: TodosStructure = {
  id: 2,
  name: "Clean the house",
  isDone: true,
};

export const thirdMockTodo: TodosStructure = {
  id: 3,
  name: "Make the bed",
  isDone: false,
};

export const mockTodosList: TodosListStructure = [
  firstMockTodo,
  secondMockTodo,
  thirdMockTodo,
];
