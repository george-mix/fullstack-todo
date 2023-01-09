<template>
  <form class="form" @submit.prevent="handleSubmit">
    <textarea class="editor" v-model="todoText" />
    <div class="form-controls">
      <Button @click="handleCancel" color="secondary" outlined type="button">
        <slot name="cancelButtonText" />
      </Button>
      <Button color="primary" type="submit">
        <slot name="submitButtonText" />
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { TodoItem, TodoPayload } from "~~/types/todos";

const props = defineProps<{
  text: TodoItem["text"];
}>();
const emit = defineEmits<{
  (e: "submit", todoPayload: TodoPayload): void;
  (e: "cancel"): void;
}>();

const todoText = ref(props.text);

const handleSubmit = () => {
  emit("submit", { text: todoText.value });
};

const handleCancel = () => {
  emit("cancel");
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.editor {
  resize: none;
  min-height: 200px;
}

.form-controls {
  padding: 20px 0px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
