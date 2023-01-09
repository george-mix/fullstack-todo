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
const { postTodo, getTodo, updateTodo } = useTodoStore();

const todoText = ref("");

const isNewRoute = route.params.id === "new";
const routeId = route.params.id;
const isRouteIdString = typeof routeId === "string";

if (!isNewRoute && isRouteIdString) {
  const todo = await getTodo(routeId);
  if (!todo) {
    router.push("/");
  }

  todoText.value = todo?.text || "";
}

const handleSubmit = async (todoPayload: TodoPayload) => {
  if (isNewRoute) {
    const todo = await postTodo(todoPayload);
    todo?._id && router.push(`/todos/${todo._id}`);
  }

  if (!isNewRoute && isRouteIdString) {
    await updateTodo(routeId, todoPayload);
  }
};

const handleGoBack = () => {
  router.push("/");
};
</script>
