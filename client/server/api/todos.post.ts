import { TodoValidation } from "../src/validationTypes";

export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig();
  const API_BASE_URL = env.public.API_BASE_URL;

  const body = await readBody(event);
  const parsedBody = JSON.stringify(body);

  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: parsedBody,
  });

  const todo = await response.json();
  const result = TodoValidation.parse(todo);

  return result;
});
