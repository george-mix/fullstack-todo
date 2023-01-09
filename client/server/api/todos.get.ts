import { API_BASE_URL } from "~~/server/src/data";
import { TodoArrayValidation } from "~~/server/src/validationTypes";

export default defineEventHandler(async () => {
  const response = await fetch(`${API_BASE_URL}/todos`);
  const todos = await response.json();
  const result = TodoArrayValidation.parse(todos);

  return result;
});
