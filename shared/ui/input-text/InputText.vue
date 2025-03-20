<script setup lang="ts">
import InputText from "primevue/inputtext";

defineProps<{
  label: string;
  required?: boolean;
  type?: string;
}>();

const model = defineModel<string>({ required: true });
</script>

<template>
  <InputText
    class="input-text"
    :required="required"
    v-model="model"
    :placeholder="label"
    :type="type"
  />
</template>

<style scoped>
.input-text {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  background-color: #f5f5f5;
  color: #000;
}
</style>
