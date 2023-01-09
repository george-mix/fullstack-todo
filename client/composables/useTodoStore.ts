import type { TodoItem } from "~~/types/todos";

export const useTodoStore = () => {
  const todos = useState<TodoItem[]>("todos", () => []);

  const getTodos = async () => {
    const { data } = await useFetch("/api/todos");

    if (data.value) {
      todos.value = data.value;
    }
  };

  return { todos, getTodos };
};
