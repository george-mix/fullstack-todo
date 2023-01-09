import { API_BASE_URL } from "~~/server/src/data";
import { TodoValidation } from "~~/server/src/validationTypes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const parsedBody = JSON.stringify(body);

  const response = await fetch(
    `${API_BASE_URL}/todos/${event.context.params.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: parsedBody,
    }
  );

  const todo = await response.json();
  const result = TodoValidation.parse(todo);

  return result;
});
