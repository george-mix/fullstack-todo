<template>
  <div>app</div>
</template>

<script setup lang="ts">
try {
  const data = await $fetch("http://localhost:5000");
  console.log(data);
} catch (error) {
  console.log(error);
}
</script>
