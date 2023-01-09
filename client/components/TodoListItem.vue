<template>
  <li class="todo">
    <p>{{ todo.text }}</p>
  </li>
</template>

<script setup lang="ts">
import type { TodoItem } from "~~/types/todos";

defineProps<{
  todo: TodoItem;
}>();
</script>

<style scoped>
.todo {
  border: 1px solid var(--text);
  border-radius: 3px;
  padding: 4px;
  margin: 8px 0px;
  word-wrap: break-word;
}
</style>
