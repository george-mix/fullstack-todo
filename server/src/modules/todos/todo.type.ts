import { TypeOf } from "zod";
import { createTodoSchema } from "./todo.validation";

export interface Todo {
  text: string;
}

export type CreateTodoValidation = TypeOf<typeof createTodoSchema>;
