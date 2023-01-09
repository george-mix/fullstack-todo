import { TodoArrayValidation } from "../src/validationTypes";

export default defineEventHandler(async () => {
  const env = useRuntimeConfig();
  const API_BASE_URL = env.public.API_BASE_URL;

  const response = await fetch(`${API_BASE_URL}/todos`);
  const todos = await response.json();
  const result = TodoArrayValidation.parse(todos);

  return result;
});
