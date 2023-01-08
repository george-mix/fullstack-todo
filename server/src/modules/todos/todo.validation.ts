import { object, string } from "zod";

const todoSchemaBody = {
  body: object({
    text: string(),
  }),
};

const todoSchemaParams = {
  params: object({
    _id: string(),
  }),
};

export const createTodoSchema = object({ ...todoSchemaBody });
export const deleteTodoSchema = object({ ...todoSchemaParams });
export const updateTodoSchema = object({
  ...todoSchemaBody,
  ...todoSchemaParams,
});
