import { object, string, array } from "zod";

export const TodoValidation = object({
  _id: string(),
  text: string(),
});

export const TodoArrayValidation = array(TodoValidation);
