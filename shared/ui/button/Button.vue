<script setup lang="ts">
import type { IButtonProps } from "./types";
defineProps<IButtonProps>();
</script>

<template>
  <button :style="{ backgroundColor: backgroundColor }" type="submit">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 0.75rem;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
