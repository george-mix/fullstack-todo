import { TypeOf } from "zod";
import { createTodoSchema, deleteTodoSchema } from "./todo.validation";

export interface Todo {
  text: string;
}

export type CreateTodoValidation = TypeOf<typeof createTodoSchema>;
export type DeleteTodoValidation = TypeOf<typeof deleteTodoSchema>;
