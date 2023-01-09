import { API_BASE_URL } from "~~/server/src/data";
import { TodoValidation } from "~~/server/src/validationTypes";

export default defineEventHandler(async (event) => {
  const response = await fetch(
    `${API_BASE_URL}/todos/${event.context.params.id}`
  );

  const todo = await response.json();
  const result = TodoValidation.parse(todo);

  return result;
});
