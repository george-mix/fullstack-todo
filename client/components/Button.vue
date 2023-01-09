<template>
  <button class="button" :class="{ outlined }" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  outlined?: boolean;
  color: "primary" | "secondary";
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const handleClick = () => {
  emit("click");
};

const cssColorVariable = `var(--${props.color})`;
</script>

<style scoped>
.button {
  padding: 4px 8px;
  background-color: v-bind(cssColorVariable);
  color: var(--background);
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.button:hover {
  opacity: 0.5;
}

.outlined {
  background-color: var(--background);
  color: v-bind(cssColorVariable);
  border: 1px solid v-bind(cssColorVariable);
}
</style>
