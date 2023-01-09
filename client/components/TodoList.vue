<template>
  <ul class="list">
    <TodoListItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </ul>
</template>

<script setup lang="ts">
import type { TodoItem } from "~~/types/todos";

defineProps<{
  todos: TodoItem[];
}>();
</script>

<style scoped>
.list {
  padding: 10px 0px;
}
</style>
