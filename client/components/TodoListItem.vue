<template>
  <li class="todo">
    <p class="todo-text">{{ todo.text }}</p>
    <div class="todo-buttons">
      <Button @click="handleUpdateTodo" color="primary" outlined>
        {{ textContent.updateTodo }}
      </Button>
      <Button @click="handleDeleteTodo" color="secondary">
        {{ textContent.deleteTodo }}
      </Button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { TodoItem } from "~~/types/todos";

const props = defineProps<{
  todo: TodoItem;
}>();

const { deleteTodo } = useTodoStore();
const textContent = useTextContent();
const router = useRouter();

const handleUpdateTodo = () => {
  router.push(`/todos/${props.todo._id}`);
};

const handleDeleteTodo = async () => {
  await deleteTodo(props.todo._id);
};
</script>

<style scoped>
.todo {
  padding: 10px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
}

.todo-text {
  border: 1px solid var(--text);
  border-radius: 3px;
  padding: 4px;
  margin: 8px 0px;
  word-wrap: break-word;
  margin: 0px;
}

.todo-buttons {
  display: grid;
  gap: 10px;
}
</style>
