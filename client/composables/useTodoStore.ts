import type { TodoItem, TodoPayload } from "~~/types/todos";

export const useTodoStore = () => {
  const todos = useState<TodoItem[]>("todos", () => []);

  const getTodo = async (id: TodoItem["_id"]) => {
    const { data } = await useFetch<TodoItem>(`/api/todos/${id}`);

    return data.value;
  };

  const getTodos = async () => {
    const { data } = await useFetch<TodoItem[]>("/api/todos");

    if (data.value) {
      todos.value = data.value;
    }
  };

  const postTodo = async (payload: TodoPayload) => {
    const { data } = await useFetch<TodoItem>("/api/todos", {
      method: "POST",
      body: payload,
    });

    if (data.value) {
      todos.value.push(data.value);
    }

    return data.value;
  };

  const updateTodo = async (id: TodoItem["_id"], payload: TodoPayload) => {
    const { data } = await useFetch<TodoItem>(`/api/todos/${id}`, {
      method: "PUT",
      body: payload,
    });

    return data.value;
  };

  const deleteTodo = async (id: TodoItem["_id"]) => {
    await useFetch<Response>(`/api/todos/${id}`, {
      method: "DELETE",
    });
    await getTodos();
  };

  return { todos, getTodos, postTodo, getTodo, updateTodo, deleteTodo };
};
