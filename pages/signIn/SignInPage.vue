<template>
  <div>
    <h1>Вход в систему</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Логин:</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");
const error = ref("");

const login = () => {
  const users = [
    { username: "david.jones@creds.com", password: "8u3&s-1uda" },
    { username: "sam.robertson@creds.com", password: "0k91sa639" },
    { username: "nic.crew@creds.com", password: "1atr48asf03" },
  ];

  const user = users.find(
    (u) => u.username === username.value && u.password === password.value
  );

  if (user) {
    localStorage.setItem("authenticated", "true");
    navigateTo("/profile");
  } else {
    error.value = "Введены неверные данные авторизации. Попробуйте ещё раз";
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
