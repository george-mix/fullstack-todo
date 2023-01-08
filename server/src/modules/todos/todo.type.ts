import { TypeOf } from "zod";
import {
  createTodoSchema,
  deleteTodoSchema,
  updateTodoSchema,
} from "./todo.validation";

export interface Todo {
  text: string;
}

export type CreateTodoValidation = TypeOf<typeof createTodoSchema>;
export type DeleteTodoValidation = TypeOf<typeof deleteTodoSchema>;
export type UpdateTodoValidation = TypeOf<typeof updateTodoSchema>;
