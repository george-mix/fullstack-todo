<template>
  <PageHeading>
    {{ isNewRoute ? textContent.createNewTodo : textContent.updateTodo }}
  </PageHeading>
  <TodoRedactor @submit="handleSubmit" @cancel="handleGoBack" :text="todoText">
    <template #cancelButtonText>
      {{ textContent.cancel }}
    </template>
    <template #submitButtonText>
      {{ isNewRoute ? textContent.createNewTodo : textContent.updateTodo }}
    </template>
  </TodoRedactor>
</template>

<script setup lang="ts">
import type { TodoPayload } from "~~/types/todos";

const route = useRoute();
const router = useRouter();
const textContent = useTextContent();
const { postTodo } = useTodoStore();

const todoText = ref("");
const isNewRoute = route.params.id === "new";

const handleSubmit = async (todoPayload: TodoPayload) => {
  if (isNewRoute) {
    await postTodo(todoPayload);
  }
};

const handleGoBack = () => {
  router.push("/");
};
</script>

<style scoped></style>
