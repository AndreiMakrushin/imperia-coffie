<script setup lang="ts">
import useGlobalStore from "@/shared/stores/useGlobalStore";
import DropDownMultiSelect from "@/shared/widgets/drop-down-multi-select";
import InputDate from "@/shared/ui/input-date";
import Button from "@/shared/ui/button";
import logout from "@/shared/helpers/logout";

const globalStore = useGlobalStore();

const { filterDate, filterCategory, filteredProducts, categories } =
  storeToRefs(globalStore);

const handleLogout = () => {
  logout();
};
</script>

<template>
  <div class="account-container">
    <h1>Аккаунт</h1>
    <Button background-color="#dc3545" label="Выйти" @click="handleLogout" />
    <div class="filters">
      <h2>Фильтры</h2>
      <InputDate v-model="filterDate" label="Дата создания" />
      <DropDownMultiSelect :options="categories" v-model="filterCategory" />
    </div>
    <table class="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Категория</th>
          <th>Статус</th>
          <th>Дата создания</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }} руб.</td>
          <td>{{ product.category }}</td>
          <td>{{ product.status }}</td>
          <td>{{ product.date_created }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less">
.account-container {
  max-width: 900px;
  margin: 10rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1.5rem;
}

.filters {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 2rem 0;

  h2 {
    font-size: 1.5rem;
    color: #333333;
    margin-bottom: 1rem;
  }

  .filter-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }

  .filter-select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #ffffff;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 500;
    color: #333333;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
}
</style>
