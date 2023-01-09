<template>
  <PageHeading>Todo List</PageHeading>
  <span v-if="!todos.length" class="center">
    App doesn't have any todos yet!
  </span>
  <TodoList :todos="todos" />
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/composables/useTodoStore";

const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos.value);
todoStore.getTodos();
</script>
