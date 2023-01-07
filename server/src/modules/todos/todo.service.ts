import { TodoModel } from "./todo.model";

export const getTodos = () => {
  return TodoModel.find();
};
