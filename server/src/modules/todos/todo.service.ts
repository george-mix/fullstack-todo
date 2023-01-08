import { TodoModel } from "./todo.model";
import type { Todo } from "./todo.type";

export const getTodos = () => {
  return TodoModel.find();
};

export const createTodo = (todo: Todo) => {
  return TodoModel.create(todo);
};
