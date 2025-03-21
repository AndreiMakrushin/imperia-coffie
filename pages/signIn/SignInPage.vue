<script setup lang="ts">
import useGlobalStore from "@/shared/stores/useGlobalStore";
import Button from "@/shared/ui/button";
import InputText from "@/shared/ui/input-text";
import { ref } from "vue";
import { login } from "@/shared/helpers/signIn";

const globalStore = useGlobalStore();
const username = ref("");
const password = ref("");

const handleLogin = () => {
  globalStore.error = null;
  const error = login(username.value, password.value, globalStore.users);
  if (error) {
    globalStore.error = error;
  }
};
</script>

<template>
  <div class="container">
    <h1>Вход в систему</h1>
    <form @submit.prevent="handleLogin">
      <InputText v-model="username" label="Логин" required />
      <InputText v-model="password" label="Пароль" type="password" required />
      <Button label="Войти" backgroundColor="#007bff" />
    </form>
    <p v-if="globalStore.error" class="error">{{ globalStore.error }}</p>
  </div>
</template>

<style lang="less">
.container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    font-size: 2rem;
    color: #333333;
    margin-bottom: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 1.5rem;
    text-align: left;

    label {
      display: block;
      font-size: 0.9rem;
      color: #555555;
      font-weight: 500;
    }

    input {
      display: flex;
      flex-grow: 1;
      padding: 0.75rem;
      border: 1px solid #cccccc;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
      }
    }
  }

  .error {
    color: #dc3545;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
}
</style>
