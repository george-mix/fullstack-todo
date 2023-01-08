import { FilterQuery } from "mongoose";
import { TodoModel } from "./todo.model";
import type { Todo } from "./todo.type";

export const getTodos = () => {
  return TodoModel.find();
};

export const findTodo = async (query: FilterQuery<Todo>) => {
  return TodoModel.findOne(query);
};

export const createTodo = (todo: Todo) => {
  return TodoModel.create(todo);
};

export const deleteTodo = (query: FilterQuery<Todo>) => {
  return TodoModel.deleteOne(query);
};
