import { model, Schema } from "mongoose";
import { Todo } from "./todo.interface";

const todoSchema = new Schema<Todo>({
  text: { type: String, required: true },
});

export const TodoModel = model<Todo>("Todo", todoSchema);
