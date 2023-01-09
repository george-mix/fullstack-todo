import { API_BASE_URL } from "~~/server/src/data";

export default defineEventHandler(async (event) => {
  const result = await fetch(
    `${API_BASE_URL}/todos/${event.context.params.id}`,
    {
      method: "DELETE",
    }
  );
  return result;
});
