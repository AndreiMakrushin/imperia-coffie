<template>
  <div>
    <h1>Аккаунт</h1>
    <button @click="logout">Выход</button>
    <div>
      <h2>Фильтры</h2>
      <input type="date" v-model="filterDate" />
      <select v-model="filterStatus" multiple>
        <option value="active">Активный</option>
        <option value="inactive">Неактивный</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Статус</th>
          <th>Дата создания</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.active ? "Активный" : "Неактивный" }}</td>
          <td>{{ user.created }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const users = ref([
  {
    id: 1,
    name: "David",
    surname: "Jones",
    active: true,
    created: "03.03.2025 10:00:21",
  },
  {
    id: 2,
    name: "Samantha",
    surname: "Robertson",
    active: true,
    created: "03.03.2025 10:28:13",
  },
  {
    id: 3,
    name: "Nicholas",
    surname: "Crew",
    active: false,
    created: "01.03.2025 12:56:28",
  },
  // Добавьте больше пользователей по необходимости
]);

const filterDate = ref("");
const filterStatus = ref([]);

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const matchesDate =
      !filterDate.value || user.created.includes(filterDate.value);
    const matchesStatus =
      filterStatus.value.length === 0 ||
      filterStatus.value.includes(user.active ? "active" : "inactive");
    return matchesDate && matchesStatus;
  });
});

const logout = () => {
  localStorage.removeItem("authenticated");
  navigateTo("/login");
};
</script>
