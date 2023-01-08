import { object, string } from "zod";

const todoSchemaBody = {
  body: object({
    text: string(),
  }),
};

export const createTodoSchema = object({ ...todoSchemaBody });
