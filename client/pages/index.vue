<template>
  <PageHeading>{{ textContent.todoList }}</PageHeading>

  <div class="center">
    <Button @click="handleCreateTodo" color="primary">
      {{ textContent.createNewTodo }}
    </Button>
  </div>

  <span v-if="!todos.length" class="center">
    App doesn't have any todos yet!
  </span>

  <TodoList :todos="todos" />
</template>

<script setup lang="ts">
const textContent = useTextContent();
const todoStore = useTodoStore();
const router = useRouter();

const todos = computed(() => todoStore.todos.value);
todoStore.getTodos();

const handleCreateTodo = () => {
  router.push("/todos/new");
};
</script>
