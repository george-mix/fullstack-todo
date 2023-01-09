import type { TodoItem, TodoPayload } from "~~/types/todos";

export const useTodoStore = () => {
  const todos = useState<TodoItem[]>("todos", () => []);

  const getTodos = async () => {
    const { data } = await useFetch<TodoItem[]>("/api/todos");

    if (data.value) {
      todos.value = data.value;
    }
  };

  const postTodo = async (todoPayload: TodoPayload) => {
    const { data } = await useFetch<TodoItem>("/api/todos", {
      method: "POST",
      body: todoPayload,
    });

    if (data.value) {
      todos.value.push(data.value);
    }

    return data.value;
  };

  return { todos, getTodos, postTodo };
};
